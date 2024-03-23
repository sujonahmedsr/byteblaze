import { Link } from "react-router-dom";
import wave from '../assets/wave.svg';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-132px)] relative">
                <div className="hero-content text-center">
                    <div className="max-w-lg space-x-4">
                        <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-secondarybg-gradient-to-r from-secondary via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient" >ByteBlaze</span></h1>
                        <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>

                        <Link to={'/blogs'} className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">Read Blogs</span>
                        </Link>
                        <Link to={'/bookmarks'} className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">Bookmark</span>
                        </Link>
                    </div>
                </div>
                <img className="w-full absolute bottom-0" src={wave} alt="" />
            </div>
            
        </div>
    );
};

export default Home;