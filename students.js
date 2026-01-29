// students.js
// ضع هنا كامل مصفوفة الطلاب الخاصة بك
const studentData = [
    {
        "uniId": "827147178",
        "examId": "654",
        "name": "هبه سلامه",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": { "practical": 28, "theoretical": 0 },
            "علم النسج العام": { "practical": 0, "theoretical": 0 },
            "التشريح الوصفي 1": { "practical": 0, "theoretical": 0 },
            "علم النفس السلوكي": { "theoretical": 0 },
            "اللغة العربية": { "theoretical": 0 },
            "اللغة الانكليزية 3": { "theoretical": 0 }
        }
    },
    {
        "uniId": "2522390318",
        "examId": "2",
        "name": "ابراهيم المدني",
        "fatherName": "غالب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4291636845",
        "examId": "3",
        "name": "ابراهيم المصري",
        "fatherName": "فراس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3518254999",
        "examId": "4",
        "name": "ابراهيم شحود",
        "fatherName": "راتب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1341476422",
        "examId": "5",
        "name": "ابراهيم علي",
        "fatherName": "منذر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3722021024",
        "examId": "6",
        "name": "ابراهيم محمد",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "260519527",
        "examId": "7",
        "name": "احلام عزوز",
        "fatherName": "عبد الحليم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "444938510",
        "examId": "8",
        "name": "احمد السماعيل",
        "fatherName": "عبد القادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1014869447",
        "examId": "9",
        "name": "احمد الغزالي",
        "fatherName": "محمد عيد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1341791538",
        "examId": "10",
        "name": "احمد الغفير",
        "fatherName": "مأمون",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615140",
        "examId": "11",
        "name": "احمد المحملجي",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2336162134",
        "examId": "12",
        "name": "احمد حمدان",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3003925755",
        "examId": "13",
        "name": "احمد دليمي",
        "fatherName": "محمد انس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2658129296",
        "examId": "14",
        "name": "احمد ديب",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3294278079",
        "examId": "15",
        "name": "احمد سمرو",
        "fatherName": "عبد السلام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1818372046",
        "examId": "16",
        "name": "احمد محفوض",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3122126892",
        "examId": "17",
        "name": "اخلاص شنو",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3786744785",
        "examId": "18",
        "name": "ادهم الخالد",
        "fatherName": "عبد اللطيف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1562465172",
        "examId": "19",
        "name": "اسامه الخالد",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1095321848",
        "examId": "20",
        "name": "اسامه المنصور",
        "fatherName": "اهليل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3382516021",
        "examId": "21",
        "name": "اسامه عيون",
        "fatherName": "عبد العزيز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615169",
        "examId": "22",
        "name": "اسامه منصور",
        "fatherName": "فيصل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3407996961",
        "examId": "23",
        "name": "استيفان مطران",
        "fatherName": "الياس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "833438634",
        "examId": "24",
        "name": "اسراء بكر",
        "fatherName": "ثائر محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3901642636",
        "examId": "25",
        "name": "اسماء ابراهيم",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3620727496",
        "examId": "26",
        "name": "اسماء جازيه",
        "fatherName": "عامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1291144774",
        "examId": "27",
        "name": "اسماء حداد",
        "fatherName": "عبد الكافي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3947492029",
        "examId": "28",
        "name": "البراء عياش",
        "fatherName": "مصلح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1605326395",
        "examId": "29",
        "name": "البير محفوض",
        "fatherName": "نعيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3327229444",
        "examId": "30",
        "name": "الزهراء احمد",
        "fatherName": "منير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4146618241",
        "examId": "31",
        "name": "الزهراء مصطفى",
        "fatherName": "أيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1908419189",
        "examId": "32",
        "name": "الغيد خلف",
        "fatherName": "كريم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1188357161",
        "examId": "33",
        "name": "الياس الشامي",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3650848249",
        "examId": "34",
        "name": "الياس خلوف",
        "fatherName": "وائل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "565106406",
        "examId": "35",
        "name": "الياس عبد الاحد",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2868029219",
        "examId": "36",
        "name": "اليانا عطيه",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "268147510",
        "examId": "37",
        "name": "اماني حماده",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "557320865",
        "examId": "38",
        "name": "امنه الضحيك",
        "fatherName": "محمد شريف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "167326656",
        "examId": "39",
        "name": "امير القصاب",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1007083906",
        "examId": "40",
        "name": "امير حمراوي",
        "fatherName": "نبيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2886903587",
        "examId": "41",
        "name": "اميره دبدوب",
        "fatherName": "احمد سهاد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4253730551",
        "examId": "42",
        "name": "انتصار الطحان",
        "fatherName": "اكسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "446432595",
        "examId": "43",
        "name": "انجي مبارك",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1655815601",
        "examId": "44",
        "name": "انجيلا المقدسي",
        "fatherName": "منذر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1712753821",
        "examId": "45",
        "name": "اندرو الداود",
        "fatherName": "داود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "243139244",
        "examId": "46",
        "name": "انس المحمد",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2937550351",
        "examId": "47",
        "name": "انطوان خطوف",
        "fatherName": "خليل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615158",
        "examId": "48",
        "name": "انطوان شمعون",
        "fatherName": "رامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "44328148",
        "examId": "49",
        "name": "انطونيو حنا",
        "fatherName": "عدي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "281045538",
        "examId": "50",
        "name": "اوراد علي",
        "fatherName": "نبيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2238014334",
        "examId": "51",
        "name": "ايلي ابراهيم",
        "fatherName": "حنا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2048640422",
        "examId": "52",
        "name": "ايلي طنبه",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2137351038",
        "examId": "53",
        "name": "ايلي عبدوش",
        "fatherName": "شادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1736268002",
        "examId": "54",
        "name": "ايلي وسوف",
        "fatherName": "رجا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3107892337",
        "examId": "55",
        "name": "ايلي يوسف",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1392123186",
        "examId": "56",
        "name": "ايميلي ربيع",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1036889543",
        "examId": "57",
        "name": "ايه الحسن",
        "fatherName": "توفيق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3157045016",
        "examId": "58",
        "name": "ايه السليمان",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1916204730",
        "examId": "59",
        "name": "ايه الشركه",
        "fatherName": "حكمت",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3765903658",
        "examId": "60",
        "name": "ايه الصالحاني",
        "fatherName": "مصطفى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1090839593",
        "examId": "61",
        "name": "ايه العكاري",
        "fatherName": "عبد الغني",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "186043466",
        "examId": "62",
        "name": "ايه الناجي",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615508",
        "examId": "63",
        "name": "ايه خشفه",
        "fatherName": "محمد كمال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4108554389",
        "examId": "64",
        "name": "ايه شحاده",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2227240623",
        "examId": "65",
        "name": "ايهم بيشاني",
        "fatherName": "غازي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2121464840",
        "examId": "66",
        "name": "ايهم مقداد",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1941528112",
        "examId": "67",
        "name": "إبان عواد",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3631973881",
        "examId": "68",
        "name": "إبراهيم عاصي",
        "fatherName": "مروان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3904945922",
        "examId": "69",
        "name": "إيميلي موسى",
        "fatherName": "عهد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3838570518",
        "examId": "70",
        "name": "أحمد الخضور",
        "fatherName": "يقظان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2642243098",
        "examId": "71",
        "name": "أحمد عمار",
        "fatherName": "رامز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1892532991",
        "examId": "72",
        "name": "أحمد قزق",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3002116554",
        "examId": "73",
        "name": "أطلال السلومي",
        "fatherName": "حازم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2817382455",
        "examId": "74",
        "name": "ألما سليمان",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1436478494",
        "examId": "75",
        "name": "ألمى خليل",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3398244661",
        "examId": "76",
        "name": "أليسار أحمد",
        "fatherName": "مالك",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3425062128",
        "examId": "77",
        "name": "أمل الدرويش",
        "fatherName": "لياس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "317300189",
        "examId": "78",
        "name": "أمل العكاري",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4151258054",
        "examId": "79",
        "name": "أمل حسن",
        "fatherName": "أمين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3739243749",
        "examId": "80",
        "name": "أنس حمزه",
        "fatherName": "عبد الهادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1968188021",
        "examId": "81",
        "name": "أوس الجوراني",
        "fatherName": "حمدو",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "637773266",
        "examId": "82",
        "name": "أوس علي",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "931113760",
        "examId": "83",
        "name": "آصف عيسى",
        "fatherName": "نبيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2224094895",
        "examId": "84",
        "name": "آلاء التركاوي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "512807999",
        "examId": "85",
        "name": "آلاء الظاهر",
        "fatherName": "عامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3494740818",
        "examId": "86",
        "name": "آلاء عبدالله",
        "fatherName": "توفيق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3666576889",
        "examId": "87",
        "name": "آلاء موسى",
        "fatherName": "رامز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "718225667",
        "examId": "88",
        "name": "آية بارودي",
        "fatherName": "مرهف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2441937917",
        "examId": "89",
        "name": "آية قره مان",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "580835046",
        "examId": "90",
        "name": "آيه المصري",
        "fatherName": "طلال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3597055757",
        "examId": "91",
        "name": "آيه ديب",
        "fatherName": "منصف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2023474598",
        "examId": "92",
        "name": "آيه عيسى",
        "fatherName": "شمعون",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2230071235",
        "examId": "93",
        "name": "باسكال الحلو",
        "fatherName": "جورج",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1150608425",
        "examId": "94",
        "name": "باسل غالي",
        "fatherName": "طلال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2144979021",
        "examId": "95",
        "name": "بتول الحسين",
        "fatherName": "نجيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2588450606",
        "examId": "96",
        "name": "بتول خضور",
        "fatherName": "بشار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "460667150",
        "examId": "97",
        "name": "بتول ديوب",
        "fatherName": "عماد الدين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1682475510",
        "examId": "98",
        "name": "بتول عيسى",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2711606672",
        "examId": "99",
        "name": "بتول معروف",
        "fatherName": "مهند",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1406515299",
        "examId": "100",
        "name": "براء رحمه",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2260349546",
        "examId": "101",
        "name": "براءه رمضان",
        "fatherName": "عبد الخالق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3651005807",
        "examId": "102",
        "name": "بشار حجل",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "424412499",
        "examId": "103",
        "name": "بشار خضور",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4212993645",
        "examId": "104",
        "name": "بشار مخلوف",
        "fatherName": "مرهف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3644556793",
        "examId": "105",
        "name": "بشرى حمود",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4031405274",
        "examId": "106",
        "name": "بلال قاسم",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1549882260",
        "examId": "107",
        "name": "بيان عكش",
        "fatherName": "يعقوب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3399738746",
        "examId": "108",
        "name": "بيتر خشون",
        "fatherName": "نزيه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3632131439",
        "examId": "109",
        "name": "بيرلا المقدسي",
        "fatherName": "حنا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4010721705",
        "examId": "110",
        "name": "بيرنا الصطوف",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3043168576",
        "examId": "111",
        "name": "بيلسان البياع",
        "fatherName": "ماهر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3991689779",
        "examId": "112",
        "name": "تالا حياص",
        "fatherName": "هشام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3106398252",
        "examId": "113",
        "name": "تالا سليمان",
        "fatherName": "مضر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "751492148",
        "examId": "114",
        "name": "تالة زغموت",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3193299667",
        "examId": "115",
        "name": "تراث بلول",
        "fatherName": "لؤي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3187008211",
        "examId": "116",
        "name": "تسنيم مندو",
        "fatherName": "محمد الحسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3410985131",
        "examId": "117",
        "name": "تقى صغير",
        "fatherName": "يوسف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "823145558",
        "examId": "118",
        "name": "تمام رجوب",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2325073307",
        "examId": "119",
        "name": "توفيق جرجس",
        "fatherName": "نعيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "321940002",
        "examId": "120",
        "name": "جاد جربنده",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1692227810",
        "examId": "121",
        "name": "جاد مخول",
        "fatherName": "اليان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1578508928",
        "examId": "122",
        "name": "جاد مروش",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1332354354",
        "examId": "123",
        "name": "جعفر السليمان",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3906440007",
        "examId": "124",
        "name": "جعفر حواط",
        "fatherName": "جابر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1005589821",
        "examId": "125",
        "name": "جعفر خليفه",
        "fatherName": "محي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2724347142",
        "examId": "126",
        "name": "جعفر مصطفى",
        "fatherName": "مفيد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4002778606",
        "examId": "127",
        "name": "جمان قيسون",
        "fatherName": "طارق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615947",
        "examId": "128",
        "name": "جميلة  جنيد",
        "fatherName": "عدنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2023317040",
        "examId": "129",
        "name": "جنا مدنيه",
        "fatherName": "رياض",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1400223843",
        "examId": "130",
        "name": "جنان النقري",
        "fatherName": "وفيق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2296604197",
        "examId": "131",
        "name": "جنفر ديوب",
        "fatherName": "نزار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3126924263",
        "examId": "132",
        "name": "جنى الشعار",
        "fatherName": "أحمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1786914766",
        "examId": "133",
        "name": "جواد حرب",
        "fatherName": "محمد ملهم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3377876208",
        "examId": "134",
        "name": "جود سمور",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3248428686",
        "examId": "135",
        "name": "جودي النقري",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1459835117",
        "examId": "136",
        "name": "جودي زيدان",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "359688738",
        "examId": "137",
        "name": "جودي سلوم",
        "fatherName": "عيسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2686440848",
        "examId": "138",
        "name": "جودي علي",
        "fatherName": "وجدي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1903464260",
        "examId": "139",
        "name": "جودي يوسف",
        "fatherName": "نذار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2956267161",
        "examId": "140",
        "name": "جورج طعمه",
        "fatherName": "منيف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1349577079",
        "examId": "141",
        "name": "جورج ملوحي",
        "fatherName": "ستيف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3312994889",
        "examId": "142",
        "name": "جورجينا دنحو",
        "fatherName": "يعقوب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1639771845",
        "examId": "143",
        "name": "جوري القرضه",
        "fatherName": "نوار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1204400917",
        "examId": "144",
        "name": "جولي البدر",
        "fatherName": "جهاد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2179739587",
        "examId": "145",
        "name": "جولي الدالاتي",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "724517123",
        "examId": "146",
        "name": "جولي حسن",
        "fatherName": "ناجي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2512795576",
        "examId": "147",
        "name": "جوليا جرجس",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2716561601",
        "examId": "148",
        "name": "جويل ديب",
        "fatherName": "هادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1597225738",
        "examId": "149",
        "name": "جويل موسى",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2348745046",
        "examId": "150",
        "name": "جيزيل عطيه",
        "fatherName": "شادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1183717348",
        "examId": "151",
        "name": "جينا سكاف",
        "fatherName": "مروان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1922338628",
        "examId": "152",
        "name": "حازم حسين",
        "fatherName": "صابر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1467935774",
        "examId": "153",
        "name": "حذيفه طلاس",
        "fatherName": "يامن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "868041642",
        "examId": "154",
        "name": "حرير معصراني",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "950303244",
        "examId": "155",
        "name": "حسان العلي",
        "fatherName": "عبدالقادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 7,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615150",
        "examId": "156",
        "name": "حسان كنعان",
        "fatherName": "اسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2983399744",
        "examId": "157",
        "name": "حسن ابراهيم",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "782949428",
        "examId": "158",
        "name": "حسن الحسن",
        "fatherName": "خضر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2067514790",
        "examId": "159",
        "name": "حسن العلي",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1723527532",
        "examId": "160",
        "name": "حسن المحمد",
        "fatherName": "سامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "839887648",
        "examId": "161",
        "name": "حسن جناد",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1428535395",
        "examId": "162",
        "name": "حسن شمه",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2740075782",
        "examId": "163",
        "name": "حسن عطيه",
        "fatherName": "سمير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3128575906",
        "examId": "164",
        "name": "حسن وقاف",
        "fatherName": "أحمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2907587156",
        "examId": "165",
        "name": "حسين الشعبان",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3933572590",
        "examId": "166",
        "name": "حسين راعي",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3270448782",
        "examId": "167",
        "name": "حلا الأمير تامر",
        "fatherName": "مصطفى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3155393373",
        "examId": "168",
        "name": "حلا الدالي",
        "fatherName": "حيدر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "342308455",
        "examId": "169",
        "name": "حلا السلومي",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "141845716",
        "examId": "170",
        "name": "حلا بريجاوي",
        "fatherName": "محمد لؤي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "486305648",
        "examId": "171",
        "name": "حلا توما",
        "fatherName": "مروان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3223262862",
        "examId": "172",
        "name": "حلا جبر",
        "fatherName": "أحمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3704640741",
        "examId": "173",
        "name": "حلا حداد",
        "fatherName": "ايمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "784285955",
        "examId": "174",
        "name": "حلا حسن",
        "fatherName": "ربيع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2890206873",
        "examId": "175",
        "name": "حلا عباس",
        "fatherName": "حسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3068649516",
        "examId": "176",
        "name": "حلا محمود",
        "fatherName": "اسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3653993977",
        "examId": "177",
        "name": "حلا مراد",
        "fatherName": "محمد صفا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3628828153",
        "examId": "178",
        "name": "حلا ملوك",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3011396180",
        "examId": "179",
        "name": "حلا ميهوب",
        "fatherName": "منهل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "180",
        "name": "حمزة الدرويش",
        "fatherName": "هاني",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "64696601",
        "examId": "181",
        "name": "حمزة المحمد",
        "fatherName": "رامز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3329038645",
        "examId": "182",
        "name": "حمزه الابراهيم",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3694888441",
        "examId": "183",
        "name": "حمزه الحسن",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2943841807",
        "examId": "184",
        "name": "حمزه الخواجه الحداد",
        "fatherName": "تمام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1327556983",
        "examId": "185",
        "name": "حمزه الدرويش",
        "fatherName": "هاني",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3597370873",
        "examId": "186",
        "name": "حمزه السمره",
        "fatherName": "بشير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2695878032",
        "examId": "187",
        "name": "حمزه القناطره",
        "fatherName": "محمد بشير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2713258315",
        "examId": "188",
        "name": "حمزه حسين",
        "fatherName": "شريف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2354878944",
        "examId": "189",
        "name": "حنين الرستم",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2441622801",
        "examId": "190",
        "name": "حنين الزحيلي",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "937562774",
        "examId": "191",
        "name": "حنين الصالح",
        "fatherName": "حمزه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "576037675",
        "examId": "192",
        "name": "حنين العصفور",
        "fatherName": "يوسف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1999802859",
        "examId": "193",
        "name": "حنين المحمود",
        "fatherName": "أيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3033888950",
        "examId": "194",
        "name": "حنين حمزه",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2599696991",
        "examId": "195",
        "name": "حنين مسلط",
        "fatherName": "شادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3714077925",
        "examId": "196",
        "name": "حيدر الحوراني",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "929777233",
        "examId": "197",
        "name": "حيدر الشاويش",
        "fatherName": "أسد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "929777233",
        "examId": "197",
        "name": "حيدر الشاويش",
        "fatherName": "أسد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "178257925",
        "examId": "198",
        "name": "حيدر المحمود",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "178257925",
        "examId": "198",
        "name": "حيدر المحمود",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "318951832",
        "examId": "199",
        "name": "حيدر المزنه",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "318951832",
        "examId": "199",
        "name": "حيدر المزنه",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1431681123",
        "examId": "200",
        "name": "حيدر سلوم",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1431681123",
        "examId": "200",
        "name": "حيدر سلوم",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1780623310",
        "examId": "201",
        "name": "حيدر مندو",
        "fatherName": "محمد الحسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1780623310",
        "examId": "201",
        "name": "حيدر مندو",
        "fatherName": "محمد الحسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2825483112",
        "examId": "202",
        "name": "حيدرة خليل",
        "fatherName": "عامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2825483112",
        "examId": "202",
        "name": "حيدرة خليل",
        "fatherName": "عامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "28441950",
        "examId": "203",
        "name": "حيدره العلي",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "28441950",
        "examId": "203",
        "name": "حيدره العلي",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "686453271",
        "examId": "204",
        "name": "حيدره حيدر",
        "fatherName": "منذر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "686453271",
        "examId": "204",
        "name": "حيدره حيدر",
        "fatherName": "منذر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3137855532",
        "examId": "205",
        "name": "حيدره وسوف",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3137855532",
        "examId": "205",
        "name": "حيدره وسوف",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3535792840",
        "examId": "206",
        "name": "خالد الخطيب",
        "fatherName": "طارق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3535792840",
        "examId": "206",
        "name": "خالد الخطيب",
        "fatherName": "طارق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3194793752",
        "examId": "207",
        "name": "خالد القاسمي",
        "fatherName": "حسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3194793752",
        "examId": "207",
        "name": "خالد القاسمي",
        "fatherName": "حسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3096803510",
        "examId": "208",
        "name": "خالد حجازي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3096803510",
        "examId": "208",
        "name": "خالد حجازي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3208713191",
        "examId": "209",
        "name": "خالد لبان",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3208713191",
        "examId": "209",
        "name": "خالد لبان",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3442442411",
        "examId": "210",
        "name": "خزامه احمد",
        "fatherName": "عهد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3442442411",
        "examId": "210",
        "name": "خزامه احمد",
        "fatherName": "عهد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "898004837",
        "examId": "211",
        "name": "خلدون عمشه خانم",
        "fatherName": "دوكان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "898004837",
        "examId": "211",
        "name": "خلدون عمشه خانم",
        "fatherName": "دوكان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1423895582",
        "examId": "212",
        "name": "خليل ابو الزلف",
        "fatherName": "حبيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1423895582",
        "examId": "212",
        "name": "خليل ابو الزلف",
        "fatherName": "حبيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1698519266",
        "examId": "213",
        "name": "خير الدين مندو",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1698519266",
        "examId": "213",
        "name": "خير الدين مندو",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2310996310",
        "examId": "214",
        "name": "دانا الجمالي",
        "fatherName": "معن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2310996310",
        "examId": "214",
        "name": "دانا الجمالي",
        "fatherName": "معن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615175",
        "examId": "215",
        "name": "دعاء الجهماني",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615175",
        "examId": "215",
        "name": "دعاء الجهماني",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2836414381",
        "examId": "216",
        "name": "دلع عيسى",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2836414381",
        "examId": "216",
        "name": "دلع عيسى",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2683137562",
        "examId": "217",
        "name": "دلع ونوس",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2683137562",
        "examId": "217",
        "name": "دلع ونوس",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2263495274",
        "examId": "218",
        "name": "دنيا الخضر",
        "fatherName": "اياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2263495274",
        "examId": "218",
        "name": "دنيا الخضر",
        "fatherName": "اياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2508155763",
        "examId": "219",
        "name": "ديانا اليوسف",
        "fatherName": "عدنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2508155763",
        "examId": "219",
        "name": "ديانا اليوسف",
        "fatherName": "عدنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4076939551",
        "examId": "220",
        "name": "راشيل الحسين",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4076939551",
        "examId": "220",
        "name": "راشيل الحسين",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3542084296",
        "examId": "221",
        "name": "راغب السيخ",
        "fatherName": "محمد احسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3542084296",
        "examId": "221",
        "name": "راغب السيخ",
        "fatherName": "محمد احسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1357520178",
        "examId": "222",
        "name": "راما جمول",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1357520178",
        "examId": "222",
        "name": "راما جمول",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2137035922",
        "examId": "223",
        "name": "راما عبد النبي",
        "fatherName": "فواز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2137035922",
        "examId": "223",
        "name": "راما عبد النبي",
        "fatherName": "فواز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2778139634",
        "examId": "224",
        "name": "راما قره حسن",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2778139634",
        "examId": "224",
        "name": "راما قره حسن",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2171796488",
        "examId": "225",
        "name": "رامي العباس",
        "fatherName": "نضال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2171796488",
        "examId": "225",
        "name": "رامي العباس",
        "fatherName": "نضال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "847673189",
        "examId": "226",
        "name": "رامي عبد الرحمن",
        "fatherName": "عبد الرحمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 13,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "847673189",
        "examId": "226",
        "name": "رامي عبد الرحمن",
        "fatherName": "عبد الرحمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 13,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1158709082",
        "examId": "227",
        "name": "رتاج العبد",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1158709082",
        "examId": "227",
        "name": "رتاج العبد",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4017170719",
        "examId": "228",
        "name": "رشا جانسيز",
        "fatherName": "محمد الخالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4017170719",
        "examId": "228",
        "name": "رشا جانسيز",
        "fatherName": "محمد الخالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2916709224",
        "examId": "229",
        "name": "رغد الحمود",
        "fatherName": "اسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2916709224",
        "examId": "229",
        "name": "رغد الحمود",
        "fatherName": "اسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2391133595",
        "examId": "230",
        "name": "رغد السالم",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2391133595",
        "examId": "230",
        "name": "رغد السالم",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "934259488",
        "examId": "231",
        "name": "رغد السليمان",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "934259488",
        "examId": "231",
        "name": "رغد السليمان",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3016351109",
        "examId": "232",
        "name": "رغد العيسى",
        "fatherName": "اصف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3016351109",
        "examId": "232",
        "name": "رغد العيسى",
        "fatherName": "اصف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2475046840",
        "examId": "233",
        "name": "رغد الملحم",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2475046840",
        "examId": "233",
        "name": "رغد الملحم",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3104746609",
        "examId": "234",
        "name": "رغد رقماني",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3104746609",
        "examId": "234",
        "name": "رغد رقماني",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "71145615",
        "examId": "235",
        "name": "رغد صالح",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "71145615",
        "examId": "235",
        "name": "رغد صالح",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615292",
        "examId": "236",
        "name": "رغد وقاف",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615292",
        "examId": "236",
        "name": "رغد وقاف",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "336016999",
        "examId": "237",
        "name": "رغيد عساف",
        "fatherName": "ربيع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "336016999",
        "examId": "237",
        "name": "رغيد عساف",
        "fatherName": "ربيع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1529513807",
        "examId": "238",
        "name": "رفاه المصري",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1529513807",
        "examId": "238",
        "name": "رفاه المصري",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1960402480",
        "examId": "239",
        "name": "رقية زعنون",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1960402480",
        "examId": "239",
        "name": "رقية زعنون",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2972310917",
        "examId": "240",
        "name": "رند الجبر",
        "fatherName": "حسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2972310917",
        "examId": "240",
        "name": "رند الجبر",
        "fatherName": "حسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1177268334",
        "examId": "241",
        "name": "رنيم الاشقر",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1177268334",
        "examId": "241",
        "name": "رنيم الاشقر",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4132226128",
        "examId": "242",
        "name": "رهام معروف",
        "fatherName": "فاطر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4132226128",
        "examId": "242",
        "name": "رهام معروف",
        "fatherName": "فاطر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "361497939",
        "examId": "243",
        "name": "رهف السليمان",
        "fatherName": "ازدشير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "361497939",
        "examId": "243",
        "name": "رهف السليمان",
        "fatherName": "ازدشير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "312660376",
        "examId": "244",
        "name": "روان القاضي",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "312660376",
        "examId": "244",
        "name": "روان القاضي",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2362822043",
        "examId": "245",
        "name": "روان عبود",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2362822043",
        "examId": "245",
        "name": "روان عبود",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1598877381",
        "examId": "246",
        "name": "روبير جبيل",
        "fatherName": "رامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1598877381",
        "examId": "246",
        "name": "روبير جبيل",
        "fatherName": "رامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "991355266",
        "examId": "247",
        "name": "روجين فندي",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "991355266",
        "examId": "247",
        "name": "روجين فندي",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4144966598",
        "examId": "248",
        "name": "روزا عبدالله",
        "fatherName": "نسيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4144966598",
        "examId": "248",
        "name": "روزا عبدالله",
        "fatherName": "نسيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2355036502",
        "examId": "249",
        "name": "روعه السليمان",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2355036502",
        "examId": "249",
        "name": "روعه السليمان",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "669388104",
        "examId": "250",
        "name": "رؤى المنصور",
        "fatherName": "عبد الرحمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "669388104",
        "examId": "250",
        "name": "رؤى المنصور",
        "fatherName": "عبد الرحمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2602808",
        "examId": "251",
        "name": "رؤى جوانية",
        "fatherName": "محمد صديق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2602808",
        "examId": "251",
        "name": "رؤى جوانية",
        "fatherName": "محمد صديق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2744873153",
        "examId": "252",
        "name": "ريام شحود",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2744873153",
        "examId": "252",
        "name": "ريام شحود",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "918530848",
        "examId": "253",
        "name": "ريتا خرما",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "918530848",
        "examId": "253",
        "name": "ريتا خرما",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1954111024",
        "examId": "254",
        "name": "ريم الاسعد",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1954111024",
        "examId": "254",
        "name": "ريم الاسعد",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1988556474",
        "examId": "255",
        "name": "ريم العزو",
        "fatherName": "حاتم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1988556474",
        "examId": "255",
        "name": "ريم العزو",
        "fatherName": "حاتم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2351890774",
        "examId": "256",
        "name": "ريم العلوش",
        "fatherName": "محمد عيد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2351890774",
        "examId": "256",
        "name": "ريم العلوش",
        "fatherName": "محمد عيد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3262505683",
        "examId": "257",
        "name": "ريم العلي",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3262505683",
        "examId": "257",
        "name": "ريم العلي",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3084063040",
        "examId": "258",
        "name": "ريم القاسم",
        "fatherName": "عبد الغفار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3084063040",
        "examId": "258",
        "name": "ريم القاسم",
        "fatherName": "عبد الغفار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4141978428",
        "examId": "259",
        "name": "ريم حمدان",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4141978428",
        "examId": "259",
        "name": "ريم حمدان",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3237182301",
        "examId": "260",
        "name": "ريم ليلا",
        "fatherName": "نضال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3237182301",
        "examId": "260",
        "name": "ريم ليلا",
        "fatherName": "نضال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2203411326",
        "examId": "261",
        "name": "ريم موسى",
        "fatherName": "ناجح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2203411326",
        "examId": "261",
        "name": "ريم موسى",
        "fatherName": "ناجح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2643894741",
        "examId": "262",
        "name": "رينيتا خشفه",
        "fatherName": "فرج",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2643894741",
        "examId": "262",
        "name": "رينيتا خشفه",
        "fatherName": "فرج",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "195480650",
        "examId": "263",
        "name": "زكريا درويش",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "195480650",
        "examId": "263",
        "name": "زكريا درويش",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1278404304",
        "examId": "264",
        "name": "زهراء حسين",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1278404304",
        "examId": "264",
        "name": "زهراء حسين",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1359014263",
        "examId": "265",
        "name": "زين البارودي",
        "fatherName": "اكرم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1359014263",
        "examId": "265",
        "name": "زين البارودي",
        "fatherName": "اكرم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2211354425",
        "examId": "266",
        "name": "زين الدين شابرلو",
        "fatherName": "إياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2211354425",
        "examId": "266",
        "name": "زين الدين شابرلو",
        "fatherName": "إياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1559319444",
        "examId": "267",
        "name": "زين العابدين ابراهيم",
        "fatherName": "نادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1559319444",
        "examId": "267",
        "name": "زين العابدين ابراهيم",
        "fatherName": "نادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2080412818",
        "examId": "268",
        "name": "زين توما",
        "fatherName": "سالم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2080412818",
        "examId": "268",
        "name": "زين توما",
        "fatherName": "سالم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "757468488",
        "examId": "269",
        "name": "زين حوراني",
        "fatherName": "موسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "757468488",
        "examId": "269",
        "name": "زين حوراني",
        "fatherName": "موسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1946325483",
        "examId": "270",
        "name": "زين ديب",
        "fatherName": "أيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1946325483",
        "examId": "270",
        "name": "زين ديب",
        "fatherName": "أيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1843695428",
        "examId": "271",
        "name": "زين علي",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1843695428",
        "examId": "271",
        "name": "زين علي",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "907599579",
        "examId": "272",
        "name": "زينب دردر",
        "fatherName": "هيثم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "907599579",
        "examId": "272",
        "name": "زينب دردر",
        "fatherName": "هيثم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1772365095",
        "examId": "273",
        "name": "زينب سليمان",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1772365095",
        "examId": "273",
        "name": "زينب سليمان",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3458328609",
        "examId": "274",
        "name": "زينب شاهين",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3458328609",
        "examId": "274",
        "name": "زينب شاهين",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2842705837",
        "examId": "275",
        "name": "زينب عقيد",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2842705837",
        "examId": "275",
        "name": "زينب عقيد",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2872511474",
        "examId": "276",
        "name": "زينب محمد",
        "fatherName": "أدهم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2872511474",
        "examId": "276",
        "name": "زينب محمد",
        "fatherName": "أدهم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "317142631",
        "examId": "277",
        "name": "زينة موراني",
        "fatherName": "فراس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "317142631",
        "examId": "277",
        "name": "زينة موراني",
        "fatherName": "فراس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "205075392",
        "examId": "278",
        "name": "زينه الاسماعيل",
        "fatherName": "حذيفه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "205075392",
        "examId": "278",
        "name": "زينه الاسماعيل",
        "fatherName": "حذيفه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1161697252",
        "examId": "279",
        "name": "زينه اليونس",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1161697252",
        "examId": "279",
        "name": "زينه اليونس",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3841873804",
        "examId": "280",
        "name": "زينه جنيد",
        "fatherName": "حسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3841873804",
        "examId": "280",
        "name": "زينه جنيد",
        "fatherName": "حسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3020990922",
        "examId": "281",
        "name": "زينه سليمان",
        "fatherName": "عبد الكريم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3020990922",
        "examId": "281",
        "name": "زينه سليمان",
        "fatherName": "عبد الكريم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2459160642",
        "examId": "282",
        "name": "زينه صالح",
        "fatherName": "سلامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2459160642",
        "examId": "282",
        "name": "زينه صالح",
        "fatherName": "سلامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "350566670",
        "examId": "283",
        "name": "زينه عيون السود",
        "fatherName": "محمد ربيع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "350566670",
        "examId": "283",
        "name": "زينه عيون السود",
        "fatherName": "محمد ربيع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4233519656",
        "examId": "284",
        "name": "زينه مرعي",
        "fatherName": "أسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4233519656",
        "examId": "284",
        "name": "زينه مرعي",
        "fatherName": "أسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "863401829",
        "examId": "285",
        "name": "سارا محمد",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "863401829",
        "examId": "285",
        "name": "سارا محمد",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "286",
        "name": "ساره الاحمد",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "286",
        "name": "ساره الاحمد",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "888725211",
        "examId": "287",
        "name": "ساره الخطيب",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "888725211",
        "examId": "287",
        "name": "ساره الخطيب",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "288",
        "name": "ساره الزين",
        "fatherName": "اديب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "288",
        "name": "ساره الزين",
        "fatherName": "اديب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3109543980",
        "examId": "289",
        "name": "ساره السعيد",
        "fatherName": "اسماعيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3109543980",
        "examId": "289",
        "name": "ساره السعيد",
        "fatherName": "اسماعيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2553847598",
        "examId": "290",
        "name": "ساره خضر",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2553847598",
        "examId": "290",
        "name": "ساره خضر",
        "fatherName": "حسين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2449565900",
        "examId": "291",
        "name": "ساره سلهب",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2449565900",
        "examId": "291",
        "name": "ساره سلهب",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4097780678",
        "examId": "292",
        "name": "ساره غالي",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4097780678",
        "examId": "292",
        "name": "ساره غالي",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2550859428",
        "examId": "293",
        "name": "ساري عبود",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2550859428",
        "examId": "293",
        "name": "ساري عبود",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3175761826",
        "examId": "294",
        "name": "سامر ابراهيم",
        "fatherName": "خليل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3175761826",
        "examId": "294",
        "name": "سامر ابراهيم",
        "fatherName": "خليل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "295",
        "name": "سامي عنيز",
        "fatherName": "مأمون",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 5,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "816215909",
        "examId": "296",
        "name": "سامي عيد",
        "fatherName": "ماثيوتوماس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1584642826",
        "examId": "297",
        "name": "ساندرا سلوم",
        "fatherName": "نائل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3586124488",
        "examId": "298",
        "name": "ساندي اليوسف",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "964222683",
        "examId": "299",
        "name": "ساندي حسن",
        "fatherName": "أميل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2760759351",
        "examId": "300",
        "name": "سايمن عوض",
        "fatherName": "سمير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2135541837",
        "examId": "301",
        "name": "سحر الاسعد",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3238833944",
        "examId": "302",
        "name": "سدره البريجاوي",
        "fatherName": "محمد خير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "582329131",
        "examId": "303",
        "name": "سدره الهاشمي",
        "fatherName": "عبد السميع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1797688477",
        "examId": "304",
        "name": "سدره سليمان",
        "fatherName": "ناظم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615147",
        "examId": "305",
        "name": "سعاد البوز",
        "fatherName": "حازم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4116655046",
        "examId": "306",
        "name": "سعدى طبيقي",
        "fatherName": "نضال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1125442601",
        "examId": "307",
        "name": "سعيد القدسي",
        "fatherName": "حسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2748018881",
        "examId": "308",
        "name": "سلاف الميلاد",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615179",
        "examId": "309",
        "name": "سلام ابراهيم",
        "fatherName": "عبد القادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2435331345",
        "examId": "310",
        "name": "سلام الحلبيه",
        "fatherName": "موفق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3941358131",
        "examId": "311",
        "name": "سلام جباره",
        "fatherName": "عبد الكريم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3853120189",
        "examId": "312",
        "name": "سلمان حسن",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4103757018",
        "examId": "313",
        "name": "سلمان سليمان",
        "fatherName": "منذر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "370777565",
        "examId": "314",
        "name": "سليمان الوقاف",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3797676054",
        "examId": "315",
        "name": "سليمان حسكي",
        "fatherName": "خليل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4198601532",
        "examId": "316",
        "name": "سهر القبه",
        "fatherName": "اياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "394606862",
        "examId": "317",
        "name": "سوزانا شلب",
        "fatherName": "شربل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615924",
        "examId": "318",
        "name": "سيدرا ابو راس",
        "fatherName": "بشير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2741569867",
        "examId": "319",
        "name": "سيدرا خليل",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615512",
        "examId": "320",
        "name": "سيدراالخليل",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "186201024",
        "examId": "321",
        "name": "سيدرة ياغي",
        "fatherName": "اسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3357350197",
        "examId": "322",
        "name": "سيلينا ديب",
        "fatherName": "رازق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1513785167",
        "examId": "323",
        "name": "شادن طراف",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "978457238",
        "examId": "324",
        "name": "شام زعيتر",
        "fatherName": "محمد منتصر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2212848510",
        "examId": "325",
        "name": "شام عبد الفتاح",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3196287837",
        "examId": "326",
        "name": "شام فخرو",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1457004505",
        "examId": "327",
        "name": "شام قاسم",
        "fatherName": "لطفي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2699181318",
        "examId": "328",
        "name": "شام يوسف",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3838885634",
        "examId": "329",
        "name": "شآم خولي",
        "fatherName": "عزام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1827809230",
        "examId": "330",
        "name": "شذا حسن",
        "fatherName": "يوسف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2949975705",
        "examId": "331",
        "name": "شهد الابراهيم",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1460150233",
        "examId": "332",
        "name": "شهد الاسمر",
        "fatherName": "سيف الدين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2953121433",
        "examId": "333",
        "name": "شهد الحموي",
        "fatherName": "عبد الرحيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3785093142",
        "examId": "334",
        "name": "شهد الزبيدي",
        "fatherName": "انور",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1016363532",
        "examId": "335",
        "name": "شهد السلامه",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2274268985",
        "examId": "336",
        "name": "شهد العباس",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3791384598",
        "examId": "337",
        "name": "شهد العص",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4247754211",
        "examId": "338",
        "name": "شهد العويل",
        "fatherName": "منذر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "309357090",
        "examId": "339",
        "name": "شهد أسد",
        "fatherName": "هاشم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3000622469",
        "examId": "340",
        "name": "شهد بركات",
        "fatherName": "فؤاد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "693059843",
        "examId": "341",
        "name": "شهد برهوم",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2523884403",
        "examId": "342",
        "name": "شهد بكرو",
        "fatherName": "عبد الكريم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2355194060",
        "examId": "343",
        "name": "شهد جديد",
        "fatherName": "ماهر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "956594700",
        "examId": "344",
        "name": "شهد جروج",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2518929474",
        "examId": "345",
        "name": "شهد حسن",
        "fatherName": "بشار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3966681513",
        "examId": "346",
        "name": "شهد زيدان",
        "fatherName": "عصام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3368439024",
        "examId": "347",
        "name": "شهد سليمان",
        "fatherName": "يحي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3172773656",
        "examId": "348",
        "name": "شهد سمان",
        "fatherName": "احمد عبدالرؤوف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1248598667",
        "examId": "349",
        "name": "شهد شاهين",
        "fatherName": "اسد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2250754804",
        "examId": "350",
        "name": "شهد شحاده",
        "fatherName": "خلدون",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "931428876",
        "examId": "351",
        "name": "شهد علي",
        "fatherName": "فراز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2383190496",
        "examId": "352",
        "name": "شهد غانم",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1275416134",
        "examId": "353",
        "name": "شهد محمد",
        "fatherName": "بشار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3373078837",
        "examId": "354",
        "name": "شهد معلا",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "222455675",
        "examId": "355",
        "name": "شهد معنا",
        "fatherName": "هيثم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4007733535",
        "examId": "356",
        "name": "شهد منصور",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1783611480",
        "examId": "357",
        "name": "شهد منصور",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2943684249",
        "examId": "358",
        "name": "شيماء الجوراني",
        "fatherName": "ثائر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1456689389",
        "examId": "359",
        "name": "شيماء الطيباني",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1752154200",
        "examId": "360",
        "name": "شيماء حسون",
        "fatherName": "طريف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4163683408",
        "examId": "361",
        "name": "شيماء سقا",
        "fatherName": "عبد السلام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1166337065",
        "examId": "362",
        "name": "صفاء نبهان",
        "fatherName": "حمدو",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1882938249",
        "examId": "363",
        "name": "ضرار العمر",
        "fatherName": "عمر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2809754472",
        "examId": "364",
        "name": "ضياء عباس",
        "fatherName": "عصام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2206714612",
        "examId": "365",
        "name": "ضياءالدين الرفاعي",
        "fatherName": "محروس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1774331854",
        "examId": "366",
        "name": "طارق الحصري",
        "fatherName": "محمد علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1357205062",
        "examId": "367",
        "name": "طارق نبوي القواص الجزائري",
        "fatherName": "عبد القادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2405683266",
        "examId": "368",
        "name": "طالب ملحم",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3591079417",
        "examId": "369",
        "name": "طه الحسنه",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1560813529",
        "examId": "370",
        "name": "ظلال القاعد",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3033573834",
        "examId": "371",
        "name": "ظهير الابيض",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2394279323",
        "examId": "372",
        "name": "عامر عيسى",
        "fatherName": "مهند",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1417604126",
        "examId": "373",
        "name": "عائده واكيم",
        "fatherName": "قيس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "440298697",
        "examId": "374",
        "name": "عبد الإله القريعي",
        "fatherName": "محمد سالم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2856940392",
        "examId": "375",
        "name": "عبد الباري بركات",
        "fatherName": "بليغ",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3483651991",
        "examId": "376",
        "name": "عبد الباسط القباني",
        "fatherName": "فؤاد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2637445727",
        "examId": "377",
        "name": "عبد الحفيظ العثمان",
        "fatherName": "لطفي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "855458730",
        "examId": "378",
        "name": "عبد الحميد ميهوب",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2124610568",
        "examId": "379",
        "name": "عبد الخالق الاخوان",
        "fatherName": "محمد بشار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3543735939",
        "examId": "380",
        "name": "عبد الرحمن السلومي",
        "fatherName": "هيثم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3222947746",
        "examId": "381",
        "name": "عبد الرحمن الطباع",
        "fatherName": "محمد مأمون",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2334668049",
        "examId": "382",
        "name": "عبد الرحمن العباس",
        "fatherName": "سامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "142160832",
        "examId": "383",
        "name": "عبد الرحمن تلاوي",
        "fatherName": "عزام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3570238290",
        "examId": "384",
        "name": "عبد الرحمن حجازي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "768714873",
        "examId": "385",
        "name": "عبد الرحمن طباطب تسون",
        "fatherName": "مصطفى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "386",
        "name": "عبد الرحمن عبد الرحمن",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 12,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3130069991",
        "examId": "387",
        "name": "عبد الرحمن كوجك",
        "fatherName": "زاكي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 5,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "195795766",
        "examId": "388",
        "name": "عبد الرزاق الطحان",
        "fatherName": "عبد السلام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1303727686",
        "examId": "389",
        "name": "عبد السميع الاتاسي",
        "fatherName": "محمد فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2683295120",
        "examId": "390",
        "name": "عبد العزيز السباعي",
        "fatherName": "محمد فريد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4042336543",
        "examId": "391",
        "name": "عبد العزيز علي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3521400727",
        "examId": "392",
        "name": "عبد اللطيف شيخ السوق",
        "fatherName": "فواز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2929607252",
        "examId": "393",
        "name": "عبد الله حوراني",
        "fatherName": "تميم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3381021936",
        "examId": "394",
        "name": "عبد المالك جنيد",
        "fatherName": "محمد واصل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1477530516",
        "examId": "395",
        "name": "عبد النافع الناقور",
        "fatherName": "حسام الدين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3014699466",
        "examId": "396",
        "name": "عفراء سعود",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "644064722",
        "examId": "397",
        "name": "عفيف نداف",
        "fatherName": "مطانس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "214670134",
        "examId": "398",
        "name": "علا الشلبي",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2004442672",
        "examId": "399",
        "name": "علا بركات",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3630322238",
        "examId": "400",
        "name": "علا عزوز",
        "fatherName": "رضا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "22150494",
        "examId": "401",
        "name": "علاء الدين الرفاعي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3870500472",
        "examId": "402",
        "name": "علاء عروق",
        "fatherName": "عبد الكافي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2023632156",
        "examId": "403",
        "name": "علي الحوراني",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "427715785",
        "examId": "404",
        "name": "علي العلي",
        "fatherName": "محي الدين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1378046189",
        "examId": "405",
        "name": "علي المحمود",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2331364763",
        "examId": "406",
        "name": "علي حيدري",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3954098601",
        "examId": "407",
        "name": "علي خليل",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1264327307",
        "examId": "408",
        "name": "علي سليمان",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "192650038",
        "examId": "409",
        "name": "علي عاقل",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "161035200",
        "examId": "410",
        "name": "علي عرابي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1654163958",
        "examId": "411",
        "name": "علي قصيعه",
        "fatherName": "بدر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2626514458",
        "examId": "412",
        "name": "علي كناني",
        "fatherName": "علاء",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1804295049",
        "examId": "413",
        "name": "عمر ا براهيم",
        "fatherName": "عبد الكريم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2607640090",
        "examId": "414",
        "name": "عمر الايوبي",
        "fatherName": "محمد حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "867884084",
        "examId": "415",
        "name": "عمر العبدالله الراشد",
        "fatherName": "حسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "176921398",
        "examId": "416",
        "name": "عمر حجك",
        "fatherName": "عبدالعزيز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "239678400",
        "examId": "417",
        "name": "عمر سرورملاح",
        "fatherName": "حازم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "910587749",
        "examId": "418",
        "name": "عمرو الحجه",
        "fatherName": "عبد الحميد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4258685480",
        "examId": "419",
        "name": "عمرو زعرور",
        "fatherName": "محمد مفيد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2321927579",
        "examId": "420",
        "name": "عيسى ديب",
        "fatherName": "حسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "885421925",
        "examId": "421",
        "name": "غدير الحمود",
        "fatherName": "ناجح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "861907744",
        "examId": "422",
        "name": "غريس لباد",
        "fatherName": "وسيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2380202326",
        "examId": "423",
        "name": "غزل الحمدان",
        "fatherName": "كفاح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "219152389",
        "examId": "424",
        "name": "غزل الخضور",
        "fatherName": "فرزات",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1611460293",
        "examId": "425",
        "name": "غزل موسى",
        "fatherName": "رامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "602855142",
        "examId": "426",
        "name": "غسان دلول",
        "fatherName": "شفيق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "542928752",
        "examId": "427",
        "name": "غفران القارية",
        "fatherName": "تميم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2205062969",
        "examId": "428",
        "name": "غفران حبيب",
        "fatherName": "يوشع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "298268263",
        "examId": "429",
        "name": "غفران شام",
        "fatherName": "كمال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4059716826",
        "examId": "430",
        "name": "غمار المعلم",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "765569145",
        "examId": "431",
        "name": "غيث عروب",
        "fatherName": "عبد الناصر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1732964716",
        "examId": "432",
        "name": "غيث قنان",
        "fatherName": "أحمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1239003925",
        "examId": "433",
        "name": "غيداق عباس",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3087366326",
        "examId": "434",
        "name": "فادي الشمالي",
        "fatherName": "شادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1851638527",
        "examId": "435",
        "name": "فادي ديوب",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2623211172",
        "examId": "436",
        "name": "فادي غاتا",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615132",
        "examId": "437",
        "name": "فاديا ضاهر الخطيب",
        "fatherName": "عدنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "206727035",
        "examId": "438",
        "name": "فادية البريجاوي",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "325085730",
        "examId": "439",
        "name": "فارس الشماع",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3908249208",
        "examId": "440",
        "name": "فارس الماروني",
        "fatherName": "اياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1461644318",
        "examId": "441",
        "name": "فاضل نوح",
        "fatherName": "مصطفى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1177425892",
        "examId": "442",
        "name": "فاطر الحمدان",
        "fatherName": "سميح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1022970104",
        "examId": "443",
        "name": "فاطمه الخطيب",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2206557054",
        "examId": "444",
        "name": "فاطمه الخلف",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2433994818",
        "examId": "445",
        "name": "فاطمه علوان",
        "fatherName": "عدنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3878128455",
        "examId": "446",
        "name": "فاطمه غرير",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2688092491",
        "examId": "447",
        "name": "فاهمه حربا",
        "fatherName": "مالك",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3036877120",
        "examId": "448",
        "name": "فراس صبح",
        "fatherName": "مازن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "596721244",
        "examId": "449",
        "name": "فرح الهامش",
        "fatherName": "محمد عزام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2623368730",
        "examId": "450",
        "name": "فريال قنوت",
        "fatherName": "نضال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "451",
        "name": "فاطمه بكور",
        "fatherName": "صهيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "271450796",
        "examId": "452",
        "name": "فهد سعده",
        "fatherName": "معتز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1145811054",
        "examId": "453",
        "name": "فواز الرفاعي",
        "fatherName": "صفوان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "983254609",
        "examId": "454",
        "name": "فؤاد ابراهيم",
        "fatherName": "موسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4222115713",
        "examId": "455",
        "name": "فيفيان الابراهيم",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4043988186",
        "examId": "456",
        "name": "فيوليت طعمه",
        "fatherName": "جورج",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "33081763",
        "examId": "457",
        "name": "كاتيا النداف",
        "fatherName": "اسماعيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3442599969",
        "examId": "458",
        "name": "كاتيا صالح",
        "fatherName": "لؤي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2665914837",
        "examId": "459",
        "name": "كارلا سعد",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2443432002",
        "examId": "460",
        "name": "كارلا يوسف",
        "fatherName": "عيسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "104096980",
        "examId": "461",
        "name": "كارول مقدسي",
        "fatherName": "فيليب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1475878873",
        "examId": "462",
        "name": "كارين خشوف",
        "fatherName": "نادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1821675332",
        "examId": "463",
        "name": "كامل العكاري",
        "fatherName": "ايمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3426556213",
        "examId": "464",
        "name": "كرستين النوح",
        "fatherName": "معن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3325577801",
        "examId": "465",
        "name": "كرم تجور",
        "fatherName": "بسيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "506831659",
        "examId": "466",
        "name": "كرم علي",
        "fatherName": "زهير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3654151535",
        "examId": "467",
        "name": "كريستيان الخوري",
        "fatherName": "بدر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "984906252",
        "examId": "468",
        "name": "كريستيان اوسكاني",
        "fatherName": "استيف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1224769370",
        "examId": "469",
        "name": "كريستينا مكائيل",
        "fatherName": "رامز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3437802598",
        "examId": "470",
        "name": "كريم العبد الله",
        "fatherName": "يونس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "337668642",
        "examId": "471",
        "name": "كلير نعمه",
        "fatherName": "عيسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1996657131",
        "examId": "472",
        "name": "كوزيت فرهود",
        "fatherName": "عادل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2288818656",
        "examId": "473",
        "name": "لارا كاسوحة",
        "fatherName": "وسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "949988128",
        "examId": "474",
        "name": "لازا ابراهيم",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2028271969",
        "examId": "475",
        "name": "لانا جديد",
        "fatherName": "زهير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1862412238",
        "examId": "476",
        "name": "لانا عيسى",
        "fatherName": "محسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2662926667",
        "examId": "477",
        "name": "لبنى حسن اغا",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2356688145",
        "examId": "478",
        "name": "لجين الحلبي",
        "fatherName": "سهيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1769219367",
        "examId": "479",
        "name": "لجين عباس",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2875657202",
        "examId": "480",
        "name": "لجين عمر",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3647860079",
        "examId": "481",
        "name": "لجين مخلوف",
        "fatherName": "نزار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3066840315",
        "examId": "482",
        "name": "لجين مراد الاشقر",
        "fatherName": "اسد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3545072466",
        "examId": "483",
        "name": "لجين يوسف",
        "fatherName": "كمال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3063852145",
        "examId": "484",
        "name": "لما النقري",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "254070513",
        "examId": "485",
        "name": "لمى ديوب",
        "fatherName": "مجتبى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "378720664",
        "examId": "486",
        "name": "لمى سلامه",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "669072988",
        "examId": "487",
        "name": "لوتس صقر",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3494425702",
        "examId": "488",
        "name": "لوجين السعيد",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2195468227",
        "examId": "489",
        "name": "لوقا ابو هنود",
        "fatherName": "سلمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "896668310",
        "examId": "490",
        "name": "لونه عرنوس",
        "fatherName": "مروان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2745030711",
        "examId": "491",
        "name": "ليال الحسن",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3464777623",
        "examId": "492",
        "name": "ليال طليمات",
        "fatherName": "محمد مختار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1622706678",
        "examId": "493",
        "name": "ليال والي",
        "fatherName": "عبد الفتاح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4091331664",
        "examId": "494",
        "name": "ليث الفارس",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1125285043",
        "examId": "495",
        "name": "ليلاس البياع",
        "fatherName": "نادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1448903848",
        "examId": "496",
        "name": "ليلاس حسون",
        "fatherName": "سامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1663758700",
        "examId": "497",
        "name": "ليلاس حسين",
        "fatherName": "اسامه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3702989098",
        "examId": "498",
        "name": "ليلى الاقرع",
        "fatherName": "صلاح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4088185936",
        "examId": "499",
        "name": "ليليان عمران",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1452207134",
        "examId": "500",
        "name": "لين احمد",
        "fatherName": "عبد الحليم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1987377505",
        "examId": "501",
        "name": "لين الأحمد",
        "fatherName": "شادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1696710065",
        "examId": "502",
        "name": "لين الدره",
        "fatherName": "محمد مهدي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2069323991",
        "examId": "503",
        "name": "لين سبله",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2249418277",
        "examId": "504",
        "name": "لين سركيس",
        "fatherName": "الياس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1403369571",
        "examId": "505",
        "name": "لين منصور",
        "fatherName": "سليم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2380359884",
        "examId": "506",
        "name": "ماجد التلاوي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1466441689",
        "examId": "507",
        "name": "مادلين عبود",
        "fatherName": "مازن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1707956450",
        "examId": "508",
        "name": "مارسيل حلاوي",
        "fatherName": "حبيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4245787452",
        "examId": "509",
        "name": "ماري احمد",
        "fatherName": "مهيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "238184315",
        "examId": "510",
        "name": "مارية الموصلي",
        "fatherName": "فواز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1955447551",
        "examId": "511",
        "name": "ماسه صيصان",
        "fatherName": "عمر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3284683337",
        "examId": "512",
        "name": "مايا الاحمد",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1463138403",
        "examId": "513",
        "name": "مايا الجهني",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1908261631",
        "examId": "514",
        "name": "مايا دربولي",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2277729829",
        "examId": "515",
        "name": "مايا زيتون",
        "fatherName": "سيف الدين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "190840837",
        "examId": "516",
        "name": "مايا زيني",
        "fatherName": "عبد المنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3006913925",
        "examId": "517",
        "name": "مأمون العبد الله",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3430017057",
        "examId": "518",
        "name": "مجد اسد",
        "fatherName": "نافذ",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3087523884",
        "examId": "519",
        "name": "مجد السلامه",
        "fatherName": "زهير",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2698866202",
        "examId": "520",
        "name": "مجد حمادي",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4211026886",
        "examId": "521",
        "name": "مجد حوراني",
        "fatherName": "العلاء",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4130889601",
        "examId": "522",
        "name": "مجد عبد الله",
        "fatherName": "منهل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1346431351",
        "examId": "523",
        "name": "مجد عيسى",
        "fatherName": "عبد الحميد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2640749013",
        "examId": "524",
        "name": "محمد اسكندر",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3065346230",
        "examId": "525",
        "name": "محمد الاكسح",
        "fatherName": "عبدالسلام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1234364112",
        "examId": "526",
        "name": "محمد الجمعه الحديد",
        "fatherName": "يحيى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2462148812",
        "examId": "527",
        "name": "محمد الحريري",
        "fatherName": "الحسن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "318794274",
        "examId": "528",
        "name": "محمد الحسن",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3819853708",
        "examId": "529",
        "name": "محمد الحلبيه",
        "fatherName": "جمال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3766061216",
        "examId": "530",
        "name": "محمد الحموي",
        "fatherName": "عدنان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2116667469",
        "examId": "531",
        "name": "محمد الخضر",
        "fatherName": "راسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1116005417",
        "examId": "532",
        "name": "محمد الخطيب",
        "fatherName": "سليمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3292626436",
        "examId": "533",
        "name": "محمد القاعد",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1027294801",
        "examId": "534",
        "name": "محمد القديمي",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3579833032",
        "examId": "535",
        "name": "محمد المطلق",
        "fatherName": "فيصل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "657984161",
        "examId": "536",
        "name": "محمد الناصر",
        "fatherName": "بدر الدين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "642413079",
        "examId": "537",
        "name": "محمد النقري",
        "fatherName": "عبد الله",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2597887790",
        "examId": "538",
        "name": "محمد بدر تركاوي",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3216813848",
        "examId": "539",
        "name": "محمد جواد الفارس",
        "fatherName": "منهل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2204905411",
        "examId": "540",
        "name": "محمد حسن",
        "fatherName": "طالب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "389967049",
        "examId": "541",
        "name": "محمد حسين",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2931101337",
        "examId": "542",
        "name": "محمد خضور",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2586798963",
        "examId": "543",
        "name": "محمد دللول",
        "fatherName": "محمد ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 5,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "483002362",
        "examId": "544",
        "name": "محمد راتب اللوز",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3385661749",
        "examId": "545",
        "name": "محمد زين",
        "fatherName": "ماهر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3002274112",
        "examId": "546",
        "name": "محمد زين زيود",
        "fatherName": "رفعت",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "419615128",
        "examId": "547",
        "name": "محمد سام الخليل",
        "fatherName": "فراس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "825337977",
        "examId": "548",
        "name": "محمد سمير صافي",
        "fatherName": "محمد انس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1327399425",
        "examId": "549",
        "name": "محمد عباس",
        "fatherName": "سهيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2029766054",
        "examId": "550",
        "name": "محمد غياث الحسامي",
        "fatherName": "عبد المهيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4096129035",
        "examId": "551",
        "name": "محمد ليث درويش",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "584138332",
        "examId": "552",
        "name": "محمد مبيض",
        "fatherName": "جهاد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "265316898",
        "examId": "553",
        "name": "محمد محمد",
        "fatherName": "جواد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3321095546",
        "examId": "554",
        "name": "محمد منصور",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1879950079",
        "examId": "555",
        "name": "محمد موسى",
        "fatherName": "عبد المؤمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3385819307",
        "examId": "556",
        "name": "محمد نبيل دبدوب",
        "fatherName": "عبد الاله",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2885409502",
        "examId": "557",
        "name": "محمد نور الابراهيم",
        "fatherName": "مروان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "857110373",
        "examId": "558",
        "name": "محمد هاني الفيصل",
        "fatherName": "عبد الباسط",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1126779128",
        "examId": "559",
        "name": "محمد وضاح العبد الرحيم",
        "fatherName": "برهان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3575193219",
        "examId": "560",
        "name": "محمد ياسر الدهان",
        "fatherName": "محمد باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "844527461",
        "examId": "561",
        "name": "محمد ياسر سويد",
        "fatherName": "حمدي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1687430439",
        "examId": "562",
        "name": "محمدجواد الحسين",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1152417626",
        "examId": "563",
        "name": "محمدكريم دخان",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "115343365",
        "examId": "564",
        "name": "محمدنعيم الحوراني",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1600529024",
        "examId": "565",
        "name": "محمود الحسن",
        "fatherName": "سهيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615173",
        "examId": "566",
        "name": "محمود الشحرور",
        "fatherName": "فايز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3340127472",
        "examId": "567",
        "name": "محمود عوض",
        "fatherName": "عمر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2391291153",
        "examId": "568",
        "name": "مدين ابراهيم",
        "fatherName": "رابح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4174772235",
        "examId": "569",
        "name": "مرح السليمان",
        "fatherName": "يوسف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1344937266",
        "examId": "570",
        "name": "مرح العاتكي",
        "fatherName": "حافظ",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "154743744",
        "examId": "571",
        "name": "مرح سلامه",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2700675403",
        "examId": "572",
        "name": "مرح عديره",
        "fatherName": "رامح",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1176089365",
        "examId": "573",
        "name": "مروان سكر",
        "fatherName": "رامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2779633719",
        "examId": "574",
        "name": "مروه الحسين",
        "fatherName": "موسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4130574485",
        "examId": "575",
        "name": "مروه الرفاعي",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1180729178",
        "examId": "576",
        "name": "مريم اسبر",
        "fatherName": "معن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3485146076",
        "examId": "577",
        "name": "مريم الزعيم",
        "fatherName": "رائد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3731300650",
        "examId": "578",
        "name": "مريم الطباع",
        "fatherName": "طلال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "579",
        "name": "مريم الفلاح",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3093500224",
        "examId": "580",
        "name": "مريم حبيب",
        "fatherName": "وائل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3892363010",
        "examId": "581",
        "name": "مريم شاهين",
        "fatherName": "مالك",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1600371466",
        "examId": "582",
        "name": "مريم شريبه",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4286839474",
        "examId": "583",
        "name": "مريم هندي",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 16,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3707786469",
        "examId": "584",
        "name": "مصطفى محمود",
        "fatherName": "فراس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3665082804",
        "examId": "585",
        "name": "مصطفى معتوق",
        "fatherName": "امين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1339982337",
        "examId": "586",
        "name": "مصعب الضاهر",
        "fatherName": "ناهد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "549220208",
        "examId": "587",
        "name": "معلى العثمان",
        "fatherName": "اياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "694553928",
        "examId": "588",
        "name": "معن عدله",
        "fatherName": "أيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1742401900",
        "examId": "589",
        "name": "ملاذ الخاوندي",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4015519076",
        "examId": "590",
        "name": "ملاك الحسامي",
        "fatherName": "سامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1046484285",
        "examId": "591",
        "name": "منى مصري",
        "fatherName": "خضر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1875152708",
        "examId": "592",
        "name": "مها سليمان",
        "fatherName": "غيدق",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "146800645",
        "examId": "593",
        "name": "مهدي علي",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 15,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3251574414",
        "examId": "594",
        "name": "مهند العثمان",
        "fatherName": "ايمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2138845123",
        "examId": "595",
        "name": "موراليس حنا",
        "fatherName": "يوسف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2168808318",
        "examId": "596",
        "name": "موسى ملحم",
        "fatherName": "ابراهيم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4286997032",
        "examId": "597",
        "name": "مؤمن الحريري",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "622044626",
        "examId": "598",
        "name": "مؤيد السلقيني",
        "fatherName": "مازن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1433332766",
        "examId": "599",
        "name": "مؤيد بركات",
        "fatherName": "محمد مرهف",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3783599057",
        "examId": "600",
        "name": "مي الكوسا",
        "fatherName": "عمران",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1818214488",
        "examId": "601",
        "name": "مي عطره",
        "fatherName": "رمضان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1803979933",
        "examId": "602",
        "name": "مي عمران",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4137023499",
        "examId": "603",
        "name": "ميار الحموي",
        "fatherName": "امين",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "362834466",
        "examId": "604",
        "name": "مياس التلي",
        "fatherName": "عصام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1851323411",
        "examId": "605",
        "name": "مياس خنصر",
        "fatherName": "معتز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3712583840",
        "examId": "606",
        "name": "ميان ايوب",
        "fatherName": "منعم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1944673840",
        "examId": "607",
        "name": "ميرا الحسن",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1223275285",
        "examId": "608",
        "name": "ميرا حمود",
        "fatherName": "باسم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "83570969",
        "examId": "609",
        "name": "ميرنا وهبي",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2541264686",
        "examId": "610",
        "name": "ميري ساطو",
        "fatherName": "فراس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3243788873",
        "examId": "611",
        "name": "ميريل وسوف",
        "fatherName": "سعادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "678667730",
        "examId": "612",
        "name": "ميس الاشقر",
        "fatherName": "طلال",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2269629172",
        "examId": "613",
        "name": "ميسا طراف",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3521558285",
        "examId": "614",
        "name": "ميشلين البيطار",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3469574994",
        "examId": "615",
        "name": "ميشيل البيطار",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1303885244",
        "examId": "616",
        "name": "ميشيل الطرشه",
        "fatherName": "فادي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3502526359",
        "examId": "617",
        "name": "ميشيل ساره",
        "fatherName": "حسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3982252595",
        "examId": "618",
        "name": "نايا سليمان",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2337656219",
        "examId": "619",
        "name": "نايا ضاحي",
        "fatherName": "جورج",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2647198027",
        "examId": "620",
        "name": "نايا غطاس",
        "fatherName": "ضياء",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3027597494",
        "examId": "621",
        "name": "نايا فزع",
        "fatherName": "مطانس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "539940582",
        "examId": "622",
        "name": "نايف معماري",
        "fatherName": "عيسى",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "353554840",
        "examId": "623",
        "name": "ندى شبيب",
        "fatherName": "شبيب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "472071093",
        "examId": "624",
        "name": "نزار ملوك",
        "fatherName": "محمد رشيد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "110545994",
        "examId": "625",
        "name": "نصر الله قيسانيه",
        "fatherName": "رضوان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1344779708",
        "examId": "626",
        "name": "نصرالله العلي",
        "fatherName": "عطا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "629672609",
        "examId": "627",
        "name": "نغم ادريس",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "269799153",
        "examId": "628",
        "name": "نغم المنصور",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "966031884",
        "examId": "629",
        "name": "نغم جنوب",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1871849422",
        "examId": "630",
        "name": "نهى الرفاعي",
        "fatherName": "طالب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4225261441",
        "examId": "631",
        "name": "نور الامام",
        "fatherName": "خلدون",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2615323",
        "examId": "632",
        "name": "نور الدياب",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "138699988",
        "examId": "633",
        "name": "نور السيد احمد",
        "fatherName": "ماهر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1218635472",
        "examId": "634",
        "name": "نور الشقوف",
        "fatherName": "نبيل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1038698744",
        "examId": "635",
        "name": "نور المش",
        "fatherName": "سليم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1093827763",
        "examId": "636",
        "name": "نور الهدى الكايد",
        "fatherName": "بري",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3145956189",
        "examId": "637",
        "name": "نور الهدى أيوب",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3909900851",
        "examId": "638",
        "name": "نور سليمان",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3305366906",
        "examId": "639",
        "name": "نور طياوي",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "271608354",
        "examId": "640",
        "name": "نور عمار",
        "fatherName": "عمار",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1805789134",
        "examId": "641",
        "name": "نور فرح",
        "fatherName": "عبدو",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4146303125",
        "examId": "642",
        "name": "نور كراكر",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3518097441",
        "examId": "643",
        "name": "هادي الخليل",
        "fatherName": "منهل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3759927318",
        "examId": "644",
        "name": "هادي تيشوري",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1510481881",
        "examId": "645",
        "name": "هادي رمان",
        "fatherName": "حمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1292796417",
        "examId": "646",
        "name": "هادي شباط",
        "fatherName": "زياد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "39373219",
        "examId": "647",
        "name": "هادي ناصيف",
        "fatherName": "رياض",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 20,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1059224755",
        "examId": "648",
        "name": "هاني القائد",
        "fatherName": "يمني",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3384325222",
        "examId": "649",
        "name": "هاني صادق",
        "fatherName": "سامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 14,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2566588068",
        "examId": "650",
        "name": "هبة الزكيمي",
        "fatherName": "صفوان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3881431741",
        "examId": "651",
        "name": "هبة الله بدر",
        "fatherName": "عبد الله",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1459992675",
        "examId": "652",
        "name": "هبه الزعبي",
        "fatherName": "عبد العزيز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "522245183",
        "examId": "653",
        "name": "هبه اليوسف",
        "fatherName": "بسام",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "827147178",
        "examId": "654",
        "name": "هبه سلامه",
        "fatherName": "محمود",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "696048013",
        "examId": "655",
        "name": "هبه عبود",
        "fatherName": "أحمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2891858516",
        "examId": "656",
        "name": "هدى بلاوني",
        "fatherName": "فيصل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2650343755",
        "examId": "657",
        "name": "هديل حسن",
        "fatherName": "نادر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "140509189",
        "examId": "658",
        "name": "هديل قيمر",
        "fatherName": "حافظ",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "0",
        "examId": "659",
        "name": "هلا الاحمد",
        "fatherName": "احمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4218969985",
        "examId": "660",
        "name": "هنا شيخ زين",
        "fatherName": "محمد علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3013047823",
        "examId": "661",
        "name": "هود قصراوي",
        "fatherName": "غياث",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3767870417",
        "examId": "662",
        "name": "هيا الاسماعيل",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2940538521",
        "examId": "663",
        "name": "هيا الخليل",
        "fatherName": "حسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "273102439",
        "examId": "664",
        "name": "هيا الفحل",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "83728527",
        "examId": "665",
        "name": "هيا الونوس",
        "fatherName": "هيثم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2306198939",
        "examId": "666",
        "name": "هيا بلال",
        "fatherName": "ياسر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "986242779",
        "examId": "667",
        "name": "هيا ملحم",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4207881158",
        "examId": "668",
        "name": "هيا هرموش",
        "fatherName": "غسان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2915372697",
        "examId": "669",
        "name": "هيثم جوهر",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "82234442",
        "examId": "670",
        "name": "ودود الشعبان",
        "fatherName": "لؤي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2853637106",
        "examId": "671",
        "name": "ورد الحسن",
        "fatherName": "رامي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2001296944",
        "examId": "672",
        "name": "ورده برصون",
        "fatherName": "حاتم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3327387002",
        "examId": "673",
        "name": "وسام الياس",
        "fatherName": "وديع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3365293296",
        "examId": "674",
        "name": "وفاء الخوري",
        "fatherName": "عزيز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3166482200",
        "examId": "675",
        "name": "يازد الكوسا",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3041832049",
        "examId": "676",
        "name": "ياسمين الاتاسي",
        "fatherName": "ربيع",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 28,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1920686985",
        "examId": "677",
        "name": "ياسمين العابد",
        "fatherName": "وليد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3508817815",
        "examId": "678",
        "name": "يانا الدخيل",
        "fatherName": "تامر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 29,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2614599",
        "examId": "679",
        "name": "يانا سلمان",
        "fatherName": "ماجد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2747861323",
        "examId": "680",
        "name": "يانا معلا",
        "fatherName": "معلا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3797833612",
        "examId": "681",
        "name": "يحيى الاسعد",
        "fatherName": "ايمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1534153620",
        "examId": "682",
        "name": "يحيى الجهماني",
        "fatherName": "زكريا",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": "غير موجود",
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1650860672",
        "examId": "683",
        "name": "يحيى جوهره",
        "fatherName": "باسل",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2765241606",
        "examId": "684",
        "name": "يزن الشيخ علي",
        "fatherName": "طه",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "454375694",
        "examId": "685",
        "name": "يزن الهيبه",
        "fatherName": "علي",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1980770933",
        "examId": "686",
        "name": "يزن بركات",
        "fatherName": "عماد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 23,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "927968032",
        "examId": "687",
        "name": "يزن صقر",
        "fatherName": "راتب",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1256384208",
        "examId": "688",
        "name": "يعرب حمود",
        "fatherName": "أيمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 17,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4094319834",
        "examId": "689",
        "name": "يعرب كيسيني",
        "fatherName": "سلمان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 19,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1985725862",
        "examId": "690",
        "name": "يمامه حسن",
        "fatherName": "رمضان",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 25,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "691408200",
        "examId": "691",
        "name": "يمان الرميح",
        "fatherName": "حابس",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1095164290",
        "examId": "692",
        "name": "يوسف الحمق",
        "fatherName": "ايمن",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 24,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "4143472513",
        "examId": "693",
        "name": "يوسف الحموي",
        "fatherName": "هيثم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 27,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "2839717667",
        "examId": "694",
        "name": "يوسف المصري",
        "fatherName": "عبد العزيز",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 22,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "449578323",
        "examId": "695",
        "name": "يوسف خالد",
        "fatherName": "محمد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 18,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "3788238870",
        "examId": "696",
        "name": "يوسف زينب",
        "fatherName": "هاشم",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 21,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1695215980",
        "examId": "697",
        "name": "يوسف ونوس",
        "fatherName": "هاني",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "1813732233",
        "examId": "698",
        "name": "يوشع اسماعيل",
        "fatherName": "ثائر",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": {
                "practical": 26,
                "theoretical": 0
            },
            "علم النسج العام": {
                "practical": 0,
                "theoretical": 0
            },
            "التشريح الوصفي 1": {
                "practical": 0,
                "theoretical": 0
            },
            "علم النفس السلوكي": {
                "theoretical": 0
            },
            "اللغة العربية": {
                "theoretical": 0
            },
            "اللغة الانكليزية 3": {
                "theoretical": 0
            }
        }
    },
    {
        "uniId": "123456789",
        "examId": "672",
        "name": "سالم أحمد",
        "fatherName": "خالد",
        "scores": {
            "الكيمياء الحيوية و البيولوجيا الجزيئية": { "practical": 0, "theoretical": 0 },
            "علم النسج العام": { "practical": 18, "theoretical": 55 },
            "التشريح الوصفي 1": { "practical": 22, "theoretical": 60 },
            "علم النفس السلوكي": { "theoretical": 0 },
            "اللغة العربية": { "theoretical": 70 },
            "اللغة الانكليزية 3": { "theoretical": 50 }
        }
    }
];