import { useTheme } from '../ThemeContext.jsx';

export default function ToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className='theme-toggle' onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
