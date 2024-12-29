import '../assets/styles/custom.css';
import PropTypes from 'prop-types';

const InputCheck = ({setValues}) => {
    return (
        <>
            <input type="checkbox" onChange={(e) => setValues(e.target.value)} />
        </>
    );
};

InputCheck.propTypes = {
    setValues: PropTypes.func,
};

export default InputCheck;