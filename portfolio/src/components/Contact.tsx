import {CONTACT} from "../constants/index";
import { motion } from 'framer-motion';


function Contact(): JSX.Element {
  return (
    <>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -100}}
              transition={{ duration: 1.5 }}
              className="my-12 text-4xl text-center">
              Get In Touch
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity: 0, x: -100}}
                  transition={{ duration: 1.5 }}
                  className="my-4">{CONTACT.phoneNo}
                </motion.p>
                <motion.a 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity: 0, x: 100}}
                  transition={{ duration: 1.5 }}
                  href="mailto:asklakshsharma@gmail.com" className="border-b">{CONTACT.email}
                </motion.a>
            </div>
        </div>
    </>
  )
}

export default Contact