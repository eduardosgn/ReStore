import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function AboutPage() {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={variants}
        >
            <Typography variant="h2">
                About Page
            </Typography>
        </motion.div>
    );
};