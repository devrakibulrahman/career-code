import { GrLocation } from "react-icons/gr";
import PropTypes from "prop-types"; 

const JopCard = ({job}) => {
    console.log(job);

    return (
        <>
            <div className="w-full min-h-[250px] bg-white border border-gray-200/80 p-6 rounded-md transition-all ease-linear duration-200 hover:shadow-md group">
                <div className="w-full flex items-center justify-between">
                    <div className="w-auto flex items-center gap-x-3">
                        <div className="w-14 h-14 rounded-md border border-gray-200/80 flex items-center justify-center">
                            <div className="w-7 h-7">

                            </div>
                        </div>
                        <div className="w-auto">
                            <h1 className="font-jakarta text-base font-semibold text-gray-800 transition ease-linear duration-200 hover:text-emerald-600">Facebook</h1>
                            <p className="font-jakarta text-sm font-normal text-slate-400">2 days ago</p>
                        </div>
                    </div>
                    <div className="px-2.5 py-0.5 rounded-full bg-emerald-600/5 inline-block ease-linear duration-200 group-hover:bg-emerald-600">
                        <p className="font-jakarta text-xs text-emerald-600 font-semibold ease-linear duration-200 group-hover:text-white">Full Time</p>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <h1 className="font-jakarta text-lg text-gray-800 font-semibold">Web Designer / Designer</h1>
                    <h3 className="font-jakarta text-[15px] text-emerald-600 font-medium flex items-center gap-2 mt-1">
                        <GrLocation></GrLocation>
                        New York
                    </h3>
                </div>
                <div className="w-full flex items-center gap-x-2 mt-6">
                    <div className="px-3 py-1 rounded-md bg-emerald-600/5 inline-block">
                        <p className="font-jakarta text-sm text-gray-800 font-normal">React JS</p>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-emerald-600/5 inline-block">
                        <p className="font-jakarta text-sm text-gray-800 font-normal">C++</p>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-emerald-600/5 inline-block">
                        <p className="font-jakarta text-sm text-gray-800 font-normal">Figma</p>
                    </div>
                </div>
                <div className="w-full mt-5 flex items-center justify-between">
                    <div className="w-auto">
                        <p className="font-jakarta text-sm text-gray-800 font-semibold">21 Applied <span className="text-slate-400 font-light">of 40 vacancy</span></p>
                    </div>
                    <div className="w-auto">
                        <button className="font-jakarta px-3 py-2 border border-emerald-600/20 rounded-md text-emerald-600 text-sm ease-linear duration-200 group-hover:text-white group-hover:bg-emerald-600">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

JopCard.propTypes = {
    job: PropTypes.object.isRequired,
};

export default JopCard;