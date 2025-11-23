import { useLayoutEffect, useRef, useState } from "react"

const items = Array.from({ length: 50}, (_, i) => i + 1)

export default function ShowElements () {
    const boxRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<HTMLLIElement[]>([])
    const [boxHeight, setBoxHeight] = useState<number>()

    useLayoutEffect(() => {
        const first = itemRefs.current[0]
        if (first) {
            const height = Math.ceil(first.getBoundingClientRect().height)
            setBoxHeight(height * 6)
        }
    }, [])

    const handleScroll = () => {
        const box = boxRef.current
        const items = itemRefs.current.filter(Boolean) as HTMLLIElement[]
        if (!box || items.length === 0) return
        const baseTop = items[0].offsetTop
        const scrollTop = box.scrollTop

        let firstVisibleIndex = 0
        for (let i = 0; i < items.length; i++) {
            const top = items[i].offsetTop - baseTop
            if (top >= scrollTop) {
                firstVisibleIndex = i
                break
            }
        }

        const target = Math.min(firstVisibleIndex + 10, items.length - 1);
         items[target].scrollIntoView({ behavior: 'smooth', block: 'start' })   
        

    }

    return (
        <>
        <h1>ShowElements</h1>
        <div>
      <button onClick={handleScroll}>Прокрутить +10</button>
      <div
        ref={boxRef}
        style={{
          height: boxHeight,            
          overflowY: 'auto',            
          scrollBehavior: 'smooth',     
          border: '1px solid #ddd',
          marginTop: 12
        }}
      >
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {items.map((n, i) => (
            <li
              key={n}                                        
              ref={(el: HTMLLIElement | null) => {
                if (el) {
                    itemRefs.current[i] = el
                }
              }}         
              style={{
                padding: '12px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center'
              }}
            > 
              Элемент {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
        </>
    )
}