import React, {  useRef } from 'react';
import { motion, useInView } from "framer-motion"

const Reveal = ({ children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
  return (
        <motion.div className='my_card large-shadow card-dark align-center col-md-4 my-5 mx-5 p-5'
         ref={ref} initial='hidden' animate={isInView ? "visible" : "hidden"}
        variants={
            {
                hidden: { opacity: 0, y: 75},
                visible: { opacity: 1, y: 0}
            }}
            transition={{ duration: 0.5}}
            >
                {children}
            </motion.div>

  )
}

export default Reveal