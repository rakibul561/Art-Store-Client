/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Update = ({ item, setItem }) => {


    // const { _id, name, short_description, subcategory_Name, price, rating, photo, processing_time, customization, stockStatus } = i;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://art-store-server-six.vercel.app/art/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const filterdData = item?.filter((i) => i?._id !== _id)
                            setItem(filterdData)

                        }
                    })
            }
        });
    }




    return (

        <div className="grid md:grid-cols-2 gap-8 ">
            {
                item?.map((i) => {
                    const { photo, name, price, rating, customization, _id } = i
                    return <div key={_id}>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img className="h-[300px]" src={photo} alt="Movie" /></figure>
                            <div className="flex justify-around p-4 w-full">
                                <div className="text-xl space-y-4">
                                    <p> <span className="font-bold">Name</span>: {name}</p>
                                    <p> <span className="font-bold">Price</span>: {price}</p>
                                    <p><span className="font-bold">Rating</span>: {rating}</p>
                                    <p><span className="font-bold">customization</span>: {customization}</p>
                                </div>
                                <p></p>
                                <div className="card-actions justify-end">
                                    <div className="join space-y-8 join-vertical">

                                        <Link to={`/update/${_id}`}>
                                            <button className="btn  btn-warning ">Update<FaEdit></FaEdit></button>
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(_id)}
                                            className="btn  btn-error ">Delete<MdDelete></MdDelete></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
        </div>



    );
};

export default Update;