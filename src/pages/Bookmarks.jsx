import { useEffect, useState } from "react";
import BlogCard from "../components/Navbar/BlogCard";
import { deleteBlogs, getBlogs } from "../Utils/Index";
import EmptyBookmark from "../components/EmptyBookmark";

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
            {
                (blogs.length < 1) &&
                <EmptyBookmark massage='No Bookmarks Available' address={'/blogs'} label='Read Blogs'></EmptyBookmark>
            }
            <div className="container mx-auto pt-10 grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
                }
            </div>

        </div>
    );
};

export default Bookmarks;