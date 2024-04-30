import { useLoaderData } from "react-router-dom";
import CartCard from "../Home/CartCard";

const AllArt = () => {
    const card = useLoaderData();

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center mt-4 mb-8  ">All Art & craft Items</h2>
            <div className="grid lg:grid-cols-3 gap-4">
                    {
                        card.map(art => <CartCard
                            key={art._id}
                            art={art}
                        > </CartCard>)
                    }
                </div>
        </div>
    );
};

export default AllArt;