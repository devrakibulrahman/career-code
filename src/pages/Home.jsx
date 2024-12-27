import { usePopularCate } from "../hooks/Hooks";
import LandingForm from "../components/common/LandingForm";
import Android from "../assets/icons/android.png";
import Adobe from "../assets/icons/adobe.png";
import Meta from "../assets/icons/meta.png";
import Microsoft from "../assets/icons/microsoft.png";
import Figma from "../assets/icons/figma.png";
import Snapchat from "../assets/icons/snapchat.png";
import CategoryCard from "../components/common/CategoryCard";

const Home = () => {

    const categoryData = usePopularCate(`/api/popularCateApi.json`);

    return (
        <>
            {/* landing page */}
            <section className="w-full">
                <div className="w-full min-h-screen bg-emerald-600/5 inset-0 py-36 md:py-56 relative">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full h-full absolute top-0 left-0 bg-transparent -z-10">
                                <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute top-[12%] left-[50%] transform -translate-x-1/2">
                                    <img src={Adobe} alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 animate-[pulse_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute bottom-[8%] left-[48.9%]">
                                    <img src={Meta} alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[40%] left-[14%]">
                                    <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2">
                                        <img src={Microsoft} alt="icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="absolute bottom-[15%] right-[10%]">
                                    <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2">
                                        <img src={Snapchat} alt="icon" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-10 h-10 animate-[pulse_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute top-[32%] right-[20%]">
                                    <img src={Android} alt="icon" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center p-2 absolute bottom-[8%] left-[15%]">
                                    <img src={Figma} alt="icon" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-full mt-10">
                                <div className="w-full flex flex-col items-center justify-center">
                                    <div className="w-full text-center mb-5 max-w-md">
                                        <h1 className="font-jakarta text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal">Join us & <span className="text-emerald-600">Explore Thousands</span> of Jobs</h1>
                                    </div>
                                    <div className="w-full text-center">
                                        <p className="font-jakarta text-slate-400 text-lg max-w-xl mx-auto lg:max-w-[650px]">Find Jobs, Employment & Career Opportunities. Some of the companies we&apos;ve helped recruit excellent applicants over the years.</p>
                                    </div>
                                </div>
                                <div className="w-full max-w-[610px] p-3 bg-white rounded-md shadow-sm mt-8 mx-auto lg:max-w-[778px] xl:max-w-[933px]">
                                    <LandingForm></LandingForm>
                                </div>
                                <div className="w-full mt-4 text-center">
                                    <p className="font-jakarta text-gray-400 font-normal text-[15px]"><span className="text-gray-800">Popular Searches :</span> Designer, Developer, Software Engineer, Network Engineer, Data Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* category and about page */}
            <section className="w-full">
                <div className="w-full min-h-screen bg-white">
                    <div className="container mx-auto px-4">
                        <div className="w-full py-16 md:py-24">
                            {/* category section */}
                            <div className="w-full min-h-[500px]">
                                <div className="w-full text-center pb-8">
                                    <div className="w-auto text-center mb-4">
                                        <h1 className="font-jakarta text-2xl leading-normal font-semibold text-gray-800 md:text-[26px] md:leading-normal">Populate Categories</h1>
                                    </div>
                                    <div className="w-auto">
                                        <p className="font-jakarta text-slate-400 font-light text-[15px] max-w-xl mx-auto leading-normal">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
                                    {
                                        categoryData?.map((cate) => (
                                            <CategoryCard key={cate?.id} category={cate}></CategoryCard>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;