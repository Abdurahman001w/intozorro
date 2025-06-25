import { classNames } from "../entities/helpers/classNames/classNames";
import { AppRouter } from "./providers/router";

export const App = () => {
  return (
    <div className={classNames("app")}>
      <AppRouter />
    </div>
  );
};
