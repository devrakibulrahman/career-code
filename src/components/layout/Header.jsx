import { FiSearch, FiMenu, FiLogIn } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { useState } from "react";
import { useScrollWindow } from "../../hooks/Hooks";
import dark from '../../assets/images/logo-dark.png';
import light from '../../assets/images/logo-light.png';
import profile from '../../assets/images/profile.png';

const Header = () => {
    
    // state declare here
    const [navActive, setNavActive] = useState(false);

    // hooks declare here
    const location = useLocation();
    const winScroll = useScrollWindow();

    const handleNavbarActive = () => {
        setNavActive(!navActive);
    };


    return (
        <>
            <div className={`w-full min-h-[75px] flex items-center justify-center fixed top-0 left-0 z-30 transition-colors ${winScroll ? 'bg-white ease-linear duration-200 shadow-sm' : 'bg-transparent ease-linear duration-200'}`}>
                {/* navbar design */}
                <div className="container mx-auto px-4">
                    <div className='w-full flex items-center justify-between'>
                        <div className="w-auto h-auto flex items-center justify-start gap-x-2">
                            <div className="w-[40px] h-[40px] sm:w-[28px] sm:h-[28px]">
                                {
                                    location.pathname !== '/'
                                    ?
                                        (
                                            winScroll
                                            ?
                                                <img src={dark} alt="logo" className='w-full h-full object-cover' />
                                            :
                                                <img src={light} alt="logo" className='w-full h-full object-cover' />
                                        )
                                    :
                                        <img src={dark} alt="logo" className='w-full h-full object-cover' />
                                }
                            </div>
                            <div className="w-auto hidden sm:block">
                                <h1 className={`font-jakarta text-2xl font-bold ${location.pathname !== '/' ? `${winScroll ? 'text-gray-800' : 'text-white'}` : 'text-gray-800'}`}>CareerCode</h1>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-end gap-x-2'>
                            <div className="w-auto mr-7 hidden lg:block">
                                <nav className="w-full">
                                    <ul className="w-full flex items-center justify-center gap-x-8">
                                        <li className={`font-jakarta text-base font-medium ${location.pathname !== '/' ? `${winScroll ? 'text-gray-800 ease-linear duration-200 hover:text-emerald-600' : 'text-white/50 ease-linear duration-200 hover:text-white'}` : 'text-emerald-600'}`}><NavLink to="/" >Home</NavLink></li>
                                        <li className={`font-jakarta text-base font-medium ${location.pathname !== '/' && location.pathname === '/all_jobs' ? `${winScroll ? 'text-emerald-600' : 'text-white'}` : 'text-gray-800'}`}><NavLink to='/all_jobs' >All Job</NavLink></li>
                                        <li className="font-jakarta text-base text-gray-800 font-medium"><NavLink to='/dashboard'>Dashboard</NavLink></li>
                                        <li className="font-jakarta text-base text-gray-800 font-medium"><NavLink to='/contact'>Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="w-auto flex items-center justify-center gap-x-2">
                                <div className='w-40 relative sm:w-52'>
                                    <FiSearch className="text-lg text-gray-800 absolute transform -translate-y-1/2 top-1/2 right-[8%]"></FiSearch>
                                    <input type="text" placeholder='Search...' className='font-jakarta text-sm placeholder:text-gray-500 text-gray-800 rounded-full py-[8px] pl-4 pr-[40px] w-full border border-gray-100 outline-none' />
                                </div>
                                <div className="w-[34px] h-[34px] rounded-full bg-emerald-600 p-[2px]">
                                    <div className="w-full h-full bg-white rounded-full overflow-hidden">
                                        <img src={profile} alt="profile" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto lg:hidden">
                                <button onClick={handleNavbarActive} className="flex items-center justify-center">
                                    <FiMenu className="text-3xl text-gray-800"></FiMenu>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* responsive navbar design */}
                <div className={`w-full h-screen bg-black/10 fixed top-0 transition-all ${navActive ? 'left-0 ease-linear duration-300' : '-left-[110%] ease-linear duration-500'} z-40`}>
                    <div className={`w-full max-w-[300px] h-screen bg-white fixed top-0 shadow-sm transition-all ${navActive ? 'left-0 ease-linear duration-500' : '-left-[120%] ease-linear duration-300'} z-50`}>
                        <div className="w-full h-[75px] flex items-center justify-end pr-4">
                            <button onClick={handleNavbarActive} className="flex items-center justify-center">
                                <IoClose className="text-3xl text-gray-800"></IoClose>
                            </button>
                        </div>
                        <div className="w-full min-h-[75px] flex items-center justify-center">
                            <div className="w-full px-5 flex justify-start gap-x-3">
                                <div className="w-12 h-12 bg-emerald-600 rounded-full p-[3px]">
                                    <div className="w-full h-full bg-white rounded-full overflow-hidden">
                                        <img src={profile} alt="profile" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-auto flex justify-center gap-y-[2px] flex-col">
                                    <h3 className="font-jakarta text-base font-semibold text-gray-800">Rakibul Rahman</h3>
                                    <p className="font-jakarta text-xs text-gray-500">Employer</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-2">
                            <nav className="w-full">
                                <ul className="w-full flex flex-col">
                                    <li className="font-jakarta text-base text-gray-800 font-medium pl-7 py-4 border-b border-gray-100"><NavLink to="/" className={`${location.pathname === '/' && 'text-emerald-600'}`}>Home</NavLink></li>
                                    <li className="font-jakarta text-base text-gray-800 font-medium pl-7 py-4 border-b border-gray-100"><NavLink>All Job&apos;s</NavLink></li>
                                    <li className="font-jakarta text-base text-gray-800 font-medium pl-7 py-4 border-b border-gray-100"><NavLink>My Applications</NavLink></li>
                                    <li className="font-jakarta text-base text-gray-800 font-medium pl-7 py-4 border-b border-gray-100"><NavLink>My Job Posts</NavLink></li>
                                    <li className="font-jakarta text-base text-gray-800 font-medium pl-7 py-4 border-b border-gray-100"><NavLink>Dashboard</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="w-full absolute bottom-[50px]">
                            <div className="w-auto flex flex-col items-end gap-y-5 mr-5">
                                <div className="w-auto cursor-pointer">
                                    <MdOutlineLightMode className="text-gray-800 text-xl"></MdOutlineLightMode>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="w-auto flex items-center gap-x-2 pl-6">
                                        <FiLogIn className="text-emerald-600 text-xl"></FiLogIn>
                                        <h3 className="font-jakarta text-emerald-600 font-semibold">Sign In</h3>
                                    </div>
                                    <div className="w-auto cursor-pointer">
                                        <LuSettings className="text-gray-800 text-xl"></LuSettings>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;