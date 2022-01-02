import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./components/Card";
import RecipeApp from "./components/RecipeApp";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Freecipes</title>
                <meta
                    name="description"
                    content="Get free recipes by using only the ingredients you have."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Freecipes!</a>
                </h1>
                <RecipeApp />
            </main>
        </div>
    );
};

export default Home;
