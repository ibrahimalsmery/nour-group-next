"use client"

type services = {
    title: string,
    description: string,
    image_url: string,
}

import { useEffect, useRef, useState } from "react";

function Slider(props: { services: services[] }) {
    const { services } = props;
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const delay = 4000; // 4 seconds

    useEffect(() => {
        if (services.length === 0) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, delay);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, services.length]);

    const goTo = (idx: number) => {
        setCurrent(idx);
    };
    const prev = () => {
        setCurrent((prev) => (prev - 1 + services.length) % services.length);
    };
    const next = () => {
        setCurrent((prev) => (prev + 1) % services.length);
    };

    if (services.length === 0) return null;

    const { title, description, image_url } = services[current];

    return (
        <div style={{ position: "relative", maxWidth: 'auto', margin: "2rem auto", backgroundColor: "white", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", overflow: "hidden" }}>
            <div style={{ overflow: "hidden", width: "100%", height: 320, display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f3f3" }}>
                <img src={image_url} alt={title} style={{   width:'100%',objectFit: "cover" }} />
            </div>
            <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: ".5rem", color: "var(--text-color)" }}>{title}</h3>
                <p style={{ color: "#333" }}>{description}</p>
            </div>
            {/* Controls */}
            <button onClick={prev} style={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)", background: "var(--second-color)", color: "#fff", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer" }} aria-label="التالي">&#8594;</button>
            <button onClick={next} style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)", background: "var(--second-color)", color: "#fff", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer" }} aria-label="السابق">&#8592;</button>
            {/* Dots */}
            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                {services.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            margin: "0 4px",
                            background: idx === current ? "var(--second-color)" : "#ccc",
                            border: "none",
                            cursor: "pointer"
                        }}
                        aria-label={`انتقل إلى الشريحة ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;