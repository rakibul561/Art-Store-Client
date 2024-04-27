import { Link } from "react-router-dom";


const CartCard = ({ art }) => {

    const { name, short_description, subcategory_Name, price, rating, photo, processing_time, customization } = art;
    return (
        <div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-200 dark:text-gray-900">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-2xl font-medium tracking-widest uppercase dark:text-violet-600">{name}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{subcategory_Name}</h2>
                </div>
                <p className="dark:text-gray-800">{short_description}</p>
                <div className="flex justify-between">
                    <p className="text-2xl font-semibold">Price: {price}</p>
                    <p className="text-2xl text-yellow-700 font-semibold ">Rating: {rating}</p>
                </div>
                 <div className="btn text-white text-xl mt-4 btn-success">
                 <Link to='/details'>View Details</Link>
                 </div>
            </div>

        </div>
    );
};

export default CartCard;