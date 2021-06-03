import React, { useRef, useEffect } from 'react'
import draw from './draw'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import createSnowInterval from './createSnowInterval'
import Snowflake from './Snowflake'
import Quadtree from './Quadtree/Quadtree'
import Rectangle from './Quadtree/Rectangle'
import Point from './Quadtree/Point'

const Snow = () => {
  const canvasRef = useRef()
  const drawRef = useRef()
  const snowInterval = useRef()
  const { height: windowHeight, width: windowWidth } = useWindowDimensions()
  const snowflakes = useRef([])
  const qtRef = useRef(new Quadtree(new Rectangle(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2), 4))

  useEffect(() => {
    snowflakes.current = []
    for (let i = 150; i > 0; i--)
      snowflakes.current.push(new Snowflake({ xPos: Math.random() * windowWidth, yPos: Math.random() * windowHeight }))
  }, [windowWidth, windowHeight])

  useEffect(() => {
    drawRef.current = function () {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      draw({ context, windowHeight, windowWidth, snowflakes: snowflakes.current, qtRef })
    }
  })

  useEffect(() => {
    function currentDrawFunction() { drawRef.current() }
    snowInterval.current = createSnowInterval({ currentDrawFunction, windowHeight, windowWidth, snowflakes: snowflakes.current, qtRef })

    return () => clearInterval(snowInterval.current)
  })

  return (
    <canvas
      className="snow-canvas"
      height={windowHeight - 2}
      width={windowWidth - 2}
      ref={canvasRef}
    />
  )
}

export default Snow
