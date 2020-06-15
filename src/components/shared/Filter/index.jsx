import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Wrapper, FilterMark, SelectDiv } from './styles';

import { ReactComponent as FilterSvg } from 'assets/images/Filter.svg';
import { ReactComponent as DropDownSvg } from 'assets/images/DropDown.svg';

export default function Filter({ filters, onFilterChange }) {
  const [values, setValues] = useState({});
  useEffect(() => {
    const object = {};
    filters.forEach(({ name }) => {
      object[name] = '';
    });
    setValues({ ...object });
  }, [filters]);

  const handleSelectChange = (name) => {
    const { value } = window.event.target;
    const newValues = { ...values };
    newValues[name] = value;
    setValues({ ...newValues });
    onFilterChange({ ...newValues });
  };

  return (
    <Wrapper>
      <FilterMark>
        <FilterSvg />
        <h2>Filtros</h2>
      </FilterMark>
      {filters.map((filter) => (
        <div>
          <div>
            <label htmlFor={filter.name}>{filter.title}</label>
          </div>
          <SelectDiv>
            <select
              name={filter.name}
              id={filter.name}
              onChange={() => handleSelectChange(filter.name)}
            >
              {filter.options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <DropDownSvg />
          </SelectDiv>
        </div>
      ))}
    </Wrapper>
  );
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          label: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
