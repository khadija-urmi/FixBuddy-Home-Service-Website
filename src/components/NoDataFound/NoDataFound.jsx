import { useNavigate } from "react-router-dom";

const NoDataFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">No Data Found</h1>
                <p className="text-gray-600 text-lg mb-6">
                    We couldn&apos;t find any information to display at the moment. Please check back later or try exploring other sections.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NoDataFound;
