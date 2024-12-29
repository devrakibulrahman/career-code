import PropTypes from "prop-types";

const Input = ({type, name, placeholder, defaultValue, setValues}) => {

    return (
        <>
            <input type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} onChange={(e) => setValues(e.target.value)} className="font-jakarta font-normal text-[14px] text-gray-800 border border-slate-200/50 w-full h-[40px] px-3 py-2 rounded-md placeholder:text-gray-500 focus:border-emerald-600 outline-none transition-all ease-linear duration-200" />
        </>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    setValues: PropTypes.func,
};

export default Input;