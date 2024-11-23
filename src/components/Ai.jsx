import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { gsap } from "gsap";
import './ai.css';

const apiKey = "AIzaSyAFuhnxfauZ-9pNiGJKUrv1u2zbVnDeeaA";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// AI call function
async function run(prompt, setResponse, setLoading) {
    try {
        setLoading(true);
        const chatSession = model.startChat({ generationConfig, history: [] });
        const result = await chatSession.sendMessage(prompt);
        setResponse(result.response.text());
    } catch (error) {
        console.error("Error during AI generation:", error);
        setResponse("An error occurred while generating a response.");
    } finally {
        setLoading(false);
    }
}

// Function to format the AI response text
const renderFormattedResponse = (text) => {
    if (!text) return "No response yet.";

    const lines = text.split("\n").map((line, index) => {
        const trimmedLine = line.trim().replace(/\*\*/g, " ");

        // Bullet points for lines starting with *
        if (trimmedLine.startsWith("*")) {
            return (
                <li key={index} style={{ fontSize: '20px', textAlign: 'left', marginBottom: "10px" }}>
                    {trimmedLine.slice(1).trim()}
                </li>
            );
        }

        // Plain text for other lines
        return (
            <p key={index} style={{ fontSize: "30px", fontWeight: "500", textDecoration: 'underline', marginBottom: "10px", lineHeight: "1.6" }}>
                {trimmedLine}
            </p>
        );
    });

    return <div>{lines}</div>;
};

// AI Component
function Ai({ search, name }) {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const aiiRef = useRef(null);
    const [isTriggered, setIsTriggered] = useState(false);

    useEffect(() => {
        const triggerAnimation = () => {
            const aiiTop = aiiRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (aiiTop <= windowHeight && !isTriggered) {
                setIsTriggered(true);
            }
        };

        const runOnScroll = () => {
            if (!isTriggered) {
                triggerAnimation();
            }
        };

        window.addEventListener("scroll", runOnScroll);
        return () => {
            window.removeEventListener("scroll", runOnScroll);
        };
    }, [isTriggered]);

    useEffect(() => {
        if (isTriggered && search?.trim()) {
            run(search, setResponse, setLoading);
        }
    }, [isTriggered, search]);

    useEffect(() => {
        if (aiiRef.current) {
            gsap.fromTo(
                aiiRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1 }
            );
        }
    }, []);

    return (
        <div className="aii" ref={aiiRef}>
            <div className="gemini">
                <img src="/Google.webp" alt="Gemini" />
                <p>
                    Powered By GEMINI ai...</p>
            </div>
            <div className="ai-container">
                <p>Real-World Application of {name}</p>
                <div className="ai-box">
                    {
                        loading ? (
                            <div className="loaderr">

                                <div className="hrline" />
                                <div className="hrline" />
                                <div className="hrline" />
                                <div className="hrline" />
                            </div>)
                            : (
                                renderFormattedResponse(response)

                            )
                    }


                </div>
            </div>
        </div>
    );
}

export default Ai;
