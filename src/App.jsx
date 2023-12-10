import "./App.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return <ThemeProvider>
    <div>
      <h1>Theme Switcher App</h1>
      <ThemeSwitcher />
    </div>
  </ThemeProvider>;
}

export default App;
