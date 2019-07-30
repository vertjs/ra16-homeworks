import React from 'react';
import './App.css';

function Body() {
    const amountPreviousDays = getDaysPrevMonth(firstDayThisMonth);
    const datesPreviousMonth = getDatesOtherMonth(amountPreviousDays, lastDayOfPrevMonth);
    return (
        <tbody>
            {weeks.map(week => calendarWeek(week))}
        </tbody>
    )
}
function calendarWeek(week) {
    return (
        <tr>
            {week.map(day => calendarDay(day))}
        </tr>
    )
}
function calendarDay(day) {
    return (
        <td className={day.cls}>
            {day.num}
        </td>
    )
}
function getDaysPrevMonth(firstDayThisMonth) {
    if(firstDayThisMonth === 0) return 0;
    if(firstDayThisMonth === 6) return 5;
    return firstDayThisMonth - 1;
}
function getDatesOtherMonth(daysAmount, previousMonthLastDate = false) {
    const daysAll = []
    for(let i = 0; i < daysAmount.length; i++ ) {
        let day = {cls: 'ui-datepicker-other-month'}
        if(previousMonthLastDate) {
            day.date =  previousMonthLastDate - daysAmount
            day.date++
            day.date +=i
        } else {
            day.date = i+1
        }
        daysAll.push(day)
    }
    return daysAll;
}

export default Body;