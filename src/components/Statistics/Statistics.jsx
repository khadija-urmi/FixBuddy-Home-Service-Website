import img1 from "../../assets/project-management.png";
import img2 from "../../assets/customer-satisfaction.png";
import img3 from "../../assets/resources.png";

const Statistics = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto px-4 lg:px-8 py-6 mt-16">
      <div className="divider divider-accent text-3xl font-bold text-center">
        <span className="text-blue-500 ">8 Years</span>Journey We Have
      </div>
      <div className="w-full mx-auto stats shadow-lg mt-8">
        <div className="stat place-items-center">
          <div className="stat-title">COMPLETED OVER</div>
          <div className="stat-value text-5xl text-gray-800 flex justify-center items-center gap-4">
            3100
            <span>
              <img src={img1} className="w-12 h-12" />
            </span>
          </div>
          <div className="stat-desc text-gray-500 text-lg">PROJECTS</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">SERVED OVER</div>
          <div className="stat-value text-5xl text-gray-800 flex justify-center items-center gap-4">
            1900
            <span>
              <img src={img2} className="w-12 h-12" />
            </span>
          </div>
          <div className="stat-desc text-gray-500 text-lg">CLIENTS</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">MANAGED</div>
          <div className="stat-value text-5xl flex justify-center items-center gap-4">
            400+
            <span>
              <img src={img3} className="w-12 h-12" />
            </span>
          </div>
          <div className="stat-desc text-gray-500 text-lg">RESOURCES</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
