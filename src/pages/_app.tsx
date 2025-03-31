import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="light"
            themes={["light", "dark"]}
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
};
