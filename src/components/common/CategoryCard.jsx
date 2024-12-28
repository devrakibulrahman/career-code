import PropTypes from "prop-types";

const CategoryCard = ({category}) => {

    return (
        <>
            <div className="w-full h-[262px] px-3 py-10 border border-slate-200/80 rounded-md flex items-center justify-center cursor-pointer transition-all ease-linear duration-200 hover:shadow-md">
                <div className="w-full">
                    <div className="w-16 h-16 rounded-md bg-emerald-600/5 shadow mx-auto flex items-center justify-center">
                        <div className="w-6 h-6 overflow-hidden">
                            <img src={category?.icon} alt="icon" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full text-center mt-6">
                        <div className="w-full mb-3">
                            <h3 className="font-jakarta text-lg font-semibold">{category?.title}</h3>
                        </div>
                        <p className="font-jakarta text-[15px] text-gray-400">{category?.jobs}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryCard;