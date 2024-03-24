import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EmptyBookmark = ({massage,address, label}) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-lg space-y-5">
                            <h1 className="text-4xl text-gray-600 font-bold">{massage}</h1>
                            <Link to={address} className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
                                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span className="relative">{label}</span>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

EmptyBookmark.propTypes = {
    massage: PropTypes.string,
    address: PropTypes.string,
    label: PropTypes.string
    
}

export default EmptyBookmark;