'use client';
import { motion } from "framer-motion";

export default function ExperiencePage() {
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const experiences = [
        {
            title: "Developer & Mentor – La Capsule",
            period: "Oct 2023 – Present",
            description:
                "Leading fullstack web development bootcamps, mentoring students on JavaScript, React, Node.js, MongoDB, and helping them build real-world projects.",
        },
        {
            title: "Frontend Developer – MistralTips",
            period: "2023 - 2024 ",
            description:
                "creating a mobile app (MVP) for resturants and cafes. Collaborating with a team of developers to deliver a user-friendly experience.",
        },
        {
            title: "Frontend Developer – Freelance",
            period: "2022 – Present",
            description:
                "Building modern, responsive websites for startups and personal clients. Specialized in React, Next.js, Tailwind CSS, and performance optimization.",
        },
        {
            title: "Photographer – Kesraoui Photography",
            period: "2019 – Present",
            description:
                "Street and landscape photography across Algeria and France. Published works and exhibitions in Marseille. Personal creative outlet.",
        },
    ];

    return (
        <main className="min-h-screen text-white py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-12">
                <motion.div
                    className="space-y-3 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariant}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Experience</h1>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        From teaching bootcamps to building client websites, here's a look at my journey.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="border-l-4 border-green-500 pl-6 relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariant}
                        >
                            <div className="absolute -left-2.5 -top-1 w-4 h-4 bg-green-500 rounded-full"></div>
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <span className="text-sm text-slate-400">{exp.period}</span>
                            <p className="text-slate-300 mt-2">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="pt-10 text-center text-slate-500 text-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariant}
                >
                    Curious to work with me?{" "}
                    <a href="/contact" className="text-green-400 hover:underline">
                        Let’s talk
                    </a>.
                </motion.div>
            </div>
        </main>
    );
}
