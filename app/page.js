"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter a valid email address.");
      return;
    }
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("Successfully subscribed! Check your inbox.");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error connecting to the server. Please try again.");
    }
  };

  // 🎮 Retro Game Logic (Pong style)


  return (
    <main className="font-mono flex flex-col sm:my-24 h-screen w-full text-white">
      <section className="flex flex-col max-w-4xl mx-auto px-4 my-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hello <span className="animate-shake">✌🏻</span>, I&apos;m <span className="font-[frelon-demo]">Kesraoui Mohamed</span>
          </h1>
          <p className="text-slate-300 mt-2">Frontend developer based in France. I&apos;ve been building for the web since 2021.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Now</h2>
          <p className="text-slate-300 mt-2">
            I&apos;m building a micro SaaS, mentoring at a bootcamp in Marseille called{" "}
            <Link target="_blank" href="https://www.lacapsule.academy/" className="font-semibold hover:underline">
              La Capsule
            </Link>, and consulting to help companies create better websites and web apps.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <p className="text-slate-300 mt-2">I’m planning to launch a newsletter with curated links, dev tips, and project updates.</p>
          <p className="text-slate-300 mt-1">Subscribe to stay in the loop:</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-700 rounded-md px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <button
              onClick={handleSubscribe}
              className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
          {status && <p className="text-slate-300 mt-4">{status}</p>}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Connect</h2>
          <p className="text-slate-300 mt-2">
            Follow me on X, explore my code on GitHub, check out my{" "}
            <span className="underline cursor-pointer">Read.cv</span>, or send me an email at{" "}
            <a href="mailto:kesraouidev@gmail.com" className="underline hover:text-green-400">
              kesraouidev@gmail.com
            </a>.
          </p>
        </div>
      </section>



    </main>
  );
}
