import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'


const Proyects = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative grid place-items-center'>
        <h1 className='font-bold text-accent-hover text-7xl xl:text-9xl relative z-2'>
            PORTAFOLIO
        </h1>
        <div className='absolute inset-0 z-0'
        style={{
            backgroundImage: "url(/mainparallax.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
        }}
        />
        <div className='absolute inset-0 z-3'
        style={{
            backgroundImage: "url(/build.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
        }}
        />
        
    </div>
  )
}

export default Proyects