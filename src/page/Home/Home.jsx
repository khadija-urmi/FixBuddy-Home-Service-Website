import Banner from "../../components/Banner/Banner";
import ChooseUsSection from "../../components/ChooseUsSection/ChooseUsSection";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import AllServices from "../AllServices/AllServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h3 className="text-3xl font-bold text-center mt-14">Available Services</h3>
                <AllServices />
            </div>
            <CustomerReview></CustomerReview>
            <ChooseUsSection></ChooseUsSection>
        </div>
    );
};

export default Home;