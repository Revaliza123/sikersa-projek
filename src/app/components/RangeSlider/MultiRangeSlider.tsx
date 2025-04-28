import React, { useCallback, useEffect, useState, useRef } from "react"
import classnames from "classnames"
import "./MultiRangeSlider.scss"
import styled from "styled-components"
const MultiRangeSlider = ({
  min,
  max,
  setMinValue,
  setMaxValue,
  minValue,
  maxValue,
  onChange,
}: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef<any>(null)
  const maxValRef = useRef<any>(null)
  const range = useRef<any>(null)

  // Convert to percentValue
  const getPercent = useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minValue)
      const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, minValue])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    maxValRef.current.value = maxValue
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxValue)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, maxValue])

  return (
    <MultiRangeContainer>
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxValue - 1)
          setMinVal(value)
          setMinValue(value)
          onChange()
          event.target.value = value.toString()
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minValue + 1)
          setMaxVal(value)
          setMaxValue(value)
          onChange()
          event.target.value = value.toString()
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        {/* <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div> */}
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div>
    </MultiRangeContainer>
  )
}

interface MultiRangeSliderProps {
  min: number
  max: number
  onChange: () => void
  setMinValue: any
  setMaxValue: any
  minValue: number
  maxValue: number
}

export default MultiRangeSlider

const MultiRangeContainer = styled.div`
  width: 100%;

  display: flex;
`
