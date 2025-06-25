
import { useTheme } from '../../../../app/providers/ThemeProvider';
import { classNames } from '../../../lib/classNames/classNames';
import { Button, ThemeButton } from '../../Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className!])} onClick={toggleTheme}>
            TOGGLE
        </Button>
    );
};