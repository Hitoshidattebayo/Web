import React, { useState, useEffect } from 'react';
import SchoolTemplate from '../components/SchoolTemplate';
import { client } from '../sanity/client';
import Loading from '../components/Loading';

const CIA = () => {
    const [cmsData, setCmsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `{
                    "hero": *[_type == "ciaHero"][0] {
                        ...,
                        "videoUrl": backgroundVideo.asset->url
                    },
                    "intro": *[_type == "ciaIntro"][0] {
                        ...,
                        "videoFileUrl": videoFile.asset->url
                    },
                    "campusLife": *[_type == "ciaCampusLife"][0] {
                        title,
                        categories[]{
                            categoryName,
                            images[]
                        }
                    },
                    "dormitory": *[_type == "ciaDormitory"][0] {
                        ...,
                        roomTypes[] {
                            ...,
                            images[] {
                                ...,
                                asset->
                            }
                        }
                    },
                    "curriculum": *[_type == "ciaCurriculum"][0],
                    "faq": *[_type == "ciaFaq"][0],
                    "studentImprovement": *[_type == "ciaStudentImprovement"][0]
                }`;
                const result = await client.fetch(query);
                setCmsData(result);
            } catch (error) {
                console.error("Error fetching CIA data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    // Default Fallback Data if CMS data is missing (mimicking original CIA.jsx)
    const defaultFeatures = [
        {
            icon: 'Dumbbell',
            title: 'Semi-Spartan Систем',
            description: 'Хичээл болон чөлөөт цагийн тэнцвэрийг хадгалсан үр дүнтэй сургалтын систем'
        },
        {
            icon: 'Languages',
            title: 'English Only Дүрэм',
            description: 'Кампус дотор зөвхөн англиар ярих дүрэмтэй, англи хэлний орчин'
        },
        {
            icon: 'Building2',
            title: 'Орчин үеийн тохижилт',
            description: 'Усан бассейн, фитнесс, номын сан зэрэг орчин үеийн тохилог орчин'
        }
    ];

    const defaultFaqs = [
        {
            question: "CIA кампус хаана байрладаг вэ?",
            answer: "CIA нь Филиппиний Себү хотын төв хэсэгт, Матан олон улсын нисэх буудлаас 15-20 минутын зайд байрладаг. Ойр орчимд J-Mall, худалдааны төвүүд болон бусад үйлчилгээний газруудтай ойр."
        },
        {
            question: "Элсэлт хэзээ авах вэ?",
            answer: "CIA нь 2 долоо хоног тутамд элсэлт авдаг. Шинэ хичээлийн эхлэх өдрүүд тогтмол байдаг тул бүртгүүлэхээсээ өмнө манай зөвлөхтэй холбогдож, боломжит хуваарийг шалгахыг зөвлөж байна."
        },
        {
            question: "Semi-Spartan систем гэж юу вэ?",
            answer: "Semi-Spartan систем нь суралцагчдад хичээл болон чөлөөт цагийн тэнцвэрийг олгодог. Өдрийн цагаар эрчимтэй хичээллэхээс гадна оройн цагаар хичээлээ давтах эсвэл чөлөөт цагаа өнгөрүүлэх боломжтой, харьцангуй уян хатан дүрэмтэй."
        },
        {
            question: "Байрны нөхцөл ямар вэ?",
            answer: "Оюутны байр нь 1, 2, 3, 4 хүний өрөөний сонголттой. Өрөө бүр ариун цэврийн өрөө, ор, ширээ, сандал, шүүгээ, хөргөгч, агааржуулагчаар тоноглогдсон. Мөн нийтийн эзэмшлийн усан бассейн, фитнесс, амралтын хэсгүүдтэй."
        },
        {
            question: "Хоолны цэс ямар байдаг вэ?",
            answer: "CIA нь олон улсын оюутнуудад зориулагдсан буфет хоолтой. Солонгос, Япон, Хятад, Вьетнам болон барууны төрөл бүрийн хоолнууд өдөр бүр шинээр бэлтгэгддэг. Өдөрт 3 удаагийн үндсэн хоолтой."
        }
    ];

    const transformedData = {
        hero: cmsData?.hero || {
            title: 'CEBU INTERNATIONAL ACADEMY'
            // Missing background will be handled by SchoolTemplate or fallbacks?
            // Original CIA had hardcoded fallbacks if no video/image?
            // Actually original code checked cmsData?.hero?.backgroundImage
        },
        intro: {
            ...cmsData?.intro,
            description: cmsData?.intro?.description || "Филиппиний аялал жуулчлалын диваажин Себү хотын зүрхэнд орших Cebu International Academy (CIA) нь 2003 оноос хойш Азийн хамгийн чанартай, олон улсын түвшний англи хэлний сургуулиудын нэгээр танигдсан. \"Оюутан бүр дэлхийн хаана ч өөртөө итгэлтэй харилцах чадвартай болох ёстой\" гэсэн зорилготой CIA нь 20 гаруй жилийн турш чанартай боловсрол, туршлагатай үйлчилгээ & олон улсын орчин гэсэн зарчмаар тасралтгүй хөгжсөөр ирсэн.",
            features: cmsData?.intro?.features || defaultFeatures
        },
        campusLife: cmsData?.campusLife,
        dormitory: cmsData?.dormitory,
        curriculum: {
            courses: cmsData?.curriculum?.courses // If undefined, Curriculum uses hardcoded default
        },
        faq: {
            title: "CIA - Түгээмэл Асуултууд",
            faqs: cmsData?.faq?.faqs || defaultFaqs
        },
        // Using null for map and history to trigger internal defaults in components
        map: null,
        history: null,
        studentImprovement: cmsData?.studentImprovement
    };

    return (
        <SchoolTemplate data={transformedData} loading={false} />
    );
};

export default CIA;
