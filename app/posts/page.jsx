'use client';

import { motion } from "framer-motion";
import Transition from '../../lib/Transition';

export default function PostsPage() {
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const posts = [
        {
            title: "How I Built a Photography Portfolio with Next.js",
            date: "March 10, 2024",
            description:
                "From dynamic routes to optimized images, here's how I built a fast, visually striking site to showcase my photography work.",
        },
        {
            title: "Teaching Code at La Capsule: What I Learned",
            date: "February 27, 2024",
            description:
                "Mentoring fullstack students daily has taught me more about JavaScript, people, and teaching than I ever expected.",
        },
        {
            title: "React Transitions That Actually Feel Good",
            date: "January 18, 2024",
            description:
                "Exploring smooth page transitions, shared layouts, and UX-focused animation strategies in React and Framer Motion.",
        },
        {
            title: "Capturing Marseille Through My Lens",
            date: "December 05, 2023",
            description:
                "A personal photo series of Marseille. Walking the streets with nothing but a lens and time to kill.",
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
                    <h1 className="text-4xl font-[frelon-demo] sm:text-5xl font-bold tracking-tight">Posts</h1>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Writings about code, creativity, and photography.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="border-l-4 border-green-500 pl-6 relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariant}
                        >
                            <div className="absolute -left-2.5 -top-1 w-4 h-4 bg-green-500 rounded-full"></div>
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <span className="text-sm text-slate-400">{post.date}</span>
                            <p className="text-slate-300 mt-2">{post.description}</p>
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
                    Want more?{" "}
                    <a href="/contact" className="text-green-400 hover:underline">
                        Let’s connect
                    </a>.
                </motion.div>
            </div>
        </main>
    );
}
