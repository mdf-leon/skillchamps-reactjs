import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/pt-br';
import { Table, MonthYearDiv, Div, Button } from './styles';


import { ReactComponent as ArrowLeft } from 'assets/images/DropLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/images/DropRight.svg';

export default function Calendar(props) {
    const { isTopSpaced } = props
    // moment.locale('pt')
    const [date] = useState({ year: '2020', month: moment().month() })
    const [selectedDate] = useState(moment()
        .month(date.month).year(date.year))
    const [daysinmonth, setdaysinmonth] = useState()



    useEffect(() => {
        const firstDayOfMonth = () => {
            const firstDay = selectedDate.startOf("month").format('d')
            return firstDay;
        };
        // console.log(firstDayOfMonth());
        const blanks = [];
        for (let i = 0; i < firstDayOfMonth(); i++) {
            blanks.push(
                <td className="calendar-day empty" />
            );
        }

        const daysInMonth = [];
        for (let d = 1; d <= selectedDate.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d} className="calendar-day">
                    {d}
                </td>
            );
        }

        const totalSlots = [...blanks, ...daysInMonth];
        const rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row); // if index not equal 7 that means not go to next week
            } else {
                rows.push(cells); // when reach next week we contain all td in last week to rows 
                cells = []; // empty container 
                cells.push(row); // in current loop we still push current row to new container
            }
            if (i === totalSlots.length - 1) { // when end loop we add remain date
                rows.push(cells);
            }
        });

        const temp = rows.map((d) => {
            return <tr>{d}</tr>;
        });
        setdaysinmonth(temp)

    }, [selectedDate])

    return (
        <Div isTopSpaced={isTopSpaced || null}>
            <MonthYearDiv>
                <Button><ArrowLeft /></Button>
                <h1>junho - 2020</h1>
                <Button><ArrowRight /></Button>
            </MonthYearDiv>
            <Table>
                <thead >
                    <tr>
                        {moment.weekdaysShort().map(day => {
                            return (
                                <th>{day}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {daysinmonth}
                </tbody>
            </Table>
        </Div>


    );
}

Calendar.propTypes = {
    isTopSpaced: PropTypes.bool
};

Calendar.defaultProps = {
    isTopSpaced: false,
};