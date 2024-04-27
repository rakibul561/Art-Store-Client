import useAuth from "../../Hook/useAuth";
import Navbar from "./Navbar";
import Swal from 'sweetalert2'
const Add = () => {
    const { user } = useAuth();
    const handleAddCarft = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const photo = form.photo.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const email = user.email;
        const userName = user.displayName;

        const art = { name, short_description, subcategory_Name, price, rating, photo, processing_time,stockStatus, customization, email, userName }
        console.log(art);


        // server side data 

        fetch('http://localhost:5000/art', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(art)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }



    return (

        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] mt-8 rounded-xl p-24">

                <h2 className="text-3xl text-success font-bold text-center ">Add Craft</h2>
                <p className="text-center mb-4 italic">Explore endless creativity at our art & craft store! Unleash your imagination with quality supplies for painting, <br /> drawing, sculpting, and more. From vibrant paints to intricate tools, we ve got everything for seasoned artists <br /> and beginners alike. Discover inspiration in every aisle and bring your artistic visions to life with us today!</p>
                <form onSubmit={handleAddCarft}>
                    {/* all form row */}
                    <div className="md:flex mb-2">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">item Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Art name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-bold">subcategory Name:</span>
                            </label>
                            <input type="text" name="subcategory_Name" placeholder="Art Availeable" className="input input-bordered w-full" required />
                        </div>
                    </div>


                    {/* 2no form row */}
                    <div className="md:flex mb-2">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">description</span>
                            </label>
                            <input type="text" name="short_description" placeholder="Art name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-bold">price</span>
                            </label>
                            <input type="text" name="price" placeholder="art quality" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* 3 form row */}


                    <div className="md:flex mb-2">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="category" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Processing Time</span>
                            </label>
                            <input type="text" name="processing_time" placeholder="Art details" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:flex mb-2">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Image</span>
                            </label>
                            <input type="text" name="photo" placeholder="category" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-bold"> customization</span>
                            </label>
                            <select name="customization" id="">
                                <option value="yes">yes</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mb-8 md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-bold"> stockStatus</span>
                        </label>
                        <select name="stockStatus" id="">
                            <option value="In stock"> In stock</option>
                            <option value="Made to Order">Made to Order
                            </option>
                        </select>
                    </div>


                    <input type="submit" value="add craft" className="btn btn-block btn-success" />
                </form>

            </div>
        </div>
    );
};

export default Add;