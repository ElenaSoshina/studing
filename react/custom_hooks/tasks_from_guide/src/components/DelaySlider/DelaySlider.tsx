type DelaySliderProps = {
    value: number
    min?: number
    max?: number
    onChange: (v: number) => void
  }
  
  export default function DelaySlider({ value, min = 10, max = 2000, onChange }: DelaySliderProps) {
    return (
      <label>
        Tick duration: {value} ms
        <br />
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          onChange={e => onChange(Number(e.target.value))}
        />
      </label>
    )
  }