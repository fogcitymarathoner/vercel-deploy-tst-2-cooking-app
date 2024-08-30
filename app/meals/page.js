import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.modules.css"
export default function Meals() {
    // cta = call to action
    return (
        <>
            <header className={classes.header}>
                <h1 style={{color: 'white', textAlign: 'center'}}>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                    <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                    <p className={classes.cta}>
                        <Link href={"/meals/share"}>
                            Share your favorite recipe
                        </Link>
                    </p>
                </h1>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]}/>
            </main>
        </>
    );
}
