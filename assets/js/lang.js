const userLang = navigator.language || navigator.userLanguage; // e.g. "en-US", "fr-FR"
const langCode = userLang.split('-')[0]; // get "en" or "fr"

const sites = ['fr', 'en']

const lang = sites.includes(langCode) ? langCode : 'en'
window.location.href = "/" + lang + "/";