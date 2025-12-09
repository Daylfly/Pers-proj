// src/widgets/contact/index.ts

export { default } from "./ui/section.ui";
export const ContactSection = (await import("./ui/section.ui")).default;
// или просто:
export { default as ContactSection } from "./ui/section.ui"; // это тоже работает в новых версиях