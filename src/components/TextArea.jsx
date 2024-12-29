import PropTypes from 'prop-types';

const TextArea = ({name, placeholder, setValues, row, col}) => {

    return (
        <>
            <textarea name={name} placeholder={placeholder} rows={row} cols={col} onChange={(e) => setValues(e.target.value)} className="font-jakarta font-normal text-[14px] text-gray-800 border border-slate-200/50 w-full px-3 py-2 rounded-md placeholder:text-gray-500 focus:border-emerald-600 outline-none transition-all ease-linear duration-200 resize-none"></textarea>
        </>
    );
};

TextArea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    row: PropTypes.number,
    col: PropTypes.number,
    setValues: PropTypes.func,
};

export default TextArea;