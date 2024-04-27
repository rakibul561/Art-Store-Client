
const Header = () => {
    return (
        <div>

<div className="carousel w-full rounded-md mt-4">
                <div id="slide1" className="carousel-item relative w-full lg:h-[550px] lg:w-[1300px]">
                    <img src="https://i.ibb.co/1Lb7Tg8/top-view-colorful-aquarelle-notebook-23-2148419540.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative  lg:h-[550px] lg:w-[1300px] w-full">
                    <img src="https://i.ibb.co/YhTYDbS/top-view-hand-painting-23-2148023713.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full lg:h-[550px] lg:w-[1300px]">
                    <img src="https://i.ibb.co/XkX1Fb8/top-view-frame-paint-brushes-23-2148660978.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full lg:h-[550px] lg:w-[1300px]">
                    <img src="https://i.ibb.co/JRj8Rh0/palette-paints-near-paper-sheet-23-2147772343.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;