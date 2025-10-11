import { useState } from "react"
const Paragraph = () => {
    const [isParagraphVisible, setIsParagraphVisible] = useState<boolean>(true)
    return (
        <div>
        <h1>Параграф</h1>
        {isParagraphVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>}
        <button onClick={() => setIsParagraphVisible(value => !value)}>
          {isParagraphVisible ? 'Скрыть' : 'Показать'}
        </button>
      </div>
    )
}

export default Paragraph