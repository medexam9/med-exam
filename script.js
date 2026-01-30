// script.js

// عناصر DOM
const searchByIdForm = document.getElementById('searchByIdForm');
const searchByNameForm = document.getElementById('searchByNameForm');
const uniIdInput = document.getElementById('uniIdInput');
const nameInput = document.getElementById('nameInput');
const fatherNameInput = document.getElementById('fatherNameInput');
const resultsContainer = document.getElementById('resultsContainer');
const searchTypeRadios = document.querySelectorAll('input[name="searchType"]');

// قوائم المواد الثابتة لكل قسم
const practicalSubjectsList = ['الكيمياء الحيوية و البيولوجيا الجزيئية', 'علم النسج العام', 'التشريح الوصفي 1'];
const theoreticalSubjectsList = ['الكيمياء الحيوية و البيولوجيا الجزيئية', 'علم النسج العام', 'التشريح الوصفي 1', 'علم النفس السلوكي', 'اللغة العربية', 'اللغة الانكليزية 3'];

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
    if (score >= 27) {
        return { text: 'ممتاز', class: 'grade-excellent' };
    } else if (score >= 23) {
        return { text: 'جيد جداً', class: 'grade-very-good' };
    } else if (score >= 18) {
        return { text: 'متوسط', class: 'grade-good' };
    } else if (score >= 12) {
        return { text: 'سيئ', class: 'grade-poor' };
    } else {
        return { text: 'راسب', class: 'grade-fail' };
    }
};

// دالة تحديد تقدير المواد النظرية (للمجموع الكلي)
const getTheoreticalGrade = (score) => {
    if (score >= 96) {
        return { text: 'ممتاز جداً', class: 'grade-excellent' };
    } else if (score >= 85) {
        return { text: 'ممتاز', class: 'grade-very-good' };
    } else if (score >= 78) {
        return { text: 'جيد جداً', class: 'grade-good' };
    } else if (score >= 70) {
        return { text: 'متوسط', class: 'grade-medium' };
    } else if (score >= 60) {
        return { text: 'سيئ', class: 'grade-poor' };
    } else {
        return { text: 'راسب', class: 'grade-fail' };
    }
};

// دالة للحصول على أيقونة المادة
const getSubjectIcon = (subjectName) => {
    if (subjectName.includes('الكيمياء')) return 'fa-flask';
    if (subjectName.includes('النسج')) return 'fa-microscope';
    if (subjectName.includes('التشريح')) return 'fa-user-md';
    if (subjectName.includes('النفس')) return 'fa-brain';
    if (subjectName.includes('العربية')) return 'fa-book';
    if (subjectName.includes('الانكليزية')) return 'fa-language';
    return 'fa-file-alt'; // أيقونة افتراضية
};

// عرض معلومات الطالب فقط
const displayStudentInfo = (student) => {
    resultsContainer.innerHTML = '';

    if (!student) {
        resultsContainer.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i> عذرًا، لم يتم العثور على أي نتائج تطابق بحثك. يرجى التحقق من المدخلات والمحاولة مرة أخرى.</div>';
        return;
    }

    resultsContainer.innerHTML = `
        <div class="search-result-card">
            <h3>نتائج البحث</h3>
            <div class="student-info">
                <p>الاسم و النسبة: <span>${student.name}</span></p>
                <p>اسم الأب: <span>${student.fatherName}</span></p>
                <p>الرقم الجامعي: <span>${student.uniId}</span></p>
            </div>
            <button class="get-grades-btn" onclick="showGrades('${student.uniId}')">
                <i class="fas fa-eye"></i> انقر للحصول على الدرجات
            </button>
        </div>
        
        <div id="gradesContainer" class="grades-container">
            <!-- سيتم عرض الدرجات هنا -->
        </div>
    `;
};

// عرض الدرجات
const showGrades = (uniId) => {
    const student = searchById(uniId);
    const gradesContainer = document.getElementById('gradesContainer');
    
    if (!student) return;

    let practicalCardsHTML = '';
    let theoreticalCardsHTML = '';

    // --- بناء بطاقات القسم العملي (3 بطاقات ثابتة) ---
    practicalSubjectsList.forEach(subject => {
        const score = student.scores[subject];
        const practicalScore = (score?.practical === "غير موجود") ? 0 : (score?.practical || 0);
        const icon = getSubjectIcon(subject);

        if (practicalScore === 0) {
            practicalCardsHTML += `
                <div class="subject-card border-pending">
                    <div class="subject-card-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <p class="no-grades-message"><i class="fas fa-clock"></i> لم تصدر الدرجات بعد</p>
                    </div>
                </div>
            `;
        } else {
            const grade = getPracticalGrade(practicalScore);
            const result = practicalScore >= 12;
            const resultText = result ? 'ناجح' : 'راسب';
            const resultClass = result ? 'result-pass' : 'result-fail';
            const borderClass = result ? 'border-pass' : 'border-fail';

            practicalCardsHTML += `
                <div class="subject-card ${borderClass}">
                    <div class="subject-card-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <div class="subject-details">
                            <div class="detail-row">
                                <span class="detail-label">درجة العملي:</span>
                                <span class="detail-value">${practicalScore}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">درجة العملي كتابةً:</span>
                                <span class="detail-value">${numberToWords(practicalScore)}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">النتيجة:</span>
                                <span class="detail-value ${resultClass}">${resultText}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">التقدير:</span>
                                <span class="detail-value ${grade.class}">${grade.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    // --- بناء بطاقات القسم النظري (6 بطاقات ثابتة) ---
    theoreticalSubjectsList.forEach(subject => {
        const score = student.scores[subject];
        const theoreticalScore = score?.theoretical || 0;
        const practicalScore = (score?.practical === "غير موجود") ? 0 : (score?.practical || 0);
        const total = practicalScore + theoreticalScore;
        const icon = getSubjectIcon(subject);

        // إذا كانت درجة النظري صفر، اعرض رسالة "لم تصدر النتائج بعد"
        if (theoreticalScore === 0) {
            theoreticalCardsHTML += `
                <div class="subject-card border-pending">
                    <div class="subject-card-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <p class="no-grades-message"><i class="fas fa-clock"></i> لم تصدر النتائج بعد</p>
                    </div>
                </div>
            `;
        } else {
            const grade = getTheoreticalGrade(total);
            const result = total >= 60;
            const resultText = result ? 'ناجح' : 'راسب';
            const resultClass = result ? 'result-pass' : 'result-fail';
            const borderClass = result ? 'border-pass' : 'border-fail';

            theoreticalCardsHTML += `
                <div class="subject-card ${borderClass}">
                    <div class="subject-card-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="subject-card-content">
                        <h5 class="subject-name">${subject}</h5>
                        <div class="subject-details">
                            <div class="detail-row">
                                <span class="detail-label">درجة العملي:</span>
                                <span class="detail-value">${practicalScore > 0 ? practicalScore : '-'}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">درجة النظري:</span>
                                <span class="detail-value">${theoreticalScore}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">المجموع رقماً:</span>
                                <span class="detail-value">${total}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">المجموع كتابةً:</span>
                                <span class="detail-value">${numberToWords(total)}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">النتيجة:</span>
                                <span class="detail-value ${resultClass}">${resultText}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">التقدير العام:</span>
                                <span class="detail-value ${grade.class}">${grade.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    const average = calculateSemesterAverage(student);
    const failedSubjects = countFailedSubjects(student);

    gradesContainer.innerHTML = `
        <div class="results-section">
            <h4 class="section-title"><i class="fas fa-flask"></i> القسم العملي</h4>
            <div class="subjects-cards-container">
                ${practicalCardsHTML}
            </div>
        </div>

        <div class="results-section">
            <h4 class="section-title"><i class="fas fa-book-open"></i> القسم النظري</h4>
            <div class="subjects-cards-container">
                ${theoreticalCardsHTML}
            </div>
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
    
    gradesContainer.classList.add('show');
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
    displayStudentInfo(student);
});

searchByNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const fatherName = fatherNameInput.value.trim();
    const student = searchByName(name, fatherName);
    displayStudentInfo(student);
});

// التعامل مع القائمة الجانبية
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');
    const pageContents = document.querySelectorAll('.page-content');
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');

    // فتح القائمة الجانبية
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
    });

    // إغلاق القائمة الجانبية
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    });

    // التنقل بين الصفحات
    sidebarMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = item.getAttribute('data-page');
            
            // إخفاء جميع الصفحات
            pageContents.forEach(page => {
                page.classList.remove('active');
            });
            
            // إظهار الصفحة المطلوبة
            document.getElementById(`${targetPage}Page`).classList.add('active');
            
            // إغلاق القائمة الجانبية
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('show');
        });
    });

    // تحميل ملف PDF
    downloadPdfBtn.addEventListener('click', () => {
        // إنشاء رابط مؤقت لملف PDF
        const link = document.createElement('a');
        link.href = '777.pdf'; // مسار ملف PDF
        link.download = '777.pdf'; // اسم الملف عند التحميل
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
