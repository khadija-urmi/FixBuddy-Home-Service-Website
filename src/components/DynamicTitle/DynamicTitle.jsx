import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const routeTitles = {
            '/': 'Home - FixBuddy',
            '/login': 'Log In - FixBuddy',
            '/register': 'Register - FixBuddy',
            '/addService': 'Add Service - FixBuddy',
            '/allServices': 'All Service - FixBuddy',
            '/manageService': 'Manage Service - FixBuddy',
            '/bookedServices': 'Booked Service - FixBuddy',
        };
        const getTitle = (pathname) => {
            if (pathname.startsWith('/services/')) {
                return 'Service Details - FixBuddy';
            }
            return routeTitles[pathname] || 'FixBuddy';
        };

        const title = getTitle(location.pathname);
        document.title = title;

    }, [location]);


    return null;
};

export default DynamicTitle;
