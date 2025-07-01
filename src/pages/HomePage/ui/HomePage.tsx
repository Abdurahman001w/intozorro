import { Main } from "widgets/Main";
import { Navbar } from "widgets/Navbar";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Navbar />
      <Main />
    </div>
  );
}
