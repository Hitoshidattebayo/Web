import React, { useEffect } from 'react';
import SchoolTemplate from '../components/SchoolTemplate';
import cpiData from '../data/schools/cpi.json';

const CPI = () => {
    // Transform cpiData to SchoolTemplate props
    const transformedData = {
        hero: {
            title: cpiData.name,
            tagline: cpiData.tagline,
            // Placeholder background
            backgroundImage: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        },
        intro: {
            description: cpiData.overview.short,
            // Map highlights to features with icons
            features: cpiData.highlights.map(h => ({
                title: h, // Since highlights are strings, use as title
                description: "", // No description separately
                icon: "Star" // Default icon
            }))
        },
        campusLife: {
            // CPI JSON doesn't have images separately, but SchoolTemplate handles empty/string
            categories: [] // Placeholders will be used if empty
        },
        history: {
            // Parse string events: "2008 — Event..."
            events: cpiData.overview.historyTimeline.map(item => {
                const [year, ...rest] = item.split("—");
                return {
                    year: year.trim(),
                    events: [rest.join("—").trim()]
                };
            })
        },
        curriculum: {
            courses: cpiData.programs.map((p, index) => ({
                id: index,
                title: p.name,
                description: p.schedule,
                icon: "Star", // Default
                details: [] // No details in JSON
            }))
        },
        faq: {
            faqs: [
                { question: "Хаяг нь хаана вэ?", answer: cpiData.location.area },
                { question: "Хоол ямар вэ?", answer: cpiData.freeServices.find(s => s.name.includes("хоол"))?.details || "Буфет хоолтой." }
            ]
        },
        map: {
            // Map props
            // CPI doesn't have specific blocks breakdown like CIA
            // We can pass nearby info as blocks or description?
            // SchoolTemplate passes {...map} to CampusMap.
            // CampusMap expects `blocks`.
            blocks: [
                {
                    title: "Байршил & Ойр орчим",
                    items: cpiData.location.nearby
                }
            ]
        },
        freeServices: cpiData.freeServices,
        activities: cpiData.activities,
        // Add minimal dormitory/studentImprovement data to prevent errors?
        dormitory: null,
        studentImprovement: null
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SchoolTemplate data={transformedData} loading={false} />
    );
};

export default CPI;
