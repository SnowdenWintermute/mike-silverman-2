import React, { useRef, useEffect } from 'react'
import draw from './draw'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import createSnowInterval from './createSnowInterval'
import Snowflake from './Snowflake'
import Quadtree from './Quadtree/Quadtree'
import Rectangle from './Quadtree/Rectangle'

const Snow = () => {
  const canvasRef = useRef()
  const drawRef = useRef()
  const snowInterval = useRef()
  const { height: windowHeight, width: windowWidth } = useWindowDimensions()
  const snowflakes = useRef([])
  const qtRef = useRef(new Quadtree({ boundary: new Rectangle(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2), capacity: 4 }))

  useEffect(() => {
    for (let i = 10000; i > 0; i--)
      snowflakes.current.push(new Snowflake({ xPos: Math.random() * windowWidth, yPos: Math.random() * windowHeight }))
  }, [])

  useEffect(() => {
    qtRef.current = new Quadtree({ boundary: new Rectangle(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2), capacity: 4 })
    console.log(qtRef.current)
  }, [windowHeight, windowWidth])

  useEffect(() => {
    drawRef.current = function () {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      draw({ context, windowHeight, windowWidth, snowflakes: snowflakes.current })
    }
  })

  useEffect(() => {
    function currentDrawFunction() { drawRef.current() }
    snowInterval.current = createSnowInterval({ currentDrawFunction, windowHeight, windowWidth, snowflakes: snowflakes.current })

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
