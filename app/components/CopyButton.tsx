"use client"

import React from "react";

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (<button onClick={() => handleCopy(text)} className={`
            bg-black 
            text-white 
            rounded 
            px-2 
            hover:bg-white 
            hover:text-black 
            hover:border-2
            ${copied ? 'bg-green-300 hover:bg-green-300':''}
            `}> {copied ? "تم نسخ الرابط" : "نسخ الرابط"}</button >)
}