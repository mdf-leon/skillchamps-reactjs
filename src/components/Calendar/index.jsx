import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { formatPrice } from '../../utils';
import 'moment/locale/pt-br';
import { Table, MonthYearDiv, Div, Button, MarkedDay, Money } from './styles';
import { ReactComponent as ArrowLeft } from '../../assets/images/DropLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/DropRight.svg';

export default function Calendar(props) {
  const { isTopSpaced, moneyDays } = props;
  // moment.locale('pt')
  const [month, setmonth] = useState(moment().month());
  const [year] = useState('2020');
  const [tds, settds] = useState([]);

  useEffect(() => {
    const firstDay = Number(
      moment().month(month).year(year).startOf('month').format('d')
    );
    const tableDivs = [];
    // for (let i = 0; i < firstDay; i++) {
    //   tableDivs[i] = <td>old {i}</td>
    // }
    for (let i = 0; i < firstDay; i++) {
      //
      tableDivs[i] = (
        <td>
          <div>
            <p style={{ color: '#D8E2E7' }} key={`${i + 10}-before-this-month`}>
              {Number(
                moment().subtract(1, 'months').endOf('month').format('D')
              ) -
                firstDay +
                i +
                1}
            </p>
          </div>
        </td>
      );
    }
    for (
      let i = firstDay;
      i < moment().month(month).year(year).daysInMonth() + firstDay;
      i++
    ) {
      // tableDivs[i] = <td>dia {i - firstDay + 1}</td>
      const d = i - firstDay + 1;
      tableDivs[i] = (
        <td key={`${i + 10}-this-month`}>
          {moment().format('D') === d.toString() &&
          moment().month() === month ? (
            <div>
              <MarkedDay>{d}</MarkedDay>{' '}
              <Money>{moneyDays[d] ? formatPrice(moneyDays[d]) : null}</Money>
            </div>
          ) : (
            <div>
              <p>{d}</p>
              <Money>{moneyDays[d] ? formatPrice(moneyDays[d]) : null}</Money>
            </div>
          )}
        </td>
      );
    }

    const rows = [];
    let cells = [];
    tableDivs.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === tableDivs.length - 1) {
        // when end loop we add remain date
        rows.push(cells);
      }
    });
    let extra = 0;
    while (!Number.isInteger(rows[rows.length - 1].length / 7)) {
      // while the last line isnt filled
      extra++;
      rows[rows.length - 1].push(
        <td>
          <div>
            <p style={{ color: '#D8E2E7' }} key={`${extra}-after-this-month`}>
              {' '}
              {extra}
            </p>
          </div>
        </td>
      );
    }

    const temp = rows.map((d, i) => {
      return <tr key={`${i + 10}-rows`}>{d}</tr>;
    });

    settds(temp);
  }, [moneyDays, month, year]);

  return (
    <Div isTopSpaced={isTopSpaced || null}>
      <MonthYearDiv>
        <Button onClick={() => setmonth(month - 1)}>
          <ArrowLeft />
        </Button>
        <h1>{moment().month(month).format('MMMM')} - 2020</h1>
        <Button onClick={() => setmonth(month + 1)}>
          <ArrowRight />
        </Button>
      </MonthYearDiv>
      <Table>
        <thead>
          <tr>
            {moment.weekdaysShort().map((day) => {
              return <th key={day}>{day}</th>;
            })}
          </tr>
        </thead>
        <tbody>{tds}</tbody>
      </Table>
    </Div>
  );
}

Calendar.propTypes = {
  isTopSpaced: PropTypes.bool,
  moneyDays: PropTypes.arrayOf(PropTypes.number),
};

Calendar.defaultProps = {
  isTopSpaced: false,
  moneyDays: [],
};
