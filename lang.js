document.addEventListener('DOMContentLoaded', () => {
    let currentLang;

    // const langButtons = document.querySelectorAll('.lang-button');

    async function loadTranslations(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load fallback locale 'en': ${response.statusText}`);
            }
            console.log(`Locale '${lang}' load!`);
            return await response.json();
        } catch (error) {
            console.error("Failed to load translations:", error);
            return {};
        }
    }

    function applyTranslations(langData) {

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerHTML = langData[key];
        });

        document.querySelectorAll('[data-i18n-placeholder-key]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerHTML = langData[key];
        });

        document.documentElement.lang = currentLang;
    }

    async function changeLanguage(lang) {
        const phrases = await loadTranslations(lang);

        if (Object.keys(phrases).length === 0) {
            console.error(`No phrases loaded for ${lang}.`);
            return;
        }

        currentLang = lang;

        applyTranslations(phrases);

        // langButtons.forEach(button => {
        //     button.classList.toggle('active', button.dataset.lang === lang);
        // });

        try {
            localStorage.setItem('preferredLang', lang);
        } catch (e) {
            console.warn("Could not save language preference to localStorage.");
        }
    }

    function initialize() {
        let preferredLang = null;
        // try {
        //     preferredLang = localStorage.getItem('preferredLang');
        // } catch(e) {
        //     console.log("Could not read language preference from localStorage (probably don't exist).");
        // }
        const browserLang = navigator.language?.split('-')[0];
        const defaultLang = 'en';
        // const initialLang = preferredLang || browserLang || defaultLang;
        const initialLang =  browserLang || defaultLang;

        // langButtons.forEach(button => {
        //     button.addEventListener('click', () => changeLanguage(button.dataset.lang));
        // });

        const sites = ['fr', 'en']

        // Load initial language
        changeLanguage(sites.includes(initialLang) ? initialLang : 'en');

    }

    initialize();

});