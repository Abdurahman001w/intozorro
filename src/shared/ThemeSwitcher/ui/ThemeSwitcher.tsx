import cls from "./ThemeSwitcher.module.scss";
//import { Theme, useTheme } from "app/providers/ThemeProvider";\
import LightIcon from "shared/assets/icons/LightIcons.svg";
import DarkIcon from "shared/assets/icons/DarkIons.svg";
import {
  Button,
  ThemeButton,
} from "../../../widgets/ButtonEnter/ui/ButtonEnter";
import { classNames } from "../../../entities/helpers/classNames/classNames";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  // const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      //   onClick={toggleTheme}
    >
      {
        //theme === Theme.DARK ? (
        // <DarkIcon width={20} />
        //) : (
        // <LightIcon width={20} />
        // )
      }
    </Button>
  );
};
