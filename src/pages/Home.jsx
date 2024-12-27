import LandingForm from "../components/common/LandingForm";


const Home = () => {
    return (
        <>
            {/* landing page */}
            <section className="w-full">
                <div className="w-full min-h-screen bg-emerald-600/5 inset-0 py-36 md:py-56">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
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
            </section>
        </>
    );
};

export default Home;