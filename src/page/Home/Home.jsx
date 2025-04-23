import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import ChooseUsSection from "../../components/ChooseUsSection/ChooseUsSection";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import Statistics from "../../components/Statistics/Statistics";
import ServiceList from "../../components/ServiceList/ServiceList";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <div className="w-11/12 mx-auto">
          <h3 className="divider divider-accent w-full md:w-2/4 lg:w-2/6 mx-auto text-3xl font-bold text-center mt-16 mb-8">
            Available Services
          </h3>
          <ServiceList />
        </div>
        <Statistics></Statistics>
        <ChooseUsSection></ChooseUsSection>
        <CustomerReview></CustomerReview>
      </div>
    </>
  );
};

export default Home;
