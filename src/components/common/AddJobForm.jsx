import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from '../Input';
import TextArea from '../TextArea';
import InputNumber from "../InputNumber";
import { useState } from "react";
import { useJobCate, useJobType, useSalaryType } from "../../hooks/Hooks";

const AddJobForm = () => {

    // state declare here ---->
    const [jobCateSelect, setJobCateSelect] = useState('Select Job Category');
    const [jobTypeSelect, setJobTypeSelect] = useState('Select Job Type');
    const [jobSalarySelect, setJobSalarySelect] = useState('Select Salary Type');

    // hooks declare here ---->
    const jobCate = useJobCate(`/api/jobCategoryApi.json`);
    const jobType = useJobType(`/api/jobTypeApi.json`);
    const salaryType = useSalaryType(`/api/salaryApi.json`);

    // true and false state declare here ---->
    const [jobCateSelectActive, setJobCateSelectActive] = useState(false);
    const [jobTypeSelectActive, setJobTypeSelectActive] = useState(false);
    const [salaryTypeSelectActive, setSalaryTypeSelectActive] = useState(false);

    // event function handle declare here ---->
    const handleJobCateSelect = () => {
        setJobCateSelectActive(!jobCateSelectActive);
    };

    const handleJobTypeSelect = () => {
        setJobTypeSelectActive(!jobTypeSelectActive);
    };

    const handleSalaryTypeSelect = () => {
        setSalaryTypeSelectActive(!salaryTypeSelectActive);
    };

    return (
        <>
            <div className="w-full">
                <form className="w-full">
                    <div className="w-full">
                        <div className="w-full">
                            <div className="w-full mb-4">
                                <h1 className="font-jakarta text-gray-800 font-semibold text-lg">Job Details</h1>
                            </div>
                            <div className="w-full">
                                <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Job Title:</label>
                                <div className="w-full mt-2">
                                    <Input placeholder='Title'></Input>
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Job Description:</label>
                                <div className="w-full mt-2">
                                    <TextArea placeholder='Write Job Description' row={5}></TextArea>
                                </div>
                            </div>
                            <div className="w-full grid gap-4 mt-4 lg:grid-cols-12">
                                <div className="w-auto lg:col-span-6">
                                    <div className="w-full">
                                        <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Job Category:</label>
                                    </div>
                                    <div className="w-full h-10 mt-2">
                                        <div className="w-full h-full relative">
                                            <div className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                <p>Select Category</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-auto lg:col-span-6">
                                    <div className="w-full">
                                        <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Job Type:</label>
                                    </div>
                                    <div className="w-full h-10 mt-2">
                                        <div className="w-full h-full relative">
                                            <div className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                <p>Select Job Type</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <div className="w-full">
                                    <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Salary Type:</label>
                                </div>
                                <div className="w-full grid gap-4 lg:grid-cols-12 mt-2">
                                    <div className="w-auto lg:col-span-6">
                                        <div className="w-full h-10">
                                            <div className="w-full h-full relative">
                                                <div className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                    <p>Select Type</p>
                                                    <div className="w-auto">
                                                        <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full grid gap-4 lg:grid-cols-2 lg:col-span-6">
                                        <div className="w-auto">
                                            <InputNumber placeholder="min"></InputNumber>
                                        </div>
                                        <div className="w-auto">
                                            <InputNumber placeholder="max"></InputNumber>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-8">
                            <div className="w-full mb-4">
                                <h1 className="font-jakarta text-gray-800 font-semibold text-lg">Skill & Experience:</h1>
                            </div>
                            <div className="w-full">
                                <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Skills:</label>
                                <div className="w-full mt-2">
                                    <Input placeholder='Type Skill'></Input>
                                </div>
                            </div>
                            <div className="w-full grid gap-3 lg:grid-cols-12 mt-4">
                                <div className="w-auto lg:col-span-6">
                                    <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Qualifications:</label>
                                    <div className="w-full mt-2">
                                        <Input placeholder='Qualifications'></Input>
                                    </div>
                                </div>
                                <div className="w-auto lg:col-span-6">
                                    <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Experience:</label>
                                    <div className="w-full mt-2">
                                        <Input placeholder='Experience'></Input>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-auto lg:col-span-6">
                                    <div className="w-full mt-4">
                                        <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Industry:</label>
                                    </div>
                                    <div className="w-full h-10 mt-2">
                                        <div className="w-full h-full relative">
                                            <div className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                <p>Select Category</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-8">
                            <div className="w-full mb-4">
                                <h1 className="font-jakarta text-gray-800 font-semibold text-lg">Address:</h1>
                            </div>
                            <div className="w-full mt-4">
                                <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Address:</label>
                                <div className="w-full mt-2">
                                    <Input placeholder='Address'></Input>
                                </div>
                            </div>
                            <div className="w-full grid gap-3 mt-4 lg:grid-cols-12">
                                <div className="w-auto lg:col-span-6">
                                    <div className="w-full">
                                        <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Country:</label>
                                    </div>
                                    <div className="w-full h-10 mt-2">
                                        <div className="w-full h-full relative">
                                            <div className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                <p>Country</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-auto lg:col-span-6">
                                    <div className="w-full">
                                        <label className="font-jakarta text-[15px] text-gray-800 font-semibold">State:</label>
                                    </div>
                                    <div className="w-full h-10 mt-2">
                                        <div className="w-full h-full relative">
                                            <div className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                <p>Select Category</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <button className="font-jakarta text-[15px] font-semibold text-white py-2 px-6 bg-emerald-600 rounded-md transition ease-linear duration-200 hover:bg-emerald-700">Post Now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddJobForm;