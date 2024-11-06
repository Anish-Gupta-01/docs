import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaCircleDown } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
    const colorClass = {
        blue: "bg-blue-600",
        green: "bg-green-600",
        red: "bg-red-600",
        yellow: "bg-yellow-500",
        pink: "bg-pink-600",
    };
  return (
    <motion.div 
        drag dragConstraints={reference} 
        whileDrag={{scale: 1.2}} dragElastic={0.2} 
        dragTransition={{bounceStiffness: 100, bounceDamping: 10}} 
        className='relative flex-shrink-0 w-56 h-64 bg-zinc-900/90 rounded-[40px] text-white py-10 px-8 leading-none overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-2'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoCloseSharp /> : <FaCircleDown color='#fff'/>}
                </span>     
            </div>
            {data.tag.isOpen && (
            <div className={`tag w-full py-3 ${colorClass[data.tag.tagColor] || "bg-gray-600"} 
                flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTittle}</h3>
            </div>
            )}
            
        </div>
    </motion.div>
    
  )
}

export default Card