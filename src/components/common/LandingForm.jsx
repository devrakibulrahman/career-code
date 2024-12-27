import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { useJobFilter, useLocations } from '../../hooks/Hooks';
import suitcase from '../../assets/icons/suitcase.png';
import select from '../../assets/icons/select.png';
import location from '../../assets/icons/location.png';

const LandingForm = () => {
    
    // state declare here
    const [locationSelect, setLocationSelect] = useState("Select Location");
    const [filterSelect, setFilterSelect] = useState("Select Job Type");

    // true and false state declare here
    const [selectLocation, setSelectLocation] = useState(false);
    const [selectJobFilter, setJobFilter] = useState(false);

    // hooks call here
    const locationData = useLocations(`/api/locationApi.json`);
    const filterData = useJobFilter(`/api/filterApi.json`);

    // event handle function declare here
    const handleSelectLocation = () => {
        setSelectLocation(!selectLocation);
    };

    const handleSelectJobFilter = () => {
        setJobFilter(!selectJobFilter);
    };

    return (
        <>
            <form>
                <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 lg:grid-cols-4">
                    <div className="w-full relative">
                        <div className='w-5 h-5 overflow-hidden absolute top-1/2 left-[15px] transform -translate-y-1/2'>
                            <img src={suitcase} alt="icon" className='w-full h-full object-cover' />
                        </div>
                        <input type="text" name="keywords" autoComplete="off" placeholder="Search your keywords" className="w-full h-[60px] font-jakarta text-[15px] text-gray-800 outline-none border-0 bg-slate-50 rounded-md pl-[50px] pr-[13px] py-[13px] placeholder:text-gray-500 sm:rounded-none" />
                    </div>
                    <div className="w-full">
                        <div className='dropdown-select w-full h-[60px]'>
                            <div className='w-full h-full relative'>
                                <div className='w-full h-full bg-slate-50 rounded-md pl-[50px] pr-[13px] py-[13px] flex items-center justify-center relative sm:rounded-none sm:border-l sm:border-slate-200/50'>
                                    <div onClick={() => {handleSelectLocation(), setJobFilter(false)}} className='w-full flex items-center justify-between'>
                                        <p className={`font-jakarta text-[15px] ${locationSelect === 'Select Location' ? 'text-gray-500' : 'text-gray-800'}`}>{locationSelect }</p>
                                        <div className="w-auto">
                                            <MdOutlineKeyboardArrowDown className={`text-gray-500 text-lg transition-all ${selectLocation ? 'rotate-180 ease-linear duration-200' : 'rotate-0 ease-linear duration-200'}`}></MdOutlineKeyboardArrowDown>
                                        </div>
                                    </div>
                                    <div className='w-5 h-5 overflow-hidden absolute top-1/2 left-[15px] transform -translate-y-1/2'>
                                        <img src={location} alt="icon" className='w-full h-full object-cover' />
                                    </div>
                                </div>
                                {
                                    selectLocation
                                    &&
                                    <div className="w-full h-[150px] bg-white rounded-md shadow-sm absolute top-[60px] left-0 mt-3 z-10 overflow-y-scroll p-2 transition ease-linear duration-200 hover:overflow-hidden">
                                        {
                                            locationData.map(data => (
                                                <div key={data.id} onClick={() => {
                                                    setLocationSelect(data.location)
                                                    setSelectLocation(false)

                                                }} 
                                                className="w-full pl-4 py-2 bg-white transition ease-linear duration-200 hover:bg-emerald-600/5 group">
                                                    <span className="font-jakarta text-sm text-gray-800">{data.location}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className='dropdown-select w-full h-[60px]'>
                            <div className='w-full h-full relative'>
                                <div className='w-full h-full bg-slate-50 rounded-md pl-[50px] pr-[13px] py-[13px] flex items-center justify-center relative sm:rounded-none sm:border-l sm:border-slate-200/50'>
                                    <div onClick={() => {handleSelectJobFilter(), setSelectLocation(false)}} className='w-full flex items-center justify-between'>
                                        <p className={`font-jakarta text-[15px] ${filterSelect === 'Select Job Type' ? 'text-gray-500' : 'text-gray-800'}`}>{filterSelect}</p>
                                        <div className="w-auto">
                                            <MdOutlineKeyboardArrowDown className={`text-gray-500 text-lg transition-all ${selectJobFilter ? 'rotate-180 ease-linear duration-200' : 'rotate-0 ease-linear duration-200'}`}></MdOutlineKeyboardArrowDown>
                                        </div>
                                    </div>
                                    <div className='w-5 h-5 overflow-hidden absolute top-1/2 left-[15px] transform -translate-y-1/2'>
                                        <img src={select} alt="icon" className='w-full h-full object-cover' />
                                    </div>
                                </div>
                                {
                                    selectJobFilter
                                    &&
                                    <div className="w-full h-[150px] bg-white rounded-md shadow-sm absolute top-[60px] left-0 mt-3 z-10 overflow-y-scroll p-2 transition ease-linear duration-200 hover:overflow-hidden">
                                        {
                                            filterData.map(data => (
                                                <div key={data.id} onClick={() => {
                                                    setFilterSelect(data.filter)
                                                    setJobFilter(false)
                                                    setJobFilter(false)
                                                }} 
                                                className="w-full pl-4 py-2 bg-white transition ease-linear duration-200 hover:bg-emerald-600/5 group">
                                                    <span className="font-jakarta text-sm text-gray-800">{data.filter}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:col-span-4 sm:mt-6 lg:mt-0 lg:col-span-1">
                        <button className="w-full h-[60px] bg-emerald-600 rounded-md font-jakarta text-[15px] font-semibold text-white sm:rounded-none">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LandingForm;