import { RiArrowRightSLine, RiSuitcaseLine } from "react-icons/ri";
import { LuUserCheck, LuMonitor, LuDollarSign } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiBook } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobDetail = () => {
    return (
        <>
            <section className="w-full min-h-screen">
                <div className="w-full min-h-[370px] py-36 bg-all-job-bg bg-cover bg-top bg-no-repeat relative">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full text-center mt-10">
                                <h1 className="font-jakarta text-2xl text-white font-medium leading-sung md:text-3xl md:leading-snug tracking-wide">Job Detail</h1>
                            </div>
                            <div className="w-full absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center">
                                <div className="w-auto flex items-center justify-center gap-1">
                                    <Link to='/' className="font-jakarta text-[15px] font-semibold text-white/50 transition ease-linear duration-200 hover:text-white">CareerCode</Link>
                                    <RiArrowRightSLine className="font-semibold text-xl mt-[3px] text-white/50"></RiArrowRightSLine>
                                    <Link to='/' className="font-jakarta text-[15px] font-semibold text-white">Job Detail</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-[500px] py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-3">
                            <div className="w-full min-h-[500px] border border-slate-200/50 rounded-md">
                                <div className="w-full p-6 border-b border-slate-200/50">
                                    <p className="font-jakarta text-lg font-semibold text-gray-800">Job Information</p>
                                </div>
                                <div className="w-full p-6">
                                    <div className="w-full flex items-center mb-3">
                                        <div className="w-auto">
                                            <LuUserCheck size={21} className="text-gray-800"></LuUserCheck>
                                        </div>
                                        <div className="w-auto ms-4">
                                            <p className="font-jakarta text-[15px] font-medium text-gray-800">Employee Type:</p>
                                            <p className="font-jakarta text-sm text-emerald-600 font-medium mt-1">Full Time</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center mb-3">
                                        <div className="w-auto">
                                            <GrLocation size={21} className="text-gray-800"></GrLocation>
                                        </div>
                                        <div className="w-auto ms-4">
                                            <p className="font-jakarta text-[15px] font-medium text-gray-800">Location:</p>
                                            <p className="font-jakarta text-sm text-emerald-600 font-medium mt-1">Japan</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center mb-3">
                                        <div className="w-auto">
                                            <LuMonitor size={21} className="text-gray-800"></LuMonitor>
                                        </div>
                                        <div className="w-auto ms-4">
                                            <p className="font-jakarta text-[15px] font-medium text-gray-800">Job Type:</p>
                                            <p className="font-jakarta text-sm text-emerald-600 font-medium mt-1">Web Designer / Developer</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center mb-3">
                                        <div className="w-auto">
                                            <RiSuitcaseLine size={21} className="text-gray-800"></RiSuitcaseLine>
                                        </div>
                                        <div className="w-auto ms-4">
                                            <p className="font-jakarta text-[15px] font-medium text-gray-800">Experience:</p>
                                            <p className="font-jakarta text-sm text-emerald-600 font-medium mt-1">2+ year</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center mb-3">
                                        <div className="w-auto">
                                            <FiBook size={21} className="text-gray-800"></FiBook>
                                        </div>
                                        <div className="w-auto ms-4">
                                            <p className="font-jakarta text-[15px] font-medium text-gray-800">Qualifications:</p>
                                            <p className="font-jakarta text-sm text-emerald-600 font-medium mt-1">MCA</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center mb-3">
                                        <div className="w-auto">
                                            <LuDollarSign size={21} className="text-gray-800"></LuDollarSign>
                                        </div>
                                        <div className="w-auto ms-4">
                                            <p className="font-jakarta text-[15px] font-medium text-gray-800">Salary:</p>
                                            <p className="font-jakarta text-sm text-emerald-600 font-medium mt-1">$4000-$4500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JobDetail;