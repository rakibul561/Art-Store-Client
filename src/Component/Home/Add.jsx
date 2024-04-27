import Navbar from "./Navbar";

const Add = () => {
      const handleAddCarft = event =>{
         event.preventDefault();

         const form = event.target;

         const name = form.name.value;
         const Availeable = form.Availeable.value;
         const supllaier = form.supllaier.value;
         const quality = form.quality.value;
         const category = form.category.value;
         const details = form.details.value;
         const photo = form.photo.value;
         const newArt = {name,Availeable,supllaier,quality,category,details,photo}
         console.log(newArt);


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
                            <span className="label-text text-xl font-bold">Art Name:</span>
                        </label>
                        <input type="text" name="name" placeholder="Art name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Art Availeable:</span>
                        </label>
                        <input type="text" name="Availeable" placeholder="Art Availeable" className="input input-bordered w-full" required />
                    </div>
                </div>


                {/* 2no form row */}
                <div className="md:flex mb-2">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Supllaier:</span>
                        </label>
                        <input type="text" name="supllaier" placeholder="Art name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Art quality:</span>
                        </label>
                        <input type="text" name="quality" placeholder="art quality" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* 3 form row */}


                <div className="md:flex mb-2">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Category:</span>
                        </label>
                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Art Deteils:</span>
                        </label>
                        <input type="text" name="details" placeholder="Art details" className="input input-bordered w-full" required />
                    </div>
                </div>

                <div className="mb-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Photo:</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input type="submit" value="add craft" className="btn btn-block btn-success" />
            </form>

        </div>
        </div>
    );
};

export default Add;