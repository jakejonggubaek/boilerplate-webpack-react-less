import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Reservation() {

    const [date, setDate] = useState(new Date());
    const [pickedDate, setPickedDate] = useState([]);
    const [reservationPage, setReservationPage] = useState('menu');

    const onChange = (date) => {
        setDate(date);
        const dateArray = date.toString().split(' ');
        const dateArrayForDisplay = [];
        dateArrayForDisplay.push(dateArray[3]);
        dateArrayForDisplay.push(dateArray[1]);
        dateArrayForDisplay.push(dateArray[2]);
        dateArrayForDisplay.push(dateArray[0]);
        setPickedDate(dateArrayForDisplay);
    }

    const disablePastDates = ({ activeStartDate, date, view }) => {

        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        today.toDateString();
        yesterday.toDateString();
        return yesterday >= date;
    }

    const handleClick = () => {
        const reservation = document.querySelector('.reservation');
        reservation.style.right = '-3000px';
        setReservationPage('menu');
    }


    return (
        <div className='reservation'>
            <div className='close' onClick={handleClick}>&#215;</div>
            <nav>
                <div onClick={() => { setReservationPage('menu')}}><p>DATE</p></div>
                <div onClick={() => { setReservationPage('time') }}><p>TIME</p></div>
                <div onClick={() => { setReservationPage('people') }}><p>SIZE</p></div>
                <div onClick={() => { setReservationPage('info') }}><p>INFO</p></div>
            </nav>
            { reservationPage === 'menu' || null || '' || undefined ?
            <div className='reservation-container'>
                    <Calendar onChange={onChange} value={date} tileDisabled={disablePastDates}/>
                <div className='reservation-date'></div>
            </div>
             : reservationPage === 'time' ?
                    <div className='reservation-container'>
                        <div className='reservation-sub-container'>
                            <div className='time'>
                                <p>LUNCH</p>
                                <ul>
                                    <li>12:00 PM</li>
                                    <li>1:00 PM</li>
                                    <li>2:00 PM</li>
                                </ul>
                            </div>
                            <div className='time'>
                                <p>DINNER</p>
                                <ul>
                                    <li>6:00 PM</li>
                                    <li>7:00 PM</li>
                                    <li>8:00 PM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                : reservationPage === 'people' ?
                        <div className='reservation-container'>
                            <div className='reservation-sub-container'>
                                <div className='size'>
                                    <p>PARTY SIZE</p>
                                    <ul>
                                        <li>1 - 2 people</li>
                                        <li>3 - 4 people</li>
                                        <li>5 - 6 people</li>
                                        <li>over 6 people</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    : reservationPage === 'info' ?
                            <div className='reservation-container'>
                                <form action=''>
                                    <textarea name='info' id='info' cols='50' rows='10' placeholder='Please let us know if you have additional requests.'></textarea>
                                </form>
                            </div>
                    :<></>
            }
            <div className='confirm-container'>
                <p>YOUR RESERVATION: {pickedDate[0]}/{pickedDate[1]}/{pickedDate[2]}({pickedDate[3]})</p>
                <button className='reservation-botton'>CONFIRM</button>
            </div>
        </div>
    )
}

export default Reservation;