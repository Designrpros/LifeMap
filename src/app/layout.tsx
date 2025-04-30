// app/layout.tsx
import { ReactNode } from "react";
import StyledComponentsRegistry from "../components/styled-components-registry"; // Adjust to src/components/ after setup
import ThemeWrapper from "../components/ThemeWrapper"; // Adjust to src/components/ThemeWrapper after setup

export const metadata = {
  title: "Next.js Styled Template",
  description: "A Next.js starter with Styled Components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0}}>
        <StyledComponentsRegistry>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}