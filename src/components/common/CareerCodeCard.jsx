import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const CareerCodeCard = ({career}) => {
    return (
        <>
            <div className="w-full min-h-[250px] border border-slate-200/80 rounded-md flex flex-col items-center justify-center transition-all ease-linear duration-200 p-6 hover:shadow-md">
                <div className="w-16 h-16 rounded-md bg-emerald-600 shadow-sm flex items-center justify-center">
                    <div className="w-8 h-8 overflow-hidden">
                        <img src={career?.icon} alt="icons" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full max-w-[250px] text-center mt-4">
                    <h1 className="font-jakarta text-gray-800 font-semibold">{career?.title}</h1>
                    <p className="font-jakarta text-slate-400 text-[15px] font-normal mt-3 mb-2">{career?.description}</p>
                    <div className="w-full inline-block mt-2">
                        <Link className="font-jakarta text-[15px] text-gray-800 font-medium flex items-center justify-center gap-1 transition-all ease-linear duration-200 group hover:text-emerald-600">{career?.cta} <IoMdArrowForward className="mt-1 ease-linear duration-200 transform group-hover:translate-x-1"></IoMdArrowForward></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

CareerCodeCard.propTypes = {
    career: PropTypes.object.isRequired,
};

export default CareerCodeCard;