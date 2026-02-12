
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env manually
const envPath = path.resolve(__dirname, '../Web/.env');
let token = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/VITE_SANITY_TOKEN=(.+)/);
    if (match && match[1]) {
        token = match[1].trim();
    } else {
        console.error('VITE_SANITY_TOKEN not found in .env');
        process.exit(1);
    }
} catch (err) {
    console.error('Error reading .env file:', err.message);
    process.exit(1);
}

const client = createClient({
    projectId: '83x9r4rp', // From sanity.config.ts
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: token, // Used parsed token
    useCdn: false,
})

// Helper to generate random keys
const randomKey = () => Math.random().toString(36).substring(2, 10);

const data = {
    ciaHero: {
        _id: 'ciaHero',
        _type: 'ciaHero',
        title: 'CEBU INTERNATIONAL ACADEMY',
        subtitle: ''
    },
    ciaIntro: {
        _id: 'ciaIntro',
        _type: 'ciaIntro',
        description: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: randomKey(), _type: 'span', text: 'Филиппиний аялал жуулчлалын диваажин Себү хотын зүрхэнд орших Cebu International Academy (CIA) нь 2003 оноос хойш Азийн хамгийн чанартай, олон улсын түвшний англи хэлний сургуулиудын нэгээр танигдсан.' }]
            },
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: randomKey(), _type: 'span', text: '"Оюутан бүр дэлхийн хаана ч өөртөө итгэлтэй харилцах чадвартай болох ёстой" гэсэн зорилготой CIA нь 20 гаруй жилийн турш чанартай боловсрол, туршлагатай үйлчилгээ & олон улсын орчин гэсэн зарчмаар тасралтгүй хөгжсөөр ирсэн.' }]
            }
        ],
        features: [
            {
                _key: 'f1',
                title: 'Semi-Spartan Систем',
                description: 'Хичээл болон чөлөөт цагийн тэнцвэрийг хадгалсан үр дүнтэй сургалтын систем',
                icon: 'Dumbbell' // Using string representation for now
            },
            {
                _key: 'f2',
                title: 'English Only Дүрэм',
                description: 'Кампус дотор зөвхөн англиар ярих дүрэмтэй, англи хэлний орчин',
                icon: 'Languages'
            },
            {
                _key: 'f3',
                title: 'Орчин үеийн тохижилт',
                description: 'Усан бассейн, фитнесс, номын сан зэрэг орчин үеийн тохилог орчин',
                icon: 'Building2'
            }
        ]
    },
    ciaCampusLife: {
        _id: 'ciaCampusLife',
        _type: 'ciaCampusLife',
        title: 'CAMPUS LIFE',
        // Skipping image uploads in this quick script to avoid complexity. 
        // User can upload images in Studio or we rely on existing logic for now.
        gallery: []
    },
    ciaDormitory: {
        _id: 'ciaDormitory',
        _type: 'ciaDormitory',
        title: 'ДОТУУР БАЙР',
        roomTypes: [
            { _key: 'r1', name: '1 хүний өрөө', description: 'Хувийн орон зайг эрхэмлэдэг хүмүүст', features: ['Ор', 'Ширээ', 'Шүүгээ'] },
            { _key: 'r2', name: '2 хүний өрөө', description: 'Найзтайгаа хамт байхад тохиромжтой', features: ['2 Ор', '2 Ширээ', '2 Шүүгээ'] },
            { _key: 'r3', name: '3 хүний өрөө', description: 'Зардал хэмнэх боломжтой', features: ['3 Ор', '3 Ширээ', '3 Шүүгээ'] },
            { _key: 'r4', name: '4 хүний өрөө', description: 'Олон улсын найз нөхөдтэй болох боломж', features: ['4 Ор', '4 Ширээ', '4 Шүүгээ'] }
        ],
        amenities: [
            { _key: 'a1', title: 'Ор дэвсгэр', icon: 'Bed' },
            { _key: 'a2', title: 'Угаагуур', icon: 'Archive' },
            { _key: 'a3', title: 'Wi-Fi', icon: 'Wifi' },
            { _key: 'a4', title: 'Түлхүүртэй хувцасны шүүгээ', icon: 'Key' },
            { _key: 'a5', title: 'Аюулгүй байдлын сейф', icon: 'Lock' },
            { _key: 'a6', title: 'Агааржуулагч', icon: 'Wind' },
            { _key: 'a7', title: 'Ширээ', icon: 'FileText' },
            { _key: 'a8', title: 'Халуун усны шүршүүр', icon: 'ShowerHead' },
            { _key: 'a9', title: 'Хөргөгч', icon: 'Snowflake' },
            { _key: 'a10', title: 'Ариун цэврийн өрөө (WC)', icon: 'Archive' }
        ]
    },
    ciaCurriculum: {
        _id: 'ciaCurriculum',
        _type: 'ciaCurriculum',
        title: 'СУРГАЛТЫН ХӨТӨЛБӨР',
        courses: [
            {
                _key: 'c1',
                title: 'REGULAR ESL',
                description: 'Ерөнхий англи хэл – суурь, жигд ахиц.',
                features: ['Анхан–дунд шат', 'Ярихаас айдаг', 'Тайван орчин'],
                // Modal content skipped for simplicity, can be added as blocks if needed
                modalContent: []
            },
            {
                _key: 'c2',
                title: 'IELTS / TOEIC',
                description: 'Шалгалтанд зориулсан тусгай бэлтгэл.',
                features: ['Зорилготой', 'Суурьтай'],
                modalContent: []
            },
            {
                _key: 'c3',
                title: 'BUSINESS ENGLISH',
                description: 'Ажил, бизнесийн англи хэл.',
                features: ['Ажил хэрэгч', 'Харилцаа', 'Карьер'],
                modalContent: []
            },
            {
                _key: 'c4',
                title: 'WORKING HOLIDAY',
                description: 'Австрали, Канадын виз болон ажилд бэлтгэх хөтөлбөр.',
                features: ['Виз & Ажил', 'Эзэмших чадварууд'],
                modalContent: []
            },
            {
                _key: 'c5',
                title: 'FAMILY & JUNIOR',
                description: 'Гэр бүл, хүүхэд залуусд зориулсан зун/өвлийн кэмп.',
                features: ['Зорилго'],
                modalContent: []
            }
        ]
    },
    ciaFaq: {
        _id: 'ciaFaq',
        _type: 'ciaFaq',
        title: 'CIA - Түгээмэл Асуултууд',
        faqs: [
            {
                _key: 'q1',
                question: "CIA кампус хаана байрладаг вэ?",
                answer: "CIA нь Филиппиний Себү хотын төв хэсэгт, Матан олон улсын нисэх буудлаас 15-20 минутын зайд байрладаг. Ойр орчимд J-Mall, худалдааны төвүүд болон бусад үйлчилгээний газруудтай ойр."
            },
            {
                _key: 'q2',
                question: "Элсэлт хэзээ авах вэ?",
                answer: "CIA нь 2 долоо хоног тутамд элсэлт авдаг. Шинэ хичээлийн эхлэх өдрүүд тогтмол байдаг тул бүртгүүлэхээсээ өмнө манай зөвлөхтэй холбогдож, боломжит хуваарийг шалгахыг зөвлөж байна."
            },
            {
                _key: 'q3',
                question: "Semi-Spartan систем гэж юу вэ?",
                answer: "Semi-Spartan систем нь суралцагчдад хичээл болон чөлөөт цагийн тэнцвэрийг олгодог. Өдрийн цагаар эрчимтэй хичээллэхээс гадна оройн цагаар хичээлээ давтах эсвэл чөлөөт цагаа өнгөрүүлэх боломжтой, харьцангуй уян хатан дүрэмтэй."
            },
            {
                _key: 'q4',
                question: "Байрны нөхцөл ямар вэ?",
                answer: "Оюутны байр нь 1, 2, 3, 4 хүний өрөөний сонголттой. Өрөө бүр ариун цэврийн өрөө, ор, ширээ, сандал, шүүгээ, хөргөгч, агааржуулагчаар тоноглогдсон. Мөн нийтийн эзэмшлийн усан бассейн, фитнесс, амралтын хэсгүүдтэй."
            },
            {
                _key: 'q5',
                question: "Хоолны цэс ямар байдаг вэ?",
                answer: "CIA нь олон улсын оюутнуудад зориулагдсан буфет хоолтой. Солонгос, Япон, Хятад, Вьетнам болон барууны төрөл бүрийн хоолнууд өдөр бүр шинээр бэлтгэгддэг. Өдөрт 3 удаагийн үндсэн хоолтой."
            }
        ]
    },
    ciaStudentImprovement: {
        _id: 'ciaStudentImprovement',
        _type: 'ciaStudentImprovement',
        title: 'СУРАГЧДЫН АХИЦ ДЭВШИЛ',
        description: [
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: randomKey(), _type: 'span', text: 'Манай оюутнууд эрчимжүүлсэн сургалтын хөтөлбөр, чадварлаг багш нарын ачаар оноогоо тогтмол, гайхалтайгаар ахиулж чаддаг.' }]
            },
            {
                _key: randomKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: randomKey(), _type: 'span', text: 'IELTS, TOEIC гээд бүх төрлийн шалгалтанд бид оюутан бүрийн ахиц дэвшлийг нарийн хянаж, зорьсон оноондоо хүрэхэд нь тусалдаг.' }]
            }
        ],
        images: []
    }
}

async function populate() {
    try {
        console.log('Starting population...')
        const transaction = client.transaction()

        Object.values(data).forEach(doc => {
            transaction.createOrReplace(doc)
        })

        const result = await transaction.commit()
        console.log('Migration successful!', result)
    } catch (error) {
        console.error('Migration failed:', error.message)
    }
}

populate()
