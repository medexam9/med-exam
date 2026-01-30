// script.js

// عناصر DOM
const searchByIdForm = document.getElementById('searchByIdForm');
const searchByNameForm = document.getElementById('searchByNameForm');
const uniIdInput = document.getElementById('uniIdInput');
const nameInput = document.getElementById('nameInput');
const fatherNameInput = document.getElementById('fatherNameInput');
const resultsContainer = document.getElementById('resultsContainer');
const searchTypeRadios = document.querySelectorAll('input[name="searchType"]');

// تحويل الأرقام إلى كلمات
const numberToWords = (num) => {
    if (num === 0) return 'صفر';
    const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
    
    if (num > 99) return num.toString();
    if (num < 10) return ones[num];
    if (num === 10) return 'عشرة';
    if (num < 20) return ones[num - 10] + ' عشر';
    
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return one > 0 ? `${ones[one]} و ${tens[ten]}` : tens[ten];
};

// دالة البحث بالرقم الجامعي
const searchById = (id) => studentData.find(student => student.uniId === id);

// دالة البحث بالاسم
const searchByName = (name, fatherName) => studentData.find(student => 
    student.name.trim().toLowerCase().includes(name.trim().toLowerCase()) &&
    student.fatherName.trim().toLowerCase().includes(fatherName.trim().toLowerCase())
);

// حساب معدل الفصل
const calculateSemesterAverage = (student) => {
    const subjects = Object.keys(student.scores);
    let totalSum = 0;
    let subjectCount = 0;
    
    subjects.forEach(subject => {
        const practicalScore = student.scores[subject].practical || 0;
        const theoreticalScore = student.scores[subject].theoretical || 0;
        const totalScore = practicalScore + theoreticalScore;
        totalSum += totalScore;
        subjectCount++;
    });

    return subjectCount > 0 ? (totalSum / subjectCount).toFixed(2) : 0;
};

// حساب عدد مواد الرسوب
const countFailedSubjects = (student) => {
    const subjects = Object.keys(student.scores);
    let failedCount = 0;
    
    subjects.forEach(subject => {
        const practicalScore = student.scores[subject].practical || 0;
        const theoreticalScore = student.scores[subject].theoretical || 0;
        const totalScore = practicalScore + theoreticalScore;
        
        if (totalScore < 60) {
            failedCount++;
        }
    });
    return failedCount;
};

// دالة تحديد تقدير المواد العملية
const getPracticalGrade = (score) => {
    if (score === 0 || score === "غير موجود") {
        return { text: 'غياب / لم يتقدم', class: 'result-absent' };
    } else if (score >= 27) {
        return { text: 'ممتاز', class: 'result-excellent' };
    } else if (score >= 23) {
        return { text: 'جيد جداً', class: 'result-very-good' };
    } else if (score >= 18) {
        return { text: 'متوسط', class: 'result-good' };
    } else if (score >= 12) {
        return { text: 'سيئ', class: 'result-poor' };
    } else {
        return { text: 'راسب', class: 'result-fail' };
    }
};

// دالة تحديد تقدير المواد النظرية
const getTheoreticalGrade = (score) => {
    if (score === 0) {
        return { text: 'غياب / لم يتقدم', class: 'result-absent' };
    } else if (score >= 96) {
        return { text: 'ممتاز جداً', class: 'result-excellent' };
    } else if (score >= 85) {
        return { text: 'ممتاز', class: 'result-very-good' };
    } else if (score >= 78) {
        return { text: 'جيد جداً', class: 'result-good' };
    } else if (score >= 70) {
        return { text: 'متوسط', class: 'result-medium' };
    } else if (score >= 60) {
        return { text: 'سيئ', class: 'result-poor' };
    } else {
        return { text: 'راسب', class: 'result-fail' };
    }
};

