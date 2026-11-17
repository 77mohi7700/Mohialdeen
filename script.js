/* =========================================
   1. تحديد عناصر الموقع
========================================= */

const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const toast = document.getElementById("toast");


/* =========================================
   2. الوضع الليلي والنهاري
========================================= */

// قراءة الوضع المحفوظ سابقاً
const savedTheme = localStorage.getItem("cv-theme");

// تطبيق الوضع المحفوظ
if (savedTheme === "light") {

    body.classList.add("light");

}

// تحديث شكل زر الوضع
function updateThemeButton() {

    if (body.classList.contains("light")) {

        themeToggle.textContent = "☾";

        themeToggle.setAttribute("aria-label", "تفعيل الوضع الليلي");

    } else {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute("aria-label", "تفعيل الوضع النهاري");

    }

}

// تشغيل تحديث الزر عند فتح الموقع
updateThemeButton();


// عند الضغط على زر تغيير الوضع
themeToggle.addEventListener("click", function () {

    // تبديل الوضع
    body.classList.toggle("light");

    // تحديد الوضع الحالي
    const currentTheme = body.classList.contains("light")
        ? "light"
        : "dark";

    // حفظ الوضع في المتصفح
    localStorage.setItem("cv-theme", currentTheme);

    // تحديث شكل الزر
    updateThemeButton();

});


/* =========================================
   3. قائمة التنقل في الجوال
========================================= */

// فتح وإغلاق القائمة
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    // معرفة حالة القائمة
    const isOpen = navLinks.classList.contains("open");

    // تحديث حالة الزر
    menuToggle.setAttribute("aria-expanded", isOpen);

    // تغيير رمز القائمة
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// إغلاق القائمة عند اختيار قسم
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   4. نسخ البريد الإلكتروني
========================================= */

// البحث عن زر نسخ البريد
const copyEmailButton = document.getElementById("copyEmail");


// تنفيذ النسخ إذا كان الزر موجوداً
if (copyEmailButton) {

    copyEmailButton.addEventListener("click", async function () {

        const email = "77mohi7700@gmail.com";

        try {

            // نسخ البريد
            await navigator.clipboard.writeText(email);

            showToast("تم نسخ البريد الإلكتروني بنجاح");

        } catch (error) {

            // إظهار البريد في حالة تعذر النسخ
            showToast(email);

        }

    });

}


/* =========================================
   5. رسائل التنبيه
========================================= */

function showToast(message) {

    if (!toast) return;

    // وضع الرسالة
    toast.textContent = message;

    // إظهار التنبيه
    toast.classList.add("show");

    // إخفاء التنبيه بعد فترة
    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================
   6. تحديث السنة تلقائياً
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   7. إغلاق القائمة عند تغيير حجم الشاشة
========================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 760) {

        navLinks.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


/* =========================================
   8. رسالة تشغيل الموقع
========================================= */
console.log("CV Website Started Successfully!");

console.log("Welcome to Mohi Al-Olaimi Portfolio!");