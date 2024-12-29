import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import contact from '../assets/svg/contact.svg';
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import ContactCard from "../components/common/ContactCard";
import { useContact } from "../hooks/Hooks";

const Contact = () => {

    // hooks declare here ---->
    const contactInfo = useContact(`/api/contactInfoApi.json`);

    return (
        <>
            <section className="w-full min-h-screen">
                <div className="w-full min-h-[370px] py-36 bg-all-job-bg bg-cover bg-top bg-no-repeat relative">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full text-center mt-10">
                                <h1 className="font-jakarta text-2xl text-white font-medium leading-sung md:text-3xl md:leading-snug tracking-wide">Contact</h1>
                            </div>
                            <div className="w-full absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center">
                                <div className="w-auto flex items-center justify-center gap-1">
                                    <Link to='/' className="font-jakarta text-[15px] font-semibold text-white/50 transition ease-linear duration-200 hover:text-white">CareerCode</Link>
                                    <RiArrowRightSLine className="font-semibold text-xl mt-[3px] text-white/50"></RiArrowRightSLine>
                                    <Link to='/' className="font-jakarta text-[15px] font-semibold text-white">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="w-full min-h-[640px] flex flex-col items-center justify-center md:flex-row">
                            <div className="w-full">
                                <img src={contact} alt="contact image" />
                            </div>
                            <div className="w-full flex items-center mt-10 md:mt-0 md:justify-end   ">
                                <div className="w-full min-h-[515px] p-6 border border-slate-200/50 rounded-lg md:max-w-[430px]">
                                    <div className="w-full">
                                        <h1 className="font-jakarta text-2xl font-semibold text-gray-800 leading-normal mb-6">Get in touch !</h1>
                                    </div>
                                    <form className="w-full">
                                        <div className="w-full flex items-center justify-start gap-2">
                                            <div className='w-full mb-4'>
                                                <div className='w-full mb-3'>
                                                    <label className='font-jakarta text-[15px] font-semibold'>Your Name:</label>
                                                </div>
                                                <div className='w-full'>
                                                    <Input placeholder={'Name'}></Input>
                                                </div>
                                            </div>
                                            <div className='w-full mb-4'>
                                                <div className='w-full mb-3'>
                                                    <label className='font-jakarta text-[15px] font-semibold'>Your Email:</label>
                                                </div>
                                                <div className='w-full'>
                                                    <Input placeholder={'Email'}></Input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full mb-4'>
                                            <div className='w-full mb-3'>
                                                <label className='font-jakarta text-[15px] font-semibold'>Your Question:</label>
                                            </div>
                                            <div className='w-full'>
                                                <Input placeholder={'Subject'}></Input>
                                            </div>
                                        </div>
                                        <div className='w-full mb-4'>
                                            <div className='w-full mb-3'>
                                                <label className='font-jakarta text-[15px] font-semibold'>Your Comment:</label>
                                            </div>
                                            <div className='w-full'>
                                                <TextArea placeholder='Message' row={5} col={50}></TextArea>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button className="font-jakarta text-[15px] font-semibold text-white py-2 px-5 bg-emerald-600 rounded-md transition ease-linear duration-200 hover:bg-emerald-700">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-16 lg:mt-24">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    contactInfo?.map((data) => (
                                        <ContactCard key={data?.id} contact={data}></ContactCard>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;