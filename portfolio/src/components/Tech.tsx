import { RiReactjsLine } from "react-icons/ri";
import { SiFlask, SiFastapi, SiMysql, SiMongodb, SiScikitlearn, SiPython, SiPandas, SiNumpy, SiJavascript, SiTypescript, SiC, SiCplusplus } from "react-icons/si";
import matplotlibLogo from "../assets/matplotlibLogo.png"; // Add Matplotlib logo
import seabornLogo from "../assets/seabornLogo.png"; // Add Seaborn logo
import { Variants, motion } from 'framer-motion';

const iconVariants = (duration: number): Variants => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    },
  },
});


function Tech(): JSX.Element {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{ duration: 1.5 }}
          className="my-20 items-center text-4xl text-center">
          Technologies
        </motion.h1>

        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{ duration: 3 }}
          className="flex flex-wrap items-center justify-center gap-4">

          {/* C */}
          <motion.div 
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiC className="text-7xl text-blue-700" />
          </motion.div>

          {/* C++ */}
          <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-blue-600" />
          </motion.div>

          {/* Python */}
          <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPython className="text-7xl text-yellow-400" />
          </motion.div>

          {/* JavaScript */}
          <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-500" />
          </motion.div>

          {/* TypeScript */}
          <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-7xl text-blue-500" />
          </motion.div>

          {/* React */}
          <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          {/* Flask */}
          <motion.div 
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFlask className="text-7xl text-neutral-400" />
          </motion.div>

          {/* FastAPI */}
          <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFastapi className="text-7xl text-teal-400" />
          </motion.div>

          {/* MySQL */}
          <motion.div 
            variants={iconVariants(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-500" />
          </motion.div>

          {/* MongoDB */}
          <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>

          {/* Scikit-learn */}
          <motion.div 
            variants={iconVariants(7.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiScikitlearn className="text-7xl text-orange-400" />
          </motion.div>

          {/* Matplotlib */}
          <motion.div 
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={matplotlibLogo} alt="Matplotlib" className="h-20 w-20" />
          </motion.div>

          {/* Seaborn */}
          <motion.div 
            variants={iconVariants(8.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={seabornLogo} alt="Seaborn" className="h-20 w-20" />
          </motion.div>

          {/* Pandas */}
          <motion.div 
            variants={iconVariants(9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPandas className="text-7xl text-blue-400" />
          </motion.div>

          {/* NumPy */}
          <motion.div 
            variants={iconVariants(9.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNumpy className="text-7xl text-blue-300" />
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}

export default Tech;
