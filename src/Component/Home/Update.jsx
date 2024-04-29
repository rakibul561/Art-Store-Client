import { FaEye,FaEdit} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Update = ({ i }) => {
    const { name, short_description, subcategory_Name, price, rating, photo, processing_time, customization, stockStatus } = i;
    return (
        <div>

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
                            <button className="btn  btn-warning ">Update<FaEdit></FaEdit></button>
                            <button className="btn  btn-error ">Delete<MdDelete></MdDelete></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;