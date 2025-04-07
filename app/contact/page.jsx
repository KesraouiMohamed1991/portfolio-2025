"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Transition from "../../lib/Transition";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation simple
        if (!name || !email || !message) {
            setStatus("Please fill out all fields.");
            return;
        }

        try {
            // Envoi des données via POST à l'API route
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();
            console.log(data);


            if (response.ok) {
                setStatus(data.message); // Message de succès
                // Réinitialiser le formulaire
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus(data.error || "An error occurred.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Error sending message.");
        }
    };

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ duration: 0.8 }}

            className="min-h-screen  text-white py-20 px-4">
            <div className="max-w-2xl mx-auto space-y-12">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-[frelon-demo] sm:text-5xl font-bold tracking-tight">
                        Let’s work together
                    </h1>
                    <p className="text-slate-400 max-w-md mx-auto">
                        Whether you have a question, a project idea, or just want to say hi — my inbox is open.
                    </p>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Type your message here..."
                            required
                        ></textarea>
                    </div>

                    {/* Status Message */}
                    {status && <p className="text-sm text-center text-slate-400 mt-4">{status}</p>}

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2 rounded-md font-semibold"
                    >
                        Send Message
                    </button>
                </form>

                <div className="text-center text-sm text-slate-500 pt-10">
                    Or email me directly at{" "}
                    <Link
                        href="mailto:kesraouidev@gmail.com"
                        className="text-green-400 hover:underline"
                    >
                        kesraouidev@gmail.com
                    </Link>
                </div>
            </div>
        </motion.main>
    );
}



