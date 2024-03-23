import toast from 'react-hot-toast'


// for get data 
export const getBlogs = () => {
    let blogs = [];
    let storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}


// save blogs data 

export const saveBlogs = blog => {
    let setBlogs = getBlogs();
    const isExist = setBlogs.find(b => b.id === blog.id)
    if (isExist) {
        return toast.error('Already Exist')
    }
    setBlogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(setBlogs))
    toast.success('Successfully added')
}


// delete blogs 

export const deleteBlogs = id => {
    let setBlogs = getBlogs();
    const remaining = setBlogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Removed Successfully')
}
















// // get data
// export const getBlogs = () => {
//     let blogs = [];
//     const storedBlogs = localStorage.getItem('blogs')
//     if (storedBlogs) {
//         blogs = JSON.parse(storedBlogs)
//     }
//     return blogs;
// }

// // save data
// export const saveBlogs = blog => {
//     let blogss = getBlogs();
//     const isExist = blogss.find(b => b.id === blog.id);
//     if (isExist) {
//         return toast.error('Already Exist');
//         // console.log('already exist');
//     } else {
//         blogs.push(blog)
//         localStorage.setItem('blogs', JSON.stringify(blogs));
//         toast.success('Added Successfully')
//     }

// }