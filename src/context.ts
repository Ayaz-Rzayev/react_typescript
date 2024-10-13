import { createContext } from "react";
import { ThemeType, User } from "./types";

type CustomThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const CustomThemeContext = createContext<CustomThemeContextType | null>(
  null
);
