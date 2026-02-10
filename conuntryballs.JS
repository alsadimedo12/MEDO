// script.js
function showEra(eraId) {
    // 1. إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.era-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. إظهار القسم المطلوب فقط
    const targetSection = document.getElementById(eraId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}