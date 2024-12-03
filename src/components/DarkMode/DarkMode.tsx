import { useTheme } from '../../context/ThemeContext';
import './DarkMode.scss';

export const DarkMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dark-light ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <label>
        <input
          type='checkbox'
          onChange={toggleTheme}
          checked={theme === 'dark'}
          style={{ display: 'none' }}
        />
        <svg
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='1.5'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
        </svg>
      </label>
    </div>
  );
};

export default DarkMode;
