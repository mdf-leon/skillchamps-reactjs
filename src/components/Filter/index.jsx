import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import {
  Wrapper,
  FilterMark, // , SelectDiv
} from './styles';

import { ReactComponent as FilterSvg } from '../../assets/images/Filter.svg';
import { ReactComponent as DropDownSvg } from '../../assets/images/DropDown.svg';
import ValueBetween from './valueBetween';
import ValueOption from './valueOption';

export default function Filter(props) {
  const { style, filters, onFilterChange, className } = props;

  const [values, setValues] = useState({});

  const handleChange = (dataIndex, value) => {
    setValues({ ...values, [dataIndex]: value });
  };

  useEffect(() => {
    onFilterChange(values);
    // se fizer o que o ESLINT manda, a pagina trava
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const returnFilterBetween = (filter) => {
    const { dataIndex, filter_between, placeholder, prefix } = filter;
    switch (filter_between) {
      case 'date':
        return (
          <ValueBetween
            type={filter_between}
            prefix={prefix || undefined}
            placeholder={placeholder || '25/12/2020'}
            changedValue={(e) => handleChange(dataIndex, e)}
          />
        );
      case 'money':
        return (
          <ValueBetween
            type={filter_between}
            prefix={prefix || 'R$'}
            placeholder={placeholder || '1000,00'}
            changedValue={(e) => handleChange(dataIndex, e)}
          />
        );
      default:
        return (
          <ValueBetween
            type={filter_between}
            prefix="int"
            placeholder={placeholder || '0'}
            changedValue={(e) => handleChange(dataIndex, e)}
          />
        );
    }
  };

  return (
    <Wrapper style={style} key="fsdfgwer" className={className}>
      <FilterMark>
        <FilterSvg />
        <h2>Filtros</h2>
      </FilterMark>
      {filters.map((filter) => (
        <div
          style={{ width: filter.compWidth || undefined }}
          key={`${filter.dataIndex}-filter`}
        >
          <div>
            <label htmlFor={filter.dataIndex}>{filter.title}</label>{' '}
            <DropDownSvg />
          </div>
          {filter.filter_between ? (
            returnFilterBetween(filter)
          ) : (
            <ValueOption
              type={filter.filter_type}
              options={filter.options}
              changedValue={(e) => handleChange(filter.dataIndex, e)}
            />
          )}
        </div>
      ))}
    </Wrapper>
  );
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      dataIndex: PropTypes.string,
      title: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          label: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
};

Filter.defaultProps = {
  style: undefined,
  onFilterChange: undefined,
  className: '',
};
