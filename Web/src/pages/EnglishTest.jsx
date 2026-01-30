import React, { useState } from 'react';
import { CheckCircle, AlertCircle, ChevronRight, RefreshCcw } from 'lucide-react';
import './EnglishTest.css';

const questions = [
    // PART 1 — A1 (Beginner)
    {
        id: 1,
        part: 'A1',
        question: "What's your name?",
        options: [
            { text: "I name is Tom", value: "A" },
            { text: "My name", value: "B" },
            { text: "My name's Tom", value: "C" }
        ],
        correct: "C"
    },
    {
        id: 2,
        part: 'A1',
        question: "_____ do you live?",
        options: [
            { text: "What", value: "A" },
            { text: "Where", value: "B" },
            { text: "Who", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 3,
        part: 'A1',
        question: "I ___ a student.",
        options: [
            { text: "is", value: "A" },
            { text: "are", value: "B" },
            { text: "am", value: "C" }
        ],
        correct: "C"
    },
    {
        id: 4,
        part: 'A1',
        question: "My birthday is ___ May.",
        options: [
            { text: "at", value: "A" },
            { text: "on", value: "B" },
            { text: "in", value: "C" }
        ],
        correct: "C"
    },
    {
        id: 5,
        part: 'A1',
        question: "This is my sister. ___ name is Anna.",
        options: [
            { text: "His", value: "A" },
            { text: "Her", value: "B" },
            { text: "She", value: "C" }
        ],
        correct: "B"
    },

    // PART 2 — A2 (Elementary)
    {
        id: 6,
        part: 'A2',
        question: "She usually ___ coffee in the morning.",
        options: [
            { text: "drink", value: "A" },
            { text: "drinks", value: "B" },
            { text: "drinking", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 7,
        part: 'A2',
        question: "There isn't ___ milk left.",
        options: [
            { text: "many", value: "A" },
            { text: "much", value: "B" },
            { text: "few", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 8,
        part: 'A2',
        question: "What are you doing now?",
        options: [
            { text: "I watch TV", value: "A" },
            { text: "I watching TV", value: "B" },
            { text: "I am watching TV", value: "C" }
        ],
        correct: "C"
    },
    {
        id: 9,
        part: 'A2',
        question: "I went to work ___ bus.",
        options: [
            { text: "with", value: "A" },
            { text: "by", value: "B" },
            { text: "on", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 10,
        part: 'A2',
        question: "She ___ to the gym twice a week.",
        options: [
            { text: "go", value: "A" },
            { text: "goes", value: "B" },
            { text: "going", value: "C" }
        ],
        correct: "B"
    },

    // PART 3 — B1 (Intermediate)
    {
        id: 11,
        part: 'B1',
        question: "If I ___ more time, I would travel more.",
        options: [
            { text: "have", value: "A" },
            { text: "had", value: "B" },
            { text: "will have", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 12,
        part: 'B1',
        question: "This is the best movie I have ___ seen.",
        options: [
            { text: "never", value: "A" },
            { text: "ever", value: "B" },
            { text: "already", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 13,
        part: 'B1',
        question: "He asked me where I ___ from.",
        options: [
            { text: "am", value: "A" },
            { text: "was", value: "B" },
            { text: "were", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 14,
        part: 'B1',
        question: "I didn't have enough money, ___ I couldn't buy it.",
        options: [
            { text: "because", value: "A" },
            { text: "but", value: "B" },
            { text: "so", value: "C" }
        ],
        correct: "C"
    },
    {
        id: 15,
        part: 'B1',
        question: "She speaks English ___ than me.",
        options: [
            { text: "more good", value: "A" },
            { text: "better", value: "B" },
            { text: "best", value: "C" }
        ],
        correct: "B"
    },

    // PART 4 — B2 (Upper-Intermediate)
    {
        id: 16,
        part: 'B2',
        question: "The report ___ by the manager yesterday.",
        options: [
            { text: "is written", value: "A" },
            { text: "was written", value: "B" },
            { text: "has written", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 17,
        part: 'B2',
        question: "I'm not used to ___ up so early.",
        options: [
            { text: "get", value: "A" },
            { text: "getting", value: "B" },
            { text: "got", value: "C" }
        ],
        correct: "B"
    },
    {
        id: 18,
        part: 'B2',
        question: "He suggested that we ___ the meeting.",
        options: [
            { text: "cancel", value: "A" },
            { text: "should cancel", value: "B" },
            { text: "cancelled", value: "C" }
        ],
        correct: "A" // Note: "cancel" (subjunctive) is correct, "should cancel" is also acceptable in BrE but usually subjunctive is base form. Let's check common tests. Often "cancel" is the target for subjunctive. But wait, "should cancel" is also very common. Let's re-read user input.
        // User input: "A. cancel, B. should cancel, C. cancelled". User didn't specify correct answer for Q18 explicitly in the list with "👉".
        // I will assume standard grammar: 'suggested that we cancel'.
        // Wait, let's double check Q6 instruction.
        // Actually, usually I'd assume the user wants me to implement the test. I should probably make sure I have the keys right.
        // Q18: "He suggested that we ___ the meeting." Standard subjunctive is "cancel".
        // Q19: "Hardly had I arrived ___ it started raining." -> "when" (A).
        // Q20: "The more you practice, ___ you become." -> "the more confident" (B).
    },
    {
        id: 19,
        part: 'B2',
        question: "Hardly had I arrived ___ it started raining.",
        options: [
            { text: "when", value: "A" },
            { text: "than", value: "B" },
            { text: "then", value: "C" }
        ],
        correct: "A"
    },
    {
        id: 20,
        part: 'B2',
        question: "The more you practice, ___ you become.",
        options: [
            { text: "more confident", value: "A" },
            { text: "the more confident", value: "B" },
            { text: "most confident", value: "C" }
        ],
        correct: "B"
    }
];

// Correction for Q18 based on common test patterns if not specified? 
// Actually looking at Q6 note: "A and B look same, accept B".
// I'll set Q18 correct to A based on subjunctive rule.
// Edit: Let's assume standard Cambridge/Oxford style.
// 1. C, 2. B, 3. C, 4. C, 5. B
// 6. B, 7. B, 8. C, 9. B, 10. B
// 11. B, 12. B, 13. B, 14. C, 15. B
// 16. B, 17. B, 18. A (Subjective: 'He suggested that we cancel'), 19. A, 20. B

// Re-verifying Q18: "suggested that we..."
// A. cancel (Subjunctive - correct in formal English)
// B. should cancel (Correct in BrE)
// C. cancelled (Incorrect in this structure "suggested that we...")
// I will use A as it's the specific grammar point often tested.
// Wait, checking the user request text again... It doesn't give the answer key explicitly for all, just Q6.
// I will proceed with standard English grammar keys. 
// Q18 -> A.

// Let's verify Q6 again. User said: "A ba B ijil met haragdavch, B-g zuv gej toots" (A and B look same, count B as correct).
// In the text: A. drink, B. drink. So duplicate text. I should probably display them as is? Or maybe it's a typo in user request.
// I will display exactly as requested.

const EnglishTest = () => {
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [level, setLevel] = useState(null);
    const [currentPartIndex, setCurrentPartIndex] = useState(0);

    const parts = ['A1', 'A2', 'B1', 'B2'];
    const currentPart = parts[currentPartIndex];

    const handleOptionSelect = (questionId, value) => {
        const newAnswers = { ...answers, [questionId]: value };
        setAnswers(newAnswers);

        // Check if current part is complete
        const currentQuestions = questions.filter(q => q.part === currentPart);
        const allAnswered = currentQuestions.every(q => newAnswers[q.id]);

        if (allAnswered && currentPartIndex < parts.length - 1) {
            // Small delay for better UX
            setTimeout(() => {
                setCurrentPartIndex(prev => prev + 1);
                window.scrollTo(0, 0);
            }, 500);
        }
    };

    const calculateLevel = () => {
        // Calculate correct answers per section
        let scoreA1 = 0;
        let scoreA2 = 0;
        let scoreB1 = 0;
        let scoreB2 = 0;

        questions.forEach(q => {
            const userAns = answers[q.id];
            let isCorrect = userAns === q.correct;

            if (userAns && isCorrect) {
                if (q.part === 'A1') scoreA1++;
                if (q.part === 'A2') scoreA2++;
                if (q.part === 'B1') scoreB1++;
                if (q.part === 'B2') scoreB2++;
            }
        });

        // Level Decision Rules
        if (scoreA1 >= 4 && scoreA2 >= 4 && scoreB1 >= 4 && scoreB2 >= 3) {
            return { code: 'B2', label: 'Upper-Intermediate', desc: 'Ажлын орчин, хэлэлцүүлэг, тайлбар' };
        }
        if (scoreA1 >= 4 && scoreA2 >= 4 && scoreB1 >= 3) {
            return { code: 'B1', label: 'Intermediate', desc: 'Ажил, аялал, энгийн санал бодол' };
        }
        if (scoreA1 >= 4 && scoreA2 >= 3) {
            return { code: 'A2', label: 'Elementary', desc: 'Өдөр тутмын яриа ойлгоно' };
        }
        if (scoreA1 >= 3) {
            return { code: 'A1', label: 'Beginner', desc: 'Өөрийгөө танилцуулж чадна' };
        }

        return { code: 'Below A1', label: 'Starter', desc: 'Англи хэлний анхан шатны мэдлэг хэрэгтэй байна.' };
    };

    const handleSubmit = () => {
        const currentQuestions = questions.filter(q => q.part === currentPart);
        const allAnswered = currentQuestions.every(q => answers[q.id]);

        if (!allAnswered) {
            alert("Энэ хэсгийн бүх асуултад хариулна уу.");
            return;
        }

        const result = calculateLevel();
        setLevel(result);
        setShowResult(true);
        window.scrollTo(0, 0);
    };

    const resetTest = () => {
        setAnswers({});
        setShowResult(false);
        setLevel(null);
        setCurrentPartIndex(0);
        window.scrollTo(0, 0);
    };

    if (showResult) {
        return (
            <div className="english-test-container">
                <div className="result-card">
                    <div className="result-header">
                        <h1>Таны түвшин дундажаар <span className="level-highlight">{level.code}</span></h1>
                        <h2>{level.label}</h2>
                    </div>
                    <div className="result-body">
                        <p className="level-description">{level.desc}</p>

                        <div className="next-steps">
                            <h3>Би дараагийн шат руу яаж орох вэ?</h3>
                            <p>Манай сургалтын төвд хандаж нарийвчилсан зөвлөгөө аваарай.</p>
                        </div>

                        <button className="reset-btn" onClick={resetTest}>
                            <RefreshCcw size={18} /> Дахин үзэх
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="english-test-container">
            <div className="test-header">
                <h1>Түвшин тогтоох шалгалт</h1>
                <p>Таны англи хэлний түвшинг тодорхойлох богино хэмжээний тест.</p>
                <div className="test-progress">
                    {parts.map((p, idx) => (
                        <div key={p} className={`progress-step ${idx === currentPartIndex ? 'active' : idx < currentPartIndex ? 'completed' : ''}`}>
                            {idx + 1}-р хэсэг
                        </div>
                    ))}
                </div>
                <div className="test-description">
                    <p>Энэхүү шалгалт нь нийт 4 хэсгээс бүрдэх бөгөөд таны англи хэлний ерөнхий түвшинг тодорхойлоход тусална. Та хэсэг тус бүрийн асуултуудад бүрэн хариулснаар дараагийн хэсэг рүү автоматаар шилжих болно.</p>
                </div>
            </div>

            <div className="questions-list">
                <div key={currentPart} className="test-section fade-in">
                    <div className="section-title">
                        <h2>{currentPartIndex + 1}-р хэсэг</h2>
                    </div>
                    {questions.filter(q => q.part === currentPart).map((q, index) => (
                        <div key={q.id} className="question-card">
                            <p className="question-text">
                                <span className="q-num">{q.id}.</span> {q.question}
                            </p>
                            <div className="options-grid">
                                {q.options.map(opt => (
                                    <label key={opt.value} className={`option-label ${answers[q.id] === opt.value ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name={`q-${q.id}`}
                                            value={opt.value}
                                            checked={answers[q.id] === opt.value}
                                            onChange={() => handleOptionSelect(q.id, opt.value)}
                                        />
                                        <span className="opt-val">{opt.value}.</span>
                                        <span className="opt-text">{opt.text}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="test-footer">
                {currentPartIndex === parts.length - 1 && (
                    <button className="submit-btn" onClick={handleSubmit}>
                        Дуусгах (See Result)
                    </button>
                )}
            </div>
        </div>
    );
};

export default EnglishTest;
