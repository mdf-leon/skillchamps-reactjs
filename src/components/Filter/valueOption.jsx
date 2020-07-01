// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectDiv } from './styles';
import { ReactComponent as DropDownSvg } from '../../assets/images/DropDown.svg';

export default function ValueOption(props) {
    const { options } = props
    const [, setValues] = useState([]);
    const filter = { options: [] }

    // const handleSelectChange = (name) => {
    //     const { value } = window.event.target;
    //     const newValues = { ...values };
    //     newValues[name] = value;
    //     setValues(newValues);
    //     if (props.changedValue)
    //       props.changedValue({ ...newValues });
    //   };

    const handleChange = (e) => {
        props.changedValue(e.target.value)
        setValues(e.target.value)
    }

    return (
        <SelectDiv>
            <select
                name={filter.name}
                id={filter.name}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option value={option.value} key={option.value}>{option.label ? option.label : option.value}</option>
                ))}
            </select>
            <DropDownSvg />
        </SelectDiv>
    );
}

ValueOption.propTypes = {
    changedValue: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
};
ValueOption.defaultProps = {
    options: [],
};