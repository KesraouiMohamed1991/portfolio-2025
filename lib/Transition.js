'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import SpiderWebCanvas from "../app/(components)/SpiderWebCanvas";
const transition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
};

const topVariants = {
    initial: { y: 0 },
    animate: { y: '-100%' },
    exit: { y: 0 },
};

const bottomVariants = {
    initial: { y: 0 },
    animate: { y: '100%' },
    exit: { y: 0 },
};

const Transition = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            {/* Page Transition Panels */}
            <AnimatePresence mode="wait">
                {/* Top Panel */}
                <motion.div
                    key={pathname + '-top'}
                    variants={topVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                    className="fixed top-0 left-0 right-0 h-1/2 bg-[#0a0a0a] text-white z-50 flex flex-col items-center justify-center overflow-hidden"
                >

                    <motion.h1
                        initial={{ scale: 1.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-9xl font-[frelon-demo]  font-bold tracking-tight"
                    >
                        Frontend developer
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 30, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl   font-[frelon-demo] md:text-3xl font-semibold tracking-widest text-start px-4"
                    >
                        Based in France 🇫🇷
                    </motion.p>

                </motion.div>

                {/* Bottom Panel */}
                <motion.div
                    key={pathname + '-bottom'}
                    variants={bottomVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                    className="fixed bottom-0 left-0 right-0 h-1/2 bg-white text-black z-50 flex items-center justify-center overflow-hidden"
                >
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 30, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl font-[frelon-demo]  md:text-3xl font-semibold tracking-widest text-center px-4"
                    >
                        Design  • Code • Build • Deploy • Iterate • Repeat

                    </motion.div>

                </motion.div>
            </AnimatePresence>

            {/* Main Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Transition;
