import img1 from "../../assets/project-management.png";
import img2 from "../../assets/customer-satisfaction.png";
import img3 from "../../assets/resources.png";

const Statistics = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto px-4 lg:px-8 py-6 my-16">
      <div>
        <h3 className="divider divider-accent w-full md:w-2/4 mx-auto text-lg md:text-2xl lg:text-3xl font-bold text-center  mb-4 lg:mb-10">
          <span className="text-blue-500">8 Years</span> Journey We Have
        </h3>
      </div>
      <div className="w-full mx-auto stats stats-vertical lg:stats-horizontal  shadow-lg ">
        {/* Stat 1 */}
        <div className="stat place-items-center">
          <div className="stat-title  ">COMPLETED OVER</div>
          <div className="stat-value text-xl md:text-2xl lg:text-4xl  text-gray-800 flex justify-center items-center gap-4">
            3100
            <span>
              <img src={img1} className="w-6 lg:w-12 h-6 lg:h-12" />
            </span>
          </div>
          <div className="stat-desc text-gray-500 text-base md:text-lg lg:text-xl">
            PROJECTS
          </div>
        </div>

        {/* Stat 2 */}
        <div className="stat place-items-center">
          <div className="stat-title">SERVED OVER</div>
          <div className="stat-value text-xl md:text-2xl lg:text-4xl text-gray-800 flex justify-center items-center gap-4">
            1900
            <span>
              <img src={img2} className="w-6 lg:w-12 h-6 lg:h-12" />
            </span>
          </div>
          <div className="stat-desc text-gray-500 text-base md:text-lg lg:text-xl">
            CLIENTS
          </div>
        </div>

        {/* Stat 3 */}
        <div className="stat place-items-center">
          <div className="stat-title">MANAGED</div>
          <div className="stat-value text-xl md:text-2xl lg:text-4xl flex justify-center items-center gap-4">
            400+
            <span>
              <img src={img3} className="w-6 lg:w-12 h-6 lg:h-12" />
            </span>
          </div>
          <div className="stat-desc text-gray-500 text-base md:text-lg lg:text-xl">
            RESOURCES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
