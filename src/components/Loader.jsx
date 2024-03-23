import ScaleLoader  from "react-spinners/ScaleLoader";
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <ScaleLoader color="#36d7b7"/>
        </div>
    );
};

export default Loader;