// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { DateRangeInput } from '@opuscapita/react-dates'
import { InputsDiv, Input } from './styles';

export default function ValueBetween(props) {
    const { changedValue, style, prefix, placeholder } = props
    const [values, setValues] = useState([]);

    const handleChange = (pos, val) => {
        const tempValues = values
        tempValues[pos] = val
        changedValue(tempValues)
        setValues(tempValues)
    }

    return (
        <InputsDiv style={style}><span>{prefix}</span>
                <Input placeholder={placeholder}
                    onChange={e => {
                        handleChange(0, e.currentTarget.value)
                    }}
                />
                <span>―</span>
                    <Input placeholder={placeholder} // style={{marginLeft: 15}}
                    onChange={e => {
                        handleChange(1, e.currentTarget.value)
                    }}
                />
        </InputsDiv>
    );
}

ValueBetween.propTypes = {
    changedValue: PropTypes.func.isRequired,
    style: PropTypes.objectOf(PropTypes.string),
    prefix: PropTypes.node,
    placeholder: PropTypes.string,
};
ValueBetween.defaultProps = {
    style: undefined,
    prefix: undefined,
    placeholder: undefined,
};