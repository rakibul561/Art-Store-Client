import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";

const MyArt = () => {

    const { user } = useAuth();
    const [item , setItem] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
        .then(res=> res.json())
        .then(data => {
            setItem(data);
        })
    }, [user])

    return (
        <div>
            
            <div className="container p-4 mt-8 mx-auto sm:p-4 border  dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Button</th>
                                <th className="p-3 text-right">Update</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p></p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Tesla Inc.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$275</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Coca Cola co.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$8,950,500</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Nvidia Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$98,218</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default MyArt;