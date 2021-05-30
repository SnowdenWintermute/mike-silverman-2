import React, { useState, useRef, useEffect, useCallback } from 'react'
import "../../css/sassOutput/cornerBrackets.css"
const CornerBrackets = ({ color, blinkColor, length, thickness, maxSizeOffset, hovering, mouseDown }) => {
  const [opacity, setOpacity] = useState(0)
  const [sizeOffset, setSizeOffset] = useState(0)
  const [bracketColor, setBracketColor] = useState(color)
  const opacityInterval = useRef(null)
  const resizeInterval = useRef(null)
  const minSizeOffset = useRef(-3)

  const handleMouseEnter = useCallback(() => {
    clearInterval(opacityInterval.current)
    clearInterval(resizeInterval.current)
    setBracketColor(color)
    let lastOpacity = opacity
    opacityInterval.current = setInterval(() => {
      if (lastOpacity < 100)
        setOpacity(lastOpacity += 20)
      else clearInterval(opacityInterval.current)
    }, 33)
    let lastSizeOffset = sizeOffset
    resizeInterval.current = setInterval(() => {
      if (lastSizeOffset > maxSizeOffset)
        setSizeOffset(lastSizeOffset -= 3)
      else clearInterval(resizeInterval.current)
    }, 33)
  }, [color, maxSizeOffset, opacity, sizeOffset])

  const handleMouseLeave = useCallback(() => {
    clearInterval(opacityInterval.current)
    clearInterval(resizeInterval.current)
    let lastOpacity = opacity
    opacityInterval.current = setInterval(() => {
      if (lastOpacity > minSizeOffset.current)
        setOpacity(lastOpacity -= 20)
      else clearInterval(opacityInterval.current)
    }, 33)
    let lastSizeOffset = sizeOffset
    resizeInterval.current = setInterval(() => {
      if (lastSizeOffset < minSizeOffset.current)
        setSizeOffset(lastSizeOffset += 1)
      else clearInterval(resizeInterval.current)
    }, 33)
  }, [opacity, sizeOffset])

  const handleMouseDown = useCallback(() => {
    clearInterval(opacityInterval.current)
    clearInterval(resizeInterval.current)
    let lastSizeOffset = sizeOffset
    resizeInterval.current = setInterval(() => {
      if (lastSizeOffset < minSizeOffset.current)
        setSizeOffset(lastSizeOffset += Math.min(5, Math.abs(lastSizeOffset)))
      else clearInterval(resizeInterval.current)
    }, 33)
    setOpacity(100)
    setBracketColor(blinkColor)
  }, [blinkColor, sizeOffset])

  const [lastHovering, setLastHovering] = useState(hovering)
  const [lastMouseDown, setLastMousDown] = useState(mouseDown)
  useEffect(() => {
    if (hovering !== lastHovering && hovering) handleMouseEnter()
    if (hovering !== lastHovering && !hovering) handleMouseLeave()
    if (mouseDown !== lastMouseDown && mouseDown) handleMouseDown()
    setLastHovering(hovering)
    setLastMousDown(mouseDown)
  }, [handleMouseDown, handleMouseEnter, handleMouseLeave, hovering, lastHovering, lastMouseDown, mouseDown])

  return (
    <div className="corner-bracket-box">
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: thickness, width: length - thickness, top: sizeOffset, left: sizeOffset + thickness }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: thickness, width: length - thickness, top: sizeOffset, right: sizeOffset + thickness }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: thickness, width: length - thickness, bottom: sizeOffset, left: sizeOffset + thickness }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: thickness, width: length - thickness, bottom: sizeOffset, right: sizeOffset + thickness }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: length, width: thickness, left: sizeOffset, top: sizeOffset }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: length, width: thickness, left: sizeOffset, bottom: sizeOffset }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: length, width: thickness, right: sizeOffset, top: sizeOffset }} />
      <div className={`bracket-line`} style={{ opacity: `${opacity}%`, backgroundColor: bracketColor, height: length, width: thickness, right: sizeOffset, bottom: sizeOffset }} />
    </div>
  )
}

export default CornerBrackets