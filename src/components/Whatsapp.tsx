'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Whatsapp = () => {
    const [greetings, setGreetings] = useState("Olá");

    useEffect(() => {
        const hour = new Date().getHours();
        setGreetings(hour > 12 ? (hour < 18 ? 'Boa tarde' : 'Boa noite') : 'Bom dia');

        console.log(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)
    }, [greetings]);

    return (
        <div className="whatsapp">
            <Link href={`https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${greetings}, vim pelo site e gostaria de saber mais.`} target="_blank">
                <AiOutlineWhatsApp size={50}></AiOutlineWhatsApp>
            </Link>
        </div>
    );
};

export default Whatsapp;