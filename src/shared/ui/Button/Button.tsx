
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';
import { FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button disabled={disabled} className={classNames(cls.Button, mods, [className!, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
