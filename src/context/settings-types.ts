import { createContext } from 'react';
interface SettingsType {
    isSeniorMode: boolean;
    setSeniorMode: (value: boolean) => void;
}
export const SettingsContext = createContext<SettingsType | null>(null);
