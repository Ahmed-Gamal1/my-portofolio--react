import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>  </h2>
            <div className="flex justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-xl"
                >
                    <div className="flex justify-center">
                        <p className="my-2 py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About