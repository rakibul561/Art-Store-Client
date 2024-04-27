

const Panting = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div className=" rounded-md shadow-md dark:bg-gray-300 dark:text-gray-800">
                <img src="https://i.ibb.co/HDF3gyf/hand-drawn-one-line-art-illustration-23-2149270010.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Mona Lisa</h2>
                        <p className="dark:text-gray-800">The Mona Lisa is a masterpiece painted by Leonardo da Vinci. This renowned painting evokes an unforgettable impression and is considered an invaluable work of art in history..</p>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-300 dark:text-gray-800">
                <img src="https://i.ibb.co/DGMsnLV/portrait-person-autism-day-awareness-collage-style-23-2151355202.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Guernica pic</h2>
                        <p className="dark:text-gray-800">TGuernica" is Pablo Picassos iconic anti-war painting, depicting the horrors of the Spanish Civil War. It's a powerful symbol of the devastating impact of conflict and the suffering of civilians.</p>
                    </div>
                </div>
            </div>
            <div className=" rounded-md shadow-md dark:bg-gray-300 dark:text-gray-800">
                <img src="https://i.ibb.co/4W5ktyP/old-man-childhood-memories-collage-23-2149879832.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Leonardo da Vinci</h2>
                        <p className="dark:text-gray-800">Leonardo da Vinci, a polymath of the Renaissance, was a painter, scientist, engineer, and inventor. His works include the iconic "Mona Lisa" and "The Last Supper," influencing art and science profoundly...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panting;