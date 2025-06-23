import { Route, Routes } from "react-router-dom";
import { EnterPage } from "../../../../pages/EnterPage";
import { Link } from "react-router-dom";

export const AppRouter = () => {
  return (
    <div>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/enter">Вход</Link>
      </div>
      <Routes>
        <Route path="/about" element={<EnterPage />} />
      </Routes>
    </div>
  );
};
