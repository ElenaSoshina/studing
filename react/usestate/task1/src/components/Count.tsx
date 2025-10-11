import { useState } from "react"


const Count = () => {

    const [count, setCount] = useState<number>(0)

    return (
        <div>
        <h1>Счетчик</h1>
        <input type="text" value={count} readOnly disabled/>
        <div className='buttons'>
          <button onClick={() => setCount(count + 1)}>Увеличить</button>
          <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        </div>
      </div>
    )
}

export default Count