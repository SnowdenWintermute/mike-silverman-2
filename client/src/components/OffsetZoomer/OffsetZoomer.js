import React, { useState, useEffect, useRef } from 'react'
import '../../css/sassOutput/offsetZoomer.css'

const OffsetZoomer = ({ image, alt, hovering, offset }) => {
  const [style, setStyle] = useState({})
  const [hoveringImg, setHoveringImg] = useState()
  const imgRef = useRef()
  useEffect(() => {
    const imgHeight = imgRef.current.clientHeight
    const imgWidth = imgRef.current.clientWidth
    const newStyle = {
      transform: `scale(${hoveringImg ? "1.3" : "1"}) translateX(calc(${offset.x}px - ${imgWidth / 2}px)) translateY(calc(${offset.y}px - ${imgHeight / 2}px))`
    }
    setStyle(newStyle)
  }, [hoveringImg, offset])

  useEffect(() => {
    if (!hoveringImg)
      setStyle({
        transform: `scale(${hoveringImg ? "1.3" : "1"}) translateX(0%) translateY(0%)`
      })
  }, [hoveringImg])

  const handleMouseEnter = () => {
    setHoveringImg(true)
  }

  const handleMouseLeave = () => {
    setHoveringImg(false)
  }

  return (
    <img ref={imgRef} className="zoomable-image" src={image} alt={alt} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
  )
}

export default OffsetZoomer
