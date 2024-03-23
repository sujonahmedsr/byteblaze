import { useEffect, useState } from "react";
import BlogCard from "../components/Navbar/BlogCard";
import { deleteBlogs, getBlogs } from "../Utils/Index";
import { Link } from "react-router-dom";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const stored = getBlogs();
        setBlogs(stored);
    }, [])

    const handleDelete = (id) => {
        deleteBlogs(id)
        const stored = getBlogs();
        setBlogs(stored);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg space-y-5">
                        <h1 className="text-4xl text-gray-600 font-bold">No Bookmarks Found</h1>
                        <Link to={'/blogs'} className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">Read Blogs</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-10 grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.slice(1).map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;