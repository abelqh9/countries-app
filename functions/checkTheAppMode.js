function checkTheAppMode() {
    
    const $html = document.documentElement,
        isDark = localStorage.getItem('isDark');

    if (isDark) {
        if (JSON.parse(isDark)) $html.classList.add('dark-mode');
    }else{
        localStorage.setItem('isDark', JSON.stringify(false));
    }
}

export { checkTheAppMode };