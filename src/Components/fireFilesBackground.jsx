"use client"

import React, { useEffect, useState } from 'react'
const FireFilesBackground = () => {

const createFireFly = () => ({
    id : `${Math.random()}`,
    top : `${Math.random() * 100}%`,
    left : `${Math.random() * 100}%`,
    animationDuration : `${Math.random() * 5 + 5}s`
}) 

const [fireFlies , setFireFlies] = useState([]);

    useEffect(()=>{
        const addFireFlies = () => {
            const newFireFly = createFireFly()
            setFireFlies((Currentfire) => 
                [...Currentfire.slice(-14),
                    newFireFly
                ])
        }
        const interval = setInterval(addFireFlies, 1000)
        
        return () => clearInterval(interval)
    },[])


  return (<>
    <div className='fixed top-0 left-0 h-full w-full -z-30 overflow-hidden'>
        {fireFlies.map((firefly) => (
            <div 
            key={firefly.id}
            className='absolute rounded-full w-[20px] h-[20px] bg-firefly-radial'
            style={{
                top : firefly.top,
                left : firefly.left,
                animation : `move ${firefly.animationDuration} infinite alternate`
            }}
            ></div>    
        )
    )
    }
    </div>

    </>)
}

export default FireFilesBackground