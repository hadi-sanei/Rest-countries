// changing the theme
export function theme_switch() {
    const change_theme = document.getElementById('change-theme') as HTMLElement;
    if (document.cookie.includes('theme=dark')) {
        document.body.classList.add('dark-theme');
    }
    change_theme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            document.cookie = `theme=dark`;
            return;
        }
        document.cookie = 'theme=dark;max-age=0';
    });
}
