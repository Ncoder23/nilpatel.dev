import { motion } from "framer-motion";

const Section = ({ children, animation }) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={animation}
        transition={{ duration: 0.8 }}
        className="h-screen"
    >
        {children}
    </motion.div>
);

export default Section;
