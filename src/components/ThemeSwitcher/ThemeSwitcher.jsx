import { useThemeContext } from '../../hooks/useThemeContext';
import s from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();

  const handleChange = () => {
    if (theme === 'day') {
      setTheme('night');
    } else {
      setTheme('day');
    }
  };

  return (
    <div className={s.toggleBtn}>
      <input
        type="checkbox"
        checked={theme === 'night'}
        onChange={handleChange}
      />
      <span>&nbsp;</span>
    </div>
  );
}