// عرض النتائج
const displayResults = (student) => {
    resultsContainer.innerHTML = '';

    if (!student) {
        resultsContainer.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i> عذرًا، لم يتم العثور على أي نتائج تطابق بحثك. يرجى التحقق من المدخلات والمحاولة مرة أخرى.</div>';
        return;
    }

    let practicalTableHTML = '';
    let theoreticalTableHTML = '';
    const subjectsWithPractical = ['الكيمياء الحيوية و البيولوجيا الجزيئية', 'علم النسج العام', 'التشريح الوصفي 1'];

    // بناء جدول القسم العملي
    subjectsWithPractical.forEach(subject => {
        const score = student.scores[subject];
        if (score) {
            const total = score.practical;
            const grade = getPracticalGrade(total);
            const totalDisplay = (total === "غير موجود") ? 0 : total;

            practicalTableHTML += `
                <tr>
                    <td>${subject}</td>
                    <td>${total}</td>
                    <td>${numberToWords(totalDisplay)}</td>
                    <td class="${grade.class}">${grade.text}</td>
                </tr>
            `;
        }
    });

    // بناء جدول القسم النظري
    Object.keys(student.scores).forEach(subject => {
        const score = student.scores[subject];
        const practicalScore = (score.practical === "غير موجود") ? 0 : (score.practical || 0);
        const theoreticalScore = score.theoretical || 0;
        const total = practicalScore + theoreticalScore;
        const grade = getTheoreticalGrade(total);
        let practicalCell = `<td>${score.practical}</td>`;

        if (!subjectsWithPractical.includes(subject)) {
            practicalCell = '<td>-</td>';
        }

        theoreticalTableHTML += `
            <tr>
                <td>${subject}</td>
                ${practicalCell}
                <td>${theoreticalScore}</td>
                <td>${total}</td>
                <td>${numberToWords(total)}</td>
                <td class="${grade.class}">${grade.text}</td>
            </tr>
        `;
    });
    
    const average = calculateSemesterAverage(student);
    const failedSubjects = countFailedSubjects(student);

    resultsContainer.innerHTML = `
        <div class="student-info-card">
            <h3>الاسم و النسبة: ${student.name} - اسم الأب: ${student.fatherName}</h3>
            <p>الرقم الجامعي: ${student.uniId} | الرقم الامتحاني: ${student.examId}</p>
        </div>

        <div class="results-tables-container">
            <section class="table-card">
                <h4><i class="fas fa-flask"></i> القسم العملي</h4>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>اسم المادة</th>
                                <th>الدرجة رقماً</th>
                                <th>المجموع كتابة</th>
                                <th>التقدير</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${practicalTableHTML}
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="table-card">
                <h4><i class="fas fa-book-open"></i> القسم النظري</h4>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>اسم المادة</th>
                                <th>درجة العملي</th>
                                <th>درجة الامتحان النظري</th>
                                <th>المجموع رقماً</th>
                                <th>المجموع كتابة</th>
                                <th>التقدير</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${theoreticalTableHTML}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

        <div class="summary-card">
            <h4><i class="fas fa-graduation-cap"></i> بطاقة الفصل الأول</h4>
            <div class="summary-data">
                <div class="summary-item">
                    <p>معدل الفصل الأول</p>
                    <span>${average}%</span>
                </div>
                <div class="summary-item">
                    <p>عدد مواد الحمل (الرسوب)</p>
                    <span>${failedSubjects}</span>
                </div>
            </div>
        </div>
    `;
};

// معالجات الأحداث
searchTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'id') {
            searchByIdForm.classList.add('active');
            searchByNameForm.classList.remove('active');
        } else {
            searchByIdForm.classList.remove('active');
            searchByNameForm.classList.add('active');
        }
        resultsContainer.innerHTML = '';
    });
});

searchByIdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = uniIdInput.value.trim();
    const student = searchById(id);
    displayResults(student);
});

searchByNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const fatherName = fatherNameInput.value.trim();
    const student = searchByName(name, fatherName);
    displayResults(student);
});
