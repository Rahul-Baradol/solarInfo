import React, { useEffect, useState } from 'react'
import './system.css'
import { useRef } from 'react'

const System = () => {
  const main = useRef(null); // main is like a pointer | main.current = *main
  const [scaleFactor, setScaleFactor] = useState(620);

  let style = {
    transform: `scale(${scaleFactor}%)`,
  }

  useEffect(()=>{
      if (scaleFactor < 100) {
        main.current.addEventListener('wheel', (e)=>{});
      }
  }, [scaleFactor])

  useEffect(()=>{
    main.current.addEventListener('wheel', (e)=>{
        if (e.deltaY > 0) {
          setScaleFactor((current) => {
            if (current < 100) return current;
            return current - 1;
          })
        }
    })
  }, [main])

  return ( 
    <>
        <div ref={main} className={`main`} style={style}>
            <div className="sun"></div>
            <div className="mercury"></div>
            <div className="venus"></div>    
            <div className="earth"></div> 
            <div className="mars"></div> 
            <div className="jupyter"></div>
            <div className="saturn">
              <div className="ring"></div>
              <div className="top"></div>
            </div>
            <div className="uranus"></div>
            <div className="neptune"></div>
        </div>
    </>
  )
}

export default System