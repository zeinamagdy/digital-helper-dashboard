import { Routes, Link, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ThemeToggle } from "./components/ThemeToggle";
import { AboutMe } from "./components/AboutMe";
import { useSettings } from "./context/SettingsContext";
const App = () => {
  const { isSeniorMode } = useSettings();

  return (
    <div
      className={`h-screen w-full flex flex-col overflow-hidden transition-colors duration-500 ${
        isSeniorMode ? "bg-black text-yellow-400" : "bg-slate-50 text-slate-900"
      }`}
    >
      <header className="p-4 flex justify-between items-center border-b border-white/10 shrink-0">
        <nav className="flex gap-4 font-bold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <ThemeToggle />
      </header>

      {/* flex-1 tells the main area to "grow" and fill the rest of the screen */}
      <main className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
