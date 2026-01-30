import React, { useState, useEffect } from 'react';
import { addWeeks } from 'date-fns';
import './Calculator.css';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2023-05-03',
    useCdn: true,
});

const Calculator = () => {
    // State for pricing data from Sanity
    const [coursePrices, setCoursePrices] = useState({});
    const [dormPrices, setDormPrices] = useState({});
    const [dormLabels, setDormLabels] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const periodOptions = Array.from({ length: 8 }, (_, i) => i + 1);

    // Fetch pricing data from Sanity
    useEffect(() => {
        const fetchPricingData = async () => {
            try {
                const data = await sanityClient.fetch(`*[_type == "calculatorConfig"][0]{
                    courses[]{
                        name,
                        priceList[]{weeks, price}
                    },
                    dormitories[]{
                        name,
                        label,
                        priceList[]{weeks, price}
                    }
                }`);

                if (data) {
                    // Transform courses data
                    const courseData = {};
                    data.courses?.forEach(course => {
                        const prices = {};
                        course.priceList?.forEach(item => {
                            prices[item.weeks] = item.price;
                        });
                        courseData[course.name] = prices;
                    });
                    setCoursePrices(courseData);

                    // Transform dormitory data
                    const dormData = {};
                    const dormLabelData = {};
                    data.dormitories?.forEach(dorm => {
                        const prices = {};
                        dorm.priceList?.forEach(item => {
                            prices[item.weeks] = item.price;
                        });
                        dormData[dorm.name] = prices;
                        dormLabelData[dorm.name] = dorm.label;
                    });
                    setDormPrices(dormData);
                    setDormLabels(dormLabelData);
                }
            } catch (error) {
                console.error('Error fetching pricing data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPricingData();
    }, []);

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
        return coursePrices[curriculum]?.[weeks] || 0;
    };

    const calculateDormPrice = (roomType, period) => {
        if (!roomType || !period) return 0;
        const weeks = parseInt(period);
        return dormPrices[roomType]?.[weeks] || 0;
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

    // Show loading state
    if (isLoading) {
        return (
            <section className="calculator-section">
                <div className="calculator-container" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>Loading calculator...</p>
                </div>
            </section>
        );
    }

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
                                        {Object.keys(coursePrices).map(courseName => (
                                            <option key={courseName} value={courseName}>{courseName}</option>
                                        ))}
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
                                    <input
                                        type="date"
                                        value={item.startDate ? item.startDate.toISOString().split('T')[0] : ''}
                                        onChange={(e) => updateCourse(item.id, 'startDate', e.target.valueAsDate)}
                                        placeholder="Эхлэх өдөр"
                                        className="form-select"
                                    />
                                    {/* Note: Native date input doesn't support 'filterDate' for Sundays only directly */}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        value={item.endDate ? item.endDate.toISOString().split('T')[0] : ''}
                                        placeholder="Дуусах өдөр"
                                        className="form-select"
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
                                        {Object.keys(dormPrices).map(dormName => (
                                            <option key={dormName} value={dormName}>
                                                {dormLabels[dormName] || dormName}
                                            </option>
                                        ))}
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
                                    <input
                                        type="date"
                                        value={item.startDate ? item.startDate.toISOString().split('T')[0] : ''}
                                        onChange={(e) => updateDorm(item.id, 'startDate', e.target.valueAsDate)}
                                        placeholder="Эхлэх өдөр"
                                        className="form-select"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        value={item.endDate ? item.endDate.toISOString().split('T')[0] : ''}
                                        placeholder="Дуусах өдөр"
                                        className="form-select"
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
