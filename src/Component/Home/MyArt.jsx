import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Update from "./Update";

const MyArt = () => {

    const { user } = useAuth();
    const [item, setItem] = useState();
    console.log(item);

    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)

            })
    }, [user])



    return (
        <div>
             <h2 className="text-center text-purple-600 my-20 text-4xl font-extralight">List My All item</h2>
            <div className="grid md:grid-cols-2 gap-8 ">
                {
                    item?.map(i => <Update
                        key={i.id}
                        i={i}
                    ></Update>)
                }
            </div>

        </div>
    );
};

export default MyArt;