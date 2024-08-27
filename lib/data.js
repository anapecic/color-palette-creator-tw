export const initialColors = [
  { id: "c1", role: "primary main", hex: "#ff4a11", contrastText: "#FFFFFF" }, // Vibrant orange
  { id: "c2", role: "primary dark", hex: "#c73e0b", contrastText: "#FFFFFF" }, // Darker shade of orange
  { id: "c3", role: "primary light", hex: "#ff7a3e", contrastText: "#000000" }, // Lighter shade of orange
  { id: "c4", role: "secondary main", hex: "#5C6BC0", contrastText: "#FFFFFF" }, // Indigo Blue
  { id: "c5", role: "secondary dark", hex: "#3949AB", contrastText: "#FFFFFF" }, // Darker indigo blue
  {
    id: "c6",
    role: "secondary light",
    hex: "#9FA8DA",
    contrastText: "#000000",
  }, // Lighter indigo blue
  {
    id: "c7",
    role: "background main",
    hex: "#252629",
    contrastText: "#FFFFFF",
  }, // Dark charcoal
  {
    id: "c8",
    role: "background dark",
    hex: "#1b1d1f",
    contrastText: "#FFFFFF",
  }, // Darker charcoal
  {
    id: "c9",
    role: "background light",
    hex: "#43464b",
    contrastText: "#FFFFFF",
  }, // Lighter charcoal
];

export const initialThemes = [
  {
    id: "default theme",
    name: "default theme",
    colors: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"],
  },
  { id: "my theme 1", name: "my theme 1", colors: [] },
  { id: "my theme 2", name: "my theme 2", colors: [] },
];
