import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Link to="/">Главная</Link>
      <Link to="/about">Вход</Link>
    </div>
  );
};
