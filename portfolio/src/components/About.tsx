import { ABOUT_TEXT } from "../constants"
// import abooutImg from "../assets/aboutGif.gif"
import {  motion } from 'framer-motion';

const container = (x: number,delay: number) => ({
  hidden: { x: x,opacity: 0 },
  visible: { x: 0,
    opacity: 1, 
    transition: { duration: 0.5, delay: delay } 
  },
});

function About(): JSX.Element {
  return (
    <>
        <div className="border-b border-neutral-900 pb-4">
          <h1 className="text-4xl my-20 text-center">About 
            <span className="text-neutral-500"> Me</span>
          </h1>

          <div className="flex flex-wrap">
            <motion.div 
              variants={container(-100,0.8)}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                {/* <img width={400} height={400} className="rounded-lg mt-10" src={abooutImg} alt="" /> */}
              </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                variants={container(100,0.8)}
                initial="hidden"
                whileInView={"visible"}
                transition={{ duration: 0.5 }}
                className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl text-lg py-6">{ABOUT_TEXT}</p>
              </motion.div>
            </div>
          </div>


        </div>
    </>
  )
}

export default About