import '../styles/globals.css';
import { createTheme, NextUIProvider, theme as NextUITheme } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import DarkTheme from './themes/DarkTheme';

const lightTheme = createTheme({
  type: 'light',
  theme: { ...NextUITheme }

})

const darkTheme = createTheme({
  type: 'dark',
  theme: { ...DarkTheme }
})

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>


  );
}

export default MyApp;
