// changing the theme
export function theme_switch() {
    const change_theme = document.getElementById('change-theme') as HTMLElement;
    if (document.cookie.includes('theme=dark')) {
        document.body.classList.add('dark-theme');
        change_theme.innerHTML = '<i class="fa-regular fa-sun text-base mx-1"></i> Light Mode';
    }
    change_theme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            document.cookie = `theme=dark;max-age=${3 * 24 * 60 * 60};path=/`;
            change_theme.innerHTML = '<i class="fa-regular fa-sun text-base mx-1"></i> Light Mode';
            return;
        }
        change_theme.innerHTML = '<i class="fa-regular fa-moon text-base mx-1"></i> Dark Mode';
        document.cookie = 'theme=dark;max-age=0;path=/';
    });
}
