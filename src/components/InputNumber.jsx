import PropTypes from "prop-types";
import '../assets/styles/custom.css';
import { LuDollarSign } from "react-icons/lu";

const InputNumber = ({name, placeholder, defaultValue, setValues}) => {

    return (
        <>
            <div className="w-auto h-10 relative">
                <input type='number' name={name} placeholder={placeholder} defaultValue={defaultValue} onChange={(e) => setValues(e.target.value)} className="font-jakarta font-normal text-[14px] text-gray-800 border border-slate-200/50 w-full h-[40px] pl-12 py-2 rounded-md placeholder:text-gray-500 focus:border-emerald-600 outline-none transition-all ease-linear duration-200" />
                <div className="w-10 h-[39px] bg-slate-50 rounded-tl-md rounded-bl-md border-r border-slate-200/50 absolute top-1/2 left-[1px] transform -translate-y-1/2 flex items-center justify-center">
                    <LuDollarSign className="text-gray-800"></LuDollarSign>
                </div>
            </div>
        </>
    );
};

InputNumber.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    setValues: PropTypes.func,
};

export default InputNumber;