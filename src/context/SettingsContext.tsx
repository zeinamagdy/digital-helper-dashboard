/* eslint-disable react-refresh/only-export-components */
import React, { useState, useContext } from "react";
import { SettingsContext } from "./settings-types";

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSeniorMode, setSeniorMode] = useState(false);

  return (
    <SettingsContext.Provider value={{ isSeniorMode, setSeniorMode }}>
      <div
        className={`w-full flex flex-col  transition-colors duration-500 ${
          isSeniorMode
            ? "bg-black text-yellow-400"
            : "bg-slate-50 text-slate-900"
        }`}
      >
        {children}
      </div>
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("Missing Provider");
  return context;
};
