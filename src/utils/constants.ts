/**
 * Common color palette used across the portfolio.
 * Use these constants for consistent theming.
 */

// Gold / cream accents
export const GOLD = {
  primary: "#d4af37",
  bright: "#e8c547",
  muted: "#c8a84b",
  border: "#d3bc8e",
  tan: "#a38d56",
  brown: "#8b7355",
  darkBrown: "#5d4a3a",
  cream: "#fdf2c1",
  creamLight: "#ece5d8",
} as const;

// Dark backgrounds
export const DARK = {
  slate: "#2f343a",
  slateBlue: "#3b4255",
  deep: "#1a1e24",
  darker: "#1a1a1a",
  navy: "#0a0e1a",
  charcoal: "#1a1e24",
} as const;

// Gray / muted tones
export const GRAY = {
  medium: "#5d667a",
  muted: "#4b5465",
  light: "#848e9c",
  border: "#95979d",
  input: "#7a8494",
} as const;

// Purple (rarity / accents)
export const PURPLE = {
  light: "#8b7ec8",
  dark: "#5d4a9e",
} as const;

// Neutral
export const NEUTRAL = {
  white: "#ffffff",
  black: "#000000",
  offWhite: "#f0f0f0",
  modalBg: "#fdfcf9",
  modalBorder: "#e8e4dc",
} as const;

// RGBA helpers for opacity variants
export const RGBA = {
  slate: (alpha: number) => `rgba(47, 52, 58, ${alpha})`,
  slateMuted: (alpha: number) => `rgba(59, 65, 75, ${alpha})`,
  cream: (alpha: number) => `rgba(253, 242, 193, ${alpha})`,
  creamLight: (alpha: number) => `rgba(236, 229, 216, ${alpha})`,
  gold: (alpha: number) => `rgba(200, 168, 75, ${alpha})`,
  goldPrimary: (alpha: number) => `rgba(212, 175, 55, ${alpha})`,
  goldTan: (alpha: number) => `rgba(180, 155, 100, ${alpha})`,
  border: (alpha: number) => `rgba(211, 188, 142, ${alpha})`,
  white: (alpha: number) => `rgba(255, 255, 255, ${alpha})`,
  black: (alpha: number) => `rgba(0, 0, 0, ${alpha})`,
  slateBlue: (alpha: number) => `rgba(75, 84, 101, ${alpha})`,
  dark: (alpha: number) => `rgba(26, 30, 36, ${alpha})`,
  gray: (alpha: number) => `rgba(93, 102, 122, ${alpha})`,
} as const;
