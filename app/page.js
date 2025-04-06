"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react"

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        console.log("Subscription successful");
        setStatus("Successfully subscribed! Check your inbox.");
      } else {
        console.log("Subscription failed");
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error connecting to the server. Please try again.");
    }
  };

  // Image filenames
  const images = Array.from({ length: 8 }, (_, index) => `/0${index + 1}.jpeg`);

  return (
    <main className="font-mono flex flex-col sm:my-32 min-h-screen w-full text-white">
      {/* Header */}

      {/* Content */}
      <section className="flex flex-col max-w-4xl mx-auto px-4 my-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hello <span className="animate-shake">✌🏻</span>, I&apos;m Kesraoui Mohamed
          </h1>
          <p className="text-slate-300 mt-2">Frontend developer based in France. I&apos;ve been building for the web since 2021.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Now</h2>
          <p className="text-slate-300 mt-2">
            I&apos;m building a micro SaaS, mentoring at a bootcamp in Marseille called{" "}
            <span className="font-semibold hover:underline">
              <Link target="_blank" href="https://www.lacapsule.academy/">
                La Capsule
              </Link>
            </span>
            , and consulting to help companies create better websites and web apps.
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

        {/* Bento Grid - Gallery of Images */}
        <div>
          <h2 className="text-lg font-semibold">Gallery</h2>
          <p className="text-slate-300 mt-2">A collection of my favorite photos from my travels and daily life.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  src={`/images/${image}`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
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

      {/* Footer */}
    </main>
  );
}
