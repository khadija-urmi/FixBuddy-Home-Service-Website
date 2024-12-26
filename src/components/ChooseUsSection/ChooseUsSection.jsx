import img1 from "../../assets/image-2.jfif";

const ChooseUsSection = () => {
    return (
        <section className="bg-teal-600 py-14">
            <h3 className="text-4xl font-bold mb-6 text-center text-teal-900">Why Choose Us?</h3>
            <div className="flex flex-col md:flex-row items-center px-8 py-16 md:px-16 lg:px-28 gap-16  text-white">
                <div className="flex-1">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-bold">Reliable</h4>
                            <p>We guarantee top-notch services with reliable professionals.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Affordable</h4>
                            <p>We offer competitive pricing without compromising quality.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Customer-Centric</h4>
                            <p>Our services are designed to prioritize customer satisfaction and meet your specific needs.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Experienced Team</h4>
                            <p>Our team consists of highly skilled professionals with years of experience in their respective fields.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img
                        src={img1}
                        alt="Service"
                        className="w-full h-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default ChooseUsSection;
