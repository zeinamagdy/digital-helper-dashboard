import { useSettings } from "../context/SettingsContext";

export const ThemeToggle = () => {
  const { isSeniorMode, setSeniorMode } = useSettings();
  const toggleTheme = () => {
    console.log("Toggling theme...", { isSeniorMode });
    setSeniorMode(!isSeniorMode);
  };
  // Define the classes as constants so Tailwind's "scanner" picks them up easily
  const containerClasses = isSeniorMode
    ? "bg-black text-yellow-400 p-4 w-full transition-colors duration-300"
    : "bg-slate-50 text-slate-900 p-4 w-full transition-colors duration-300";
  return (
    <button onClick={toggleTheme} className={containerClasses}>
      {isSeniorMode ? "SENIOR" : "STANDARD"}
    </button>
  );
};
