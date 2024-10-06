import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const Carousel = () => {
    return (
        <section className="grid grid-cols-5 w-full      px-20">
            <div className="col-span-5 md:col-span-3    ">
                <LazyLoad />
            </div>
            <div className="flex w-full px-5 flex-col justify-center items-center col-span-5 md:col-span-2">
                <Image
                    src="/images/free-static-1.webp"
                    alt="image"
                    width={400}
                    height={400}
                    className="w-full h-[275px]"
                ></Image>
                <Image
                    src="/images/years-static-2.webp"
                    alt="image"
                    width={400}
                    height={400}
                    className="w-full h-[275px]"
                ></Image>
            </div>
        </section>
    );
};

export default Carousel;

function LazyLoad() {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="slider-container  ">
            <Slider {...settings}>
                <div>
                    <img src={"/images/booksupdate.webp"} />
                </div>
                <div>
                    <img src={"/images/booksupdate.webp"} />{" "}
                </div>
                <div>
                    <img src={"/images/booksupdate.webp"} />{" "}
                </div>
                <div>
                    <img src={"/images/booksupdate.webp"} />{" "}
                </div>
            </Slider>
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/arrow_right.png"
            className={className}
            style={{
                ...style,
                display: "block",

                background: "rgba(176, 149, 52, 0.3)", // Semi-transparent background
                borderRadius: "50%",
                width: "50px", // Change this to the size you want
                height: "50px", // Change this to the size you want
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/arrow_left.png"
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: "100",
                background: "rgba(176, 149, 52, 0.3)", // Semi-transparent background
                borderRadius: "50%",
                width: "50px", // Change this to the size you want
                height: "50px", // Change this to the size you want
            }}
            onClick={onClick}
        />
    );
}
