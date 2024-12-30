import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from '../Input';
import TextArea from '../TextArea';
import InputNumber from "../InputNumber";
import { useState } from "react";
import { useIndustryType, useJobCate, useJobType, useSalaryType } from "../../hooks/Hooks";

const AddJobForm = () => {

    // state declare here ---->
    const [jobCateSelect, setJobCateSelect] = useState('Select Job Category');
    const [jobTypeSelect, setJobTypeSelect] = useState('Select Job Type');
    const [jobSalarySelect, setJobSalarySelect] = useState('Select Salary Type');
    const [industrySelect, setIndustrySelect] = useState('Select Industry Type');
    const [country, setCountry] = useState('Select Country');

    // hooks declare here ---->
    const jobCate = useJobCate(`/api/jobCategoryApi.json`);
    const jobType = useJobType(`/api/jobTypeApi.json`);
    const salaryType = useSalaryType(`/api/salaryApi.json`);
    const industryType = useIndustryType(`/api/industryTypeApi.json`);

    // true and false state declare here ---->
    const [jobCateSelectActive, setJobCateSelectActive] = useState(false);
    const [jobTypeSelectActive, setJobTypeSelectActive] = useState(false);
    const [salaryTypeSelectActive, setSalaryTypeSelectActive] = useState(false);
    const [industrySelectActive, setIndustrySelectActive] = useState(false);
    const [countrySelectActive, setCountrySelectActive] = useState(false);

    // event function handle declare here ---->
    const handleJobCateSelect = () => {
        setJobCateSelectActive(!jobCateSelectActive);
        setJobTypeSelectActive(false);
        setSalaryTypeSelectActive(false);
        setIndustrySelectActive(false);
        setCountrySelectActive(false);
    };

    const handleJobTypeSelect = () => {
        setJobTypeSelectActive(!jobTypeSelectActive);
        setJobCateSelectActive(false);
        setSalaryTypeSelectActive(false);
        setIndustrySelectActive(false);
        setCountrySelectActive(false);
    };

    const handleSalaryTypeSelect = () => {
        setSalaryTypeSelectActive(!salaryTypeSelectActive);
        setJobCateSelectActive(false);
        setJobTypeSelectActive(false);
        setIndustrySelectActive(false);
        setCountrySelectActive(false);
    };

    const handleIndustrySelect = () => {
        setIndustrySelectActive(!industrySelectActive);
        setJobCateSelectActive(false);
        setSalaryTypeSelectActive(false);
        setJobTypeSelectActive(false);
        setCountrySelectActive(false);
    };

    const handleCountrySelect = () => {
        setCountrySelectActive(!countrySelectActive);
        setJobTypeSelectActive(false);
        setJobCateSelectActive(false);
        setSalaryTypeSelectActive(false);
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
                                            <div onClick={() => {handleJobCateSelect()}} className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between cursor-pointer">
                                                <p className={`font-jakarta text-[15px] ${jobCateSelect === 'Select Job Category' ? 'text-gray-500' : 'text-gray-800'}`}>{jobCateSelect}</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className={`text-gray-500 transition ease-linear duration-200 ${jobCateSelectActive && 'rotate-180'}`}></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                            {
                                                jobCateSelectActive
                                                &&
                                                <div className="w-full min-h-[100px] absolute top-[120%] left-0 bg-white border border-slate-200/50 z-10 rounded-md shadow-md">
                                                    {
                                                        jobCate?.map((data) => (
                                                            <div key={data.id} className="w-full px-4 py-2 transition-all ease-linear duration-200 cursor-pointer hover:bg-emerald-600/5"
                                                            onClick={() => {
                                                                setJobCateSelect(data?.cate)
                                                                setJobCateSelectActive(false)
                                                            }}
                                                            >
                                                                <p className="font-jakarta text-sm text-gray-800">{data?.cate}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="w-auto lg:col-span-6">
                                    <div className="w-full">
                                        <label className="font-jakarta text-[15px] text-gray-800 font-semibold">Job Type:</label>
                                    </div>
                                    <div className="w-full h-10 mt-2">
                                        <div className="w-full h-full relative">
                                            <div onClick={() => {handleJobTypeSelect()}} className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between cursor-pointer">
                                                <p className={`font-jakarta text-[15px] ${jobTypeSelect === 'Select Job Type' ? 'text-gray-500' : 'text-gray-800'}`}>{jobTypeSelect}</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className={`text-gray-500 transition ease-linear duration-200 ${jobTypeSelectActive && 'rotate-180'}`}></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                            {
                                                jobTypeSelectActive
                                                &&
                                                <div className="w-full min-h-[100px] absolute top-[120%] left-0 bg-white border border-slate-200/50 z-10 rounded-md shadow-md">
                                                    {
                                                        jobType?.map((data) => (
                                                            <div key={data?.id} className="w-full px-4 py-2 transition-all ease-linear duration-200 cursor-pointer hover:bg-emerald-600/5"
                                                            onClick={() => {
                                                                setJobTypeSelect(data?.type)
                                                                setJobTypeSelectActive(false)
                                                            }}
                                                            >
                                                                <p className="font-jakarta text-sm text-gray-800">{data?.type}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }
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
                                                <div onClick={() => {handleSalaryTypeSelect()}} className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between cursor-pointer">
                                                    <p className={`font-jakarta text-[15px] ${jobSalarySelect === 'Select Salary Type' ? 'text-gray-500' : 'text-gray-800'}`}>{jobSalarySelect}</p>
                                                    <div className="w-auto">
                                                        <MdOutlineKeyboardArrowDown className={`text-gray-500 transition ease-linear duration-200 ${salaryTypeSelectActive && 'rotate-180'}`}></MdOutlineKeyboardArrowDown>
                                                    </div>
                                                </div>
                                                {
                                                    salaryTypeSelectActive
                                                    &&
                                                    <div className="w-full min-h-[50px] absolute top-[120%] left-0 bg-white border border-slate-200/50 z-10 rounded-md shadow-md">
                                                        {
                                                            salaryType?.map((data) => (
                                                                <div key={data?.id} className="w-full px-4 py-2 transition-all ease-linear duration-200 cursor-pointer hover:bg-emerald-600/5"
                                                                onClick={() => {
                                                                    setJobSalarySelect(data?.type)
                                                                    setSalaryTypeSelectActive(false)
                                                                }}
                                                                >
                                                                    <p className="font-jakarta text-sm text-gray-800">{data?.type}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                }
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
                                            <div onClick={() => {handleIndustrySelect()}} className="dropdown w-full h-full border border-slate-200/50 rounded-md px-3 flex items-center justify-between">
                                                <p className={`font-jakarta text-[15px] ${industrySelect === 'Select Industry Type' ? 'text-gray-500' : 'text-gray-800'}`}>{industrySelect}</p>
                                                <div className="w-auto">
                                                    <MdOutlineKeyboardArrowDown className="text-gray-500"></MdOutlineKeyboardArrowDown>
                                                </div>
                                            </div>
                                            {
                                                industrySelectActive
                                                &&
                                                <div className="w-full min-h-[50px] absolute top-[120%] left-0 bg-white border border-slate-200/50 z-10 rounded-md shadow-md">
                                                    {
                                                        industryType?.map((data) => (
                                                            <div key={data?.id} className="w-full px-4 py-2 transition-all ease-linear duration-200 cursor-pointer hover:bg-emerald-600/5"
                                                            onClick={() => {
                                                                setIndustrySelect(data?.type)
                                                                setIndustrySelectActive(false)
                                                            }}
                                                            >
                                                                <p className="font-jakarta text-sm text-gray-800">{data?.type}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }
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