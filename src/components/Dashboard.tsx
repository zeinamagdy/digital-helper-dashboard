import { Phone, MessageCircle, CloudSun, LifeBuoy } from "lucide-react";
import { useSettings } from "../context/SettingsContext";
import { playClick } from "../helpers/playClick";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";

const Dashboard = () => {
  const { isSeniorMode } = useSettings();
  const [showWeather, setShowWeather] = useState(false);

  // Define grid items to keep the JSX clean
  const menuItems = [
    {
      id: 1,
      label: "ANRUFEN",
      icon: <Phone size={isSeniorMode ? 80 : 48} />,
      color: "bg-green-600",
      action: () => (window.location.href = "tel:030123456"),
    },
    {
      id: 2,
      label: "NACHRICHT",
      icon: <MessageCircle size={isSeniorMode ? 80 : 48} />,
      color: "bg-blue-600",
    },
    {
      id: 3,
      label: "WETTER",
      icon: <CloudSun size={isSeniorMode ? 80 : 48} />,
      color: "bg-orange-500",
      action: () => setShowWeather(true),
    },
    {
      id: 4,
      label: "HILFE",
      icon: <LifeBuoy size={isSeniorMode ? 80 : 48} />,
      color: "bg-red-600",
      action: () => {
        if (confirm("NOTRUF 112 ANRUFEN?")) {
          window.location.href = "tel:112";
        }
      },
    },
  ];
  const handleItemClick = (itemAction: () => void) => {
    playClick(); // 🔊 Play sound immediately on click
    itemAction(); // Then execute the specific logic for the item (e.g., call, alert, etc.)
  };
  if (showWeather) {
    return (
      <div className="p-6 min-h-screen bg-black flex flex-col items-center">
        <button
          onClick={() => {
            setShowWeather(false);
            playClick();
          }}
          className="mb-8 text-yellow-400 text-2xl font-bold p-4 border-4 border-yellow-400 rounded-xl w-full"
        >
          ← ZURÜCK (BACK)
        </button>

        <WeatherWidget />
      </div>
    );
  }
  return (
    <div className={`${isSeniorMode ? "max-w-full" : "max-w-4xl"} p-6 mx-auto`}>
      <header className="mb-10 text-center">
        <h1
          className={`${isSeniorMode ? "text-6xl" : "text-4xl"} font-black mb-2`}
        >
          Hallo Zeinab
        </h1>
        <p className={`${isSeniorMode ? "text-3xl" : "text-xl"} opacity-80`}>
          Was möchtest du heute tun?
        </p>
      </header>

      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 " +
          `${isSeniorMode ? "gap-12" : "gap-8"}`
        }
      >
        {menuItems.map((item) => (
          <button
            onClick={() => handleItemClick(item.action)}
            key={item.id}
            className={`
              flex flex-col items-center justify-center  p-10  
              rounded-[2.5rem] transition-all duration-300 outline-none
              ${
                isSeniorMode
                  ? "border-[6px] border-senior-yellow  bg-black text-senior-yellow hover:bg-zinc-900 shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] scale-[1.02] mb-4"
                  : `${item.color} text-white shadow-xl hover:scale-105 active:scale-95`
              }
              focus:border-yellow-400 
              focus:shadow-[0_0_30px_rgba(250,204,21,0.6)] 
              focus:scale-[1.03]
              active:scale-95
            `}
          >
            {item.icon}
            <span
              className={`font-black ${isSeniorMode ? "text-4xl" : "text-2xl"}`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
