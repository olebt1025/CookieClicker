import "./App.css";
import CookieClicker from "./components/cookieClicker";
import CatFacts from "./components/catApi";
import UserRegister from "./components/register";

function App() {
  return (
    <div>
      <h1>Cookie App</h1>

      <CookieClicker />
      <CatFacts />
      <UserRegister />
    </div>
  );
}

export default App;


