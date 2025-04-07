// 'use client';

// import { usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';

// const transition = {
//     duration: 1,
//     ease: [0.22, 1, 0.36, 1],
// };

// const Transition = ({ children }) => {
//     const pathname = usePathname();

//     return (
//         <AnimatePresence mode="wait">
//             {/* Top Panel */}
//             <motion.div
//                 key={pathname + '-top'}
//                 initial={{ y: 0 }}
//                 animate={{ y: '-100%' }}
//                 exit={{ y: 0 }}
//                 transition={transition}
//                 className="fixed top-0 left-0 right-0 h-1/2 bg-black z-50"
//             >
//             </motion.div>

//             {/* Bottom Panel */}
//             <motion.div
//                 key={pathname + '-bottom'}
//                 initial={{ y: 0 }}
//                 animate={{ y: '100%' }}
//                 exit={{ y: 0 }}
//                 transition={transition}
//                 className="fixed bottom-0 left-0 right-0 h-1/2 bg-gray-200 z-50"
//             > </motion.div>

//             {children}
//         </AnimatePresence>
//     );
// };

// export default Transition;


'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const transition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
};

const StairShape = ({ position = 'top' }) => {
    const isTop = position === 'top';

    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className={`absolute ${isTop ? 'bottom-0' : 'top-0'} left-0 w-full h-[60px]`}
        >
            <path
                d={
                    isTop
                        ? 'M0,100 L0,60 L20,60 L20,40 L40,40 L40,20 L60,20 L60,0 L100,0 L100,100 Z'
                        : 'M0,0 L0,40 L20,40 L20,60 L40,60 L40,80 L60,80 L60,100 L100,100 L100,0 Z'
                }
                fill={isTop ? '#000000' : '#e5e7eb'} // match the panel bg
            />
        </svg>
    );
};

const Transition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            {/* Top Panel */}
            <motion.div
                key={pathname + '-top'}
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                exit={{ y: 0 }}
                transition={transition}
                className="fixed top-0 left-0 right-0 h-1/2 bg-black z-50 overflow-hidden"
            >
                <StairShape position="top" />
            </motion.div>

            {/* Bottom Panel */}
            <motion.div
                key={pathname + '-bottom'}
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                exit={{ y: 0 }}
                transition={transition}
                className="fixed bottom-0 left-0 right-0 h-1/2 bg-gray-200 z-50 overflow-hidden"
            >
                <StairShape position="bottom" />
            </motion.div>

            {children}
        </AnimatePresence>
    );
};

export default Transition;
