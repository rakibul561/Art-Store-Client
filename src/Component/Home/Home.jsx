import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import CartCard from "./CartCard";
import Panting from "./Panting";
import Contact from "./Contact";

const Home = () => {
    const allArt = useLoaderData();
    const item = allArt.slice(0,6);
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            {/*  */}
            <div className="mt-8 mb-8">
                <h2 className="text-center text-3xl font-bold ">Craft Items Section</h2>
                <div className="grid lg:grid-cols-3 gap-4">
                    {
                        item.map(art => <CartCard
                            key={art._id}
                            art={art}
                        > </CartCard>)
                    }
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-center">Top paintings in the world</h2>
                <p className="text-center">
                    Leonardo da Vinci's paintings are celebrated for their mastery of technique <br /> and depth of emotion. His famous works include the enigmatic "Mona Lisa," the poignant "The Last Supper," <br /> and the anatomically precise "Vitruvian Man," each contributing to his legacy as one of history's greatest artists.
                </p>
            </div>
            <Panting></Panting>
            <Contact></Contact>
        </div>
    );
};

export default Home;