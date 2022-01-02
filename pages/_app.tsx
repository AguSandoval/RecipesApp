import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import RecipeApp from "./components/RecipeApp";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
            {/* <RecipeApp /> */}
        </ChakraProvider>
    );
}

export default MyApp;
