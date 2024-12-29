import PropTypes from "prop-types";

const ContactCard = ({contact}) => {

    return (
        <>
            <div className="w-full min-h-[225px] px-6 flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-emerald-600/5 shadow-sm rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src={contact?.icon} alt="icon" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <div className="w-full text-center">
                        <h3 className="font-jakarta text-lg font-semibold text-gray-800">{contact?.title}</h3>
                    </div>
                    <div className="w-full text-center mt-3">
                        <p className="font-jakarta text-[15px] font-normal text-slate-400">{contact?.description}</p>
                        <p className="font-jakarta text-[15px] font-semibold text-emerald-600 mt-5">{contact?.details}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactCard;