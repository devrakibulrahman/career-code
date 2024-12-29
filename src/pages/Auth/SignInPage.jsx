import { Link } from "react-router-dom";
import Input from "../../components/Input";
import InputCheck from "../../components/InputCheck";
import dark from "../../assets/images/logo-dark.png";

const SignInPage = () => {
    return (
        <>
            <div className="w-full min-h-screen relative bg-signin bg-cover bg-center bg-no-repeat">
                <div className="w-full min-h-screen bg-gradient-to-b from-transparent to-slate-900">
                    <div className="container mx-auto px-4">
                        <div className="w-full min-h-screen flex items-center">
                            <div className="w-full max-w-[370px] min-h-[465px] bg-white p-6 rounded-md">
                                <div className="w-full">
                                    <div className="w-auto h-auto flex items-center justify-center gap-x-2 cursor-pointer">
                                        <div className="w-[40px] h-[40px] sm:w-[28px] sm:h-[28px]">
                                            <img src={dark} alt="logo" className='w-full h-full object-cover' />
                                        </div>
                                        <div className="w-auto hidden sm:block">
                                            <h1 className="font-jakarta text-2xl font-bold text-gray-800">CareerCode</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full my-6'>
                                    <h3 className='font-jakarta text-xl font-semibold text-gray-800'>Sign In</h3>
                                </div>
                                <form className='w-full'>
                                    <div className='w-full mb-4'>
                                        <div className='w-full mb-3'>
                                            <label className='font-jakarta text-[15px] font-semibold'>Email Address:</label>
                                        </div>
                                        <div className='w-full'>
                                            <Input placeholder={'example@gmail.com'}></Input>
                                        </div>
                                    </div>
                                    <div className='w-full mb-4'>
                                        <div className='w-full'>
                                            <div className='w-full mb-3'>
                                                <label className='font-jakarta text-[15px] font-semibold'>Password:</label>
                                            </div>
                                            <div className='w-full'>
                                                <Input placeholder={'Password'}></Input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center justify-between mb-4'>
                                        <div className='w-auto flex items-center justify-center gap-2'>
                                            <InputCheck></InputCheck>
                                            <div className='w-auto'>
                                                <p className='font-jakarta text-slate-400 text-[15px] font-normal'>
                                                    Remember me
                                                </p>
                                            </div>
                                        </div>
                                        <div className='w-auto'>
                                            <Link className='font-jakarta text-slate-400 text-[15px] font-normal transition-all ease-linear duration-200 hover:underline'>Forgot password?</Link>
                                        </div>
                                    </div>
                                    <div className='w-full mb-4'>
                                        <button className="font-jakarta text-[15px] font-semibold bg-emerald-600 w-full px-5 py-2 text-white rounded-md transition-all ease-linear duration-200 hover:bg-emerald-700">Sign In</button>
                                    </div>
                                    <div className='w-full text-center'>
                                        <span className='font-jakarta text-[15px] font-normal text-slate-400 me-2'>Don&apos; have an account?</span>
                                        <Link to="/auth/sign_up" className='font-jakarta text-[15px] font-bold text-gray-800'>Sign Up</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInPage;