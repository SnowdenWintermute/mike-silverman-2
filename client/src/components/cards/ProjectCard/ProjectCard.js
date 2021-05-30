import React, { useState } from 'react'
import "../../../css/sassOutput/projectCard.css"
import CornerBrackets from '../../CornerBrackets/CornerBrackets'
import OffsetZoomer from '../../OffsetZoomer/OffsetZoomer'

const ProjectCard = ({ title, image, description, link }) => {
  const [hovering, setHovering] = useState(false)
  const [mouseDown, setMouseDown] = useState(false)
  const [offset, setOffset] = useState({})
  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY
    if (e.target.className === "zoomable-image")
      setOffset({ x, y })
  }
  const handleMouseEnter = () => {
    setHovering(true)
  }
  const handleMouseLeave = () => {
    setHovering(false)
    setMouseDown(false)
  }
  const handleMouseDown = () => {
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    setMouseDown(false)
  }

  return (
    <div className="project-card" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <CornerBrackets
        color="#2d6a2d"
        blinkColor="#bcd2e8"
        length={40}
        thickness={2}
        maxSizeOffset={-10}
        hovering={hovering}
        mouseDown={mouseDown}
      />
      <div className="project-card-title">
        <a href={link}>
          {title}
        </a>
      </div>
      <div className="project-card-image-holder">
        <OffsetZoomer image={image} alt={title} hovering={hovering} offset={offset} />
      </div>
      <div className="project-card-description">{description}</div>
    </div>
  )
}

export default ProjectCard
