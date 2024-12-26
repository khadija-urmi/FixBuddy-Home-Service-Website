import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Img1 from "../../assets/banner-1.webp";
import Img2 from "../../assets/banner-2.webp";

const Banner = () => {
    return (
        <div className="h-screen">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={Img1}
                            alt="Slide 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                                Reliable Plumbing Services
                            </h1>
                            <p className="text-lg lg:text-xl mb-6">
                                Quick and efficient solutions for all your plumbing needs.
                            </p>
                            <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={Img2}
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                                Expert Electrical Repairs
                            </h1>
                            <p className="text-lg lg:text-xl mb-6">
                                Keeping your home powered safely and efficiently.
                            </p>
                            <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
