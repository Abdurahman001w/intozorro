import { ButtonHTMLAttributes, FC, FunctionComponent } from "react";

import cls from "./Button.module.scss";
import { classNames } from "../../../entities/helpers/classNames/classNames";
export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, theme, className, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
