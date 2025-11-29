import "./globals.css";
import NavBar from "./components/NavBar";
import ThemeContextProvider from "./theme/ThemeContext";

export const metadata = {
  title: "My App",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <ThemeContextProvider>
          <NavBar />
          <main style={{ padding: 24 }}>{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
