import { useState } from "react"


type InputTextProps = {
    max: number
    min: number
}

const InputText = ({max, min}: InputTextProps) => {
    const [value, setValue] = useState<string>('')


    const len = value.length
    const isCorrect = len >= min && len <= max
    const error = !isCorrect ? `Значение должно быть от ${min} до  ${max } символов, сейчас ${len} символов` : ''
    return (
        <div className = "input-text">
            <h1>InputText</h1>
            <input type='text' value={value} onChange={e => setValue(e.target.value)} />
            {!isCorrect && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default InputText