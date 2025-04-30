// src/components/ThemeWrapper.tsx
"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme"; // Adjust to src/lib/theme after setup
import { ReactNode } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}