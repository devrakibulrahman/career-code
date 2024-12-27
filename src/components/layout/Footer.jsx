import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import logo from '../../assets/images/logo-light.png';

const Footer = () => {
    return (
        <div className="w-full bg-slate-900 mt-auto">
            <div className="container mx-auto px-4">
                <div className="w-full py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className='w-auto flex items-center justify-center gap-x-2'>
                        <div className="w-[28px] h-[28px]">
                            <img src={logo} alt="logo" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-auto'>
                            <h1 className="font-jakarta text-2xl font-bold text-white">CareerCode</h1>
                        </div>
                    </div>
                    <div className='w-auto flex items-center justify-center flex-wrap gap-8 mt-8 sm:mt-0'>
                        <div className='auto'>
                            <Link className='font-jakarta text-base text-gray-300 font-medium transition ease-linear duration-300 hover:text-gray-400'>Home</Link>
                        </div>
                        <div className='auto'>
                            <Link className='font-jakarta text-base text-gray-300 font-medium transition ease-linear duration-300 hover:text-gray-400'>About Us</Link>
                        </div>
                        <div className='auto'>
                            <Link className='font-jakarta text-base text-gray-300 font-medium transition ease-linear duration-300 hover:text-gray-400'>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full border-b border-gray-800'></div>
                <div className='w-full py-[30px] flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className='w-auto text-center'>
                        <p className='font-jakarta text-base text-gray-300'>&copy; Copyright-2024 Career Code. All right reserved</p>
                    </div>
                    <div className='w-auto flex items-center justify-center gap-x-1 mt-6 sm:mt-0'>
                        <div className='w-8 h-8 border-2 border-gray-800 flex items-center justify-center transition ease-linear duration-300 hover:border-emerald-600 rounded-md group'>
                            <FaFacebookF className='text-sm text-white group-hover:text-emerald-600'></FaFacebookF>
                        </div>
                        <div className='w-8 h-8 border-2 border-gray-800 flex items-center justify-center transition ease-linear duration-300 hover:border-emerald-600 rounded-md group'>
                            <FaInstagram className='text-sm text-white group-hover:text-emerald-600'></FaInstagram>
                        </div>
                        <div className='w-8 h-8 border-2 border-gray-800 flex items-center justify-center transition ease-linear duration-300 hover:border-emerald-600 rounded-md group'>
                            <FaPinterestP className='text-sm text-white group-hover:text-emerald-600'></FaPinterestP>
                        </div>
                        <div className='w-8 h-8 border-2 border-gray-800 flex items-center justify-center transition ease-linear duration-300 hover:border-emerald-600 rounded-md group'>
                            <FaTwitter className='text-sm text-white group-hover:text-emerald-600'></FaTwitter>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center py-7'>
                    <p className='font-jakarta text-base text-gray-200 opacity-40'>Design inspire and credit by <span className='text-emerald-600'>Jobstack</span>. And developed by <span className='text-emerald-600'>Rakibul Rahman</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;