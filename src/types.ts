export type User = { name: string; password: string; preference: ThemeType }

export type ThemeType = "light" | "dark";

export enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}
