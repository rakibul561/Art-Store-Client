import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProducet] = useState({});
    console.log(product);

    useEffect(() => {
        fetch(`http://localhost:5000/newArt/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducet(data)
            })
    }, [id])
    const { name, short_description, subcategory_Name, price, rating, photo, processing_time, customization, } = product;

    return (
        <div>
            <div className="hero mt-8 lg:p-8 rounded-lg bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="lg:w-[500px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Name: {name}!</h1>
                        <h2 className="text-3xl font-bold mt-4">subcategory Name: {subcategory_Name}</h2>
                        <p className="py-6">Description: {short_description}</p>
                        <div className=" flex justify-between text-2xl text-yellow-400  ">
                            <p>Price: {price}$</p>
                            <p>Rating: {rating}</p>
                            <p>Time: {processing_time}</p>
                        </div>
                        <div className="mt-8 btn text-white btn-success">
                            <Link to='/'>Back to Home</Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Details;