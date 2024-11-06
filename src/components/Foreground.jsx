import React, {useRef} from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Hey! You Let's Start.",
            fileSize: ".9 mb",
            close: "true",
            tag: {isOpen: true, tagTittle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Hey! You Let's Play with me!",
            fileSize: ".4 mb",
            close: "true",
            tag: {isOpen: true, tagTittle: "Download Now", tagColor: "blue"}
        },
        {
            desc: "Are You Bored ?",
            fileSize: "2 mb",
            close: "true",
            tag: {isOpen: true, tagTittle: "upload Now", tagColor: "pink"}
        },
        {
            desc: "It's fun.",
            fileSize: ".3 mb",
            close: "true",
            tag: {isOpen: true, tagTittle: "upload Now", tagColor: "red"}
        },
        {
            desc: "Kick Me.",
            fileSize: "1 mb",
            close: "true",
            tag: {isOpen: true, tagTittle: "upload Now", tagColor: "yellow"}
        },
    ]
  return (
    <div ref={ref} className="fixed flex gap-10 p-10 w-full h-screen top-0 left-0 z-[3]">
        {data.map((item, index) => (
            <Card key={index} data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground