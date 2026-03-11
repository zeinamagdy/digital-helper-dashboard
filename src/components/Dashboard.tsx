import { Phone, MessageCircle, CloudSun, LifeBuoy } from "lucide-react";
import { useSettings } from "../context/SettingsContext";

const Dashboard = () => {
  const { isSeniorMode } = useSettings();

  // Define grid items to keep the JSX clean
  const menuItems = [
    {
      id: 1,
      label: "ANRUFEN",
      icon: <Phone size={isSeniorMode ? 80 : 48} />,
      color: "bg-green-600",
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
    },
    {
      id: 4,
      label: "HILFE",
      icon: <LifeBuoy size={isSeniorMode ? 80 : 48} />,
      color: "bg-red-600",
    },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`
              flex flex-col items-center justify-center  p-10 rounded-[40px] transition-all
              ${
                isSeniorMode
                  ? "border-[6px] border-senior-yellow  bg-black text-senior-yellow hover:bg-zinc-900"
                  : `${item.color} text-white shadow-xl hover:scale-105 active:scale-95`
              }
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
