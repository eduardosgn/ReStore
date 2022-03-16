import { motion } from "framer-motion";

export default function AnimatedPage({ children }: any) {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{duration: .3}}
            variants={ variants }
        >
            { children }
        </motion.div>
    );
};