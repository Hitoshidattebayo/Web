import React, { useState, useEffect } from 'react';
import { addWeeks } from 'date-fns';
import './Calculator.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calculator = () => {
    // Pricing Constants
    const COURSE_PRICES = {
        'Regular ESL': { 1: 360, 2: 540, 3: 720, 4: 900, 5: 1125, 6: 1350, 7: 1575, 8: 1800, 12: 2700, 16: 3600, 20: 4500, 24: 5400 },
        'Power Intensive ESL': { 1: 440, 2: 660, 3: 880, 4: 1100, 5: 1375, 6: 1650, 7: 1925, 8: 2200, 12: 3300, 16: 4400, 20: 5500, 24: 6600 },
        'IELTS': { 1: 420, 2: 630, 3: 840, 4: 1050, 5: 1313, 6: 1575, 7: 1838, 8: 2100, 12: 3150, 16: 4200, 20: 5250, 24: 6300 },
        'TOEIC': { 1: 400, 2: 600, 3: 800, 4: 1000, 5: 1250, 6: 1500, 7: 1750, 8: 2000, 12: 3000, 16: 4000, 20: 5000, 24: 6000 },
        'BUSINESS': { 1: 420, 2: 630, 3: 840, 4: 1050, 5: 1313, 6: 1575, 7: 1838, 8: 2100, 12: 3150, 16: 4200, 20: 5250, 24: 6300 }
    };

    const DORM_PRICES = {
        'Twin': { 1: 440, 2: 660, 3: 880, 4: 1100, 5: 1375, 6: 1650, 7: 1925, 8: 2200 },
        'Standard Single': { 1: 700, 2: 900, 3: 1200, 4: 1500, 5: 1874, 6: 2250, 7: 2625, 8: 3000 },
        'Premium Single': { 1: 680, 2: 1020, 3: 1360, 4: 1700, 5: 2125, 6: 2550, 7: 2975, 8: 3400 }
    };

    const periodOptions = Array.from({ length: 8 }, (_, i) => i + 1);

    // Initial item state
    const createNewCourse = () => ({
        id: Date.now(),
        curriculum: '',
        period: '',
        startDate: null,
        endDate: null,
        price: 0
    });

    const createNewDorm = () => ({
        id: Date.now(),
        roomType: '',
        period: '',
        startDate: null,
        endDate: null,
        price: 0
    });

    // State
    const [courses, setCourses] = useState([createNewCourse()]);
    const [dorms, setDorms] = useState([createNewDorm()]);

    // Helpers
    const calculateEndDate = (startDate, period) => {
        if (!startDate || !period) return null;
        const weeks = parseInt(period);
        return isNaN(weeks) ? null : addWeeks(startDate, weeks);
    };

    const calculateCoursePrice = (curriculum, period) => {
        if (!curriculum || !period) return 0;
        const weeks = parseInt(period);
        return COURSE_PRICES[curriculum]?.[weeks] || 0;
    };

    const calculateDormPrice = (roomType, period) => {
        if (!roomType || !period) return 0;
        const weeks = parseInt(period);
        return DORM_PRICES[roomType]?.[weeks] || 0;
    };

    // Handlers
    const updateCourse = (id, field, value) => {
        setCourses(prev => prev.map(item => {
            if (item.id !== id) return item;

            const updated = { ...item, [field]: value };

            // Recalculate derived fields
            if (field === 'startDate' || field === 'period') {
                updated.endDate = calculateEndDate(updated.startDate, updated.period);
            }
            if (field === 'curriculum' || field === 'period') {
                updated.price = calculateCoursePrice(updated.curriculum, updated.period);
            }

            return updated;
        }));

        // Sync to Dorm (if first row)
        const index = courses.findIndex(c => c.id === id);
        if (index === 0 && dorms.length > 0) {
            if (field === 'startDate') {
                updateDorm(dorms[0].id, 'startDate', value);
            }
            if (field === 'period') {
                updateDorm(dorms[0].id, 'period', value);
            }
        }
    };

    const updateDorm = (id, field, value) => {
        setDorms(prev => prev.map(item => {
            if (item.id !== id) return item;

            const updated = { ...item, [field]: value };

            if (field === 'startDate' || field === 'period') {
                updated.endDate = calculateEndDate(updated.startDate, updated.period);
            }
            if (field === 'roomType' || field === 'period') {
                updated.price = calculateDormPrice(updated.roomType, updated.period);
            }

            return updated;
        }));
    };

    const addCourseRow = () => {
        setCourses(prev => [...prev, { ...createNewCourse(), id: Date.now() }]);
    };

    const addDormRow = () => {
        setDorms(prev => [...prev, { ...createNewDorm(), id: Date.now() }]);
    };

    const removeCourseRow = (id) => {
        setCourses(prev => prev.filter(item => item.id !== id));
    };

    const removeDormRow = (id) => {
        setDorms(prev => prev.filter(item => item.id !== id));
    };

    const grandTotal = [...courses, ...dorms].reduce((sum, item) => sum + item.price, 0);

    return (
        <section className="calculator-section">
            <div className="calculator-container">
                {/* Course Section */}
                <div className="calculator-row">
                    <div className="calculator-header">Сургалт</div>
                    <div className="calculator-body-rows">
                        {courses.map((item, index) => (
                            <div key={item.id} className="input-row">
                                <div className="form-group">
                                    <select
                                        value={item.curriculum}
                                        onChange={(e) => updateCourse(item.id, 'curriculum', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Хөтөлбөр</option>
                                        <option value="Regular ESL">Regular ESL</option>
                                        <option value="Power Intensive ESL">Power Intensive ESL</option>
                                        <option value="IELTS">IELTS</option>
                                        <option value="TOEIC">TOEIC</option>
                                        <option value="BUSINESS">BUSINESS</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        value={item.period}
                                        onChange={(e) => updateCourse(item.id, 'period', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Хугацаа</option>
                                        {periodOptions.map(week => (
                                            <option key={week} value={week}>{week} долоо хоног</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <DatePicker
                                        selected={item.startDate}
                                        onChange={(date) => updateCourse(item.id, 'startDate', date)}
                                        filterDate={(date) => date.getDay() === 0}
                                        placeholderText="Эхлэх өдөр"
                                        className="form-select"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </div>
                                <div className="form-group">
                                    <DatePicker
                                        selected={item.endDate}
                                        placeholderText="Дуусах өдөр"
                                        className="form-select"
                                        dateFormat="MM/dd/yyyy"
                                        disabled
                                    />
                                </div>
                                <div className="price-display">
                                    ${item.price}
                                </div>
                                {courses.length > 1 && (
                                    <button className="btn-remove-row" onClick={() => removeCourseRow(item.id)}>x</button>
                                )}
                            </div>
                        ))}
                        <button className="btn-add-row" onClick={addCourseRow}>+ Сургалт нэмэх</button>
                    </div>
                </div>

                {/* Dormitory Section */}
                <div className="calculator-row">
                    <div className="calculator-header">Дотуур байр</div>
                    <div className="calculator-body-rows">
                        {dorms.map((item, index) => (
                            <div key={item.id} className="input-row">
                                <div className="form-group">
                                    <select
                                        value={item.roomType}
                                        onChange={(e) => updateDorm(item.id, 'roomType', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Өрөөний төрөл</option>
                                        <option value="Standard Single">Standard 1</option>
                                        <option value="Premium Single">Premium 1</option>
                                        <option value="Twin">2 хүний өрөө</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        value={item.period}
                                        onChange={(e) => updateDorm(item.id, 'period', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Хугацаа</option>
                                        {periodOptions.map(week => (
                                            <option key={week} value={week}>{week} долоо хоног</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <DatePicker
                                        selected={item.startDate}
                                        onChange={(date) => updateDorm(item.id, 'startDate', date)}
                                        filterDate={(date) => date.getDay() === 0}
                                        placeholderText="Эхлэх өдөр"
                                        className="form-select"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </div>
                                <div className="form-group">
                                    <DatePicker
                                        selected={item.endDate}
                                        placeholderText="Дуусах өдөр"
                                        className="form-select"
                                        dateFormat="MM/dd/yyyy"
                                        disabled
                                    />
                                </div>
                                <div className="price-display">
                                    ${item.price}
                                </div>
                                {dorms.length > 1 && (
                                    <button className="btn-remove-row" onClick={() => removeDormRow(item.id)}>x</button>
                                )}
                            </div>
                        ))}
                        <button className="btn-add-row" onClick={addDormRow}>+ Дотуур байр нэмэх</button>
                    </div>
                </div>

                <div className="calculator-summary">
                    <div className="summary-total">
                        <span>Нийт дүн:</span>
                        <span className="total-amount">${grandTotal}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
