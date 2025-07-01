import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Main.module.scss";

interface MainProps {
  className?: string;
}
export const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.Main, {}, [className])}>
      <div className={classNames(cls.MainSubtitle, {}, [className])}>
        <img src="" alt="404" />
        <h3>name</h3> <span>description</span> <button>click</button>
      </div>
      <div className={classNames(cls.MainSubtitle, {}, [className])}>
        <img src="" alt="404" />
        <h3>name</h3> <span>description</span> <button>click</button>
      </div>
      <div className={classNames(cls.MainSubtitle, {}, [className])}>
        <img src="" alt="404" />
        <h3>name</h3> <span>description</span> <button>click</button>
      </div>
      <div className={classNames(cls.MainSubtitle, {}, [className])}>
        <img src="" alt="404" />
        <h3>name</h3> <span>description</span> <button>click</button>
      </div>
    </div>
  );
};
