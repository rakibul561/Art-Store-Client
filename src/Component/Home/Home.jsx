import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import CartCard from "./CartCard";

const Home = () => {
    const allArt = useLoaderData();
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Header></Header>
            </div>
            {/*  */}
            <div className="mt-8">
                <h2 className="text-center text-3xl font-bold ">Craft Items Section</h2>
                <div className="grid lg:grid-cols-3 gap-4">
                    {
                        allArt.map(art => <CartCard
                            key={art._id}
                            art={art}
                        > </CartCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;