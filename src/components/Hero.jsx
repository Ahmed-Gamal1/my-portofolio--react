import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    >
                        Ahmed Gamal
                    </motion.h1>
                    <motion.span 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                    >
                        Front End Developer
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                    
                    <motion.a
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer inline-block"
                        href="/Public/Ahmed gamal .Cv.pdf"
                        download="Ahmed_Gamal_CV.pdf"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero