import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const CalendarSelector = ({ onSelectDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 is Sunday

    const monthNames = [
        "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар",
        "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
    ];

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleDateClick = (day) => {
        const date = new Date(year, month, day);
        setSelectedDate(date);
    };

    const handleConfirm = () => {
        if (selectedDate) {
            onSelectDate(selectedDate);
        }
    };

    const renderDays = () => {
        const days = [];
        // Empty slots for previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} style={{ height: '40px' }}></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isSelected = selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            const isToday = new Date().toDateString() === date.toDateString();

            days.push(
                <div
                    key={day}
                    onClick={() => handleDateClick(day)}
                    style={{
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? '#e74c3c' : isToday ? '#f0f0f0' : 'transparent',
                        color: isSelected ? 'white' : '#333',
                        fontWeight: isSelected || isToday ? 'bold' : 'normal',
                        transition: 'all 0.2s',
                        border: isToday && !isSelected ? '1px solid #e74c3c' : 'none'
                    }}
                    onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.backgroundColor = '#f9f9f9';
                    }}
                    onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.backgroundColor = isToday ? '#f0f0f0' : 'transparent';
                    }}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            margin: '0 auto',
            width: '100%'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50', fontSize: '1.5rem' }}>
                Товлох өдрөө сонгоно уу
            </h2>

            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
            }}>
                <button
                    onClick={handlePrevMonth}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ChevronLeft size={24} color="#555" />
                </button>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>
                    {monthNames[month]} {year}
                </div>
                <button
                    onClick={handleNextMonth}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ChevronRight size={24} color="#555" />
                </button>
            </div>

            {/* Days Header */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '5px',
                marginBottom: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#888',
                fontSize: '0.9rem'
            }}>
                <div>Ням</div>
                <div>Дав</div>
                <div>Мяг</div>
                <div>Лха</div>
                <div>Пүр</div>
                <div>Баа</div>
                <div>Бям</div>
            </div>

            {/* Calendar Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '5px',
                marginBottom: '2rem'
            }}>
                {renderDays()}
            </div>

            {/* Confirm Button */}
            <button
                onClick={handleConfirm}
                disabled={!selectedDate}
                style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: selectedDate ? '#e74c3c' : '#ccc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: selectedDate ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}
            >
                <Check size={20} />
                Сонгох
            </button>
        </div>
    );
};

export default CalendarSelector;
