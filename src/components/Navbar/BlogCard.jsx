import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.jpg'
const BlogCard = ({blog}) => {
    const {cover_image, title, description, published_at, id} = blog;
    
    return (
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 border-primary rounded-md hover:scale-105 transition duration-300 p-2">
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || errorImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogCard;