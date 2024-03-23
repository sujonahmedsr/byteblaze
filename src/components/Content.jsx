import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";

import { useLoaderData } from "react-router-dom";


const Content = () => {
    const blog = useLoaderData();
    const { cover_image, tags, body_html} = blog;
    return (
        <div>
            <div className="border-2 p-2 overflow-scroll">
                <div className="dark:text-gray-800">
                    <img src={cover_image} alt="" />
                </div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {
                        tags.map((tag, idx) => <a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                    }
                </div>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;