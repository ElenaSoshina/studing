import { useState } from "react"
type SliderProps = {
    images: string[]
    visible: number
}

const Slider = ({images, visible}: SliderProps) => {

    if (!images || images.length === 0) throw new Error('Картирки не найдены')
    
    const safeVisible = Math.max(1, Math.min(visible, images.length))
    const [index, setIndex] = useState<number>(0)

    const nextIndex = () => setIndex(i => (i + 1) % images.length)
    const prevIndex = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1))

    const visibleImages =  Array.from({ length: safeVisible}, (_, i) => {
        const imgIndex = (index + i) % images.length
        return images[imgIndex]
    })

    return (
        <div>
            <h1>Слайдер</h1>
            <div className='slider' style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <button onClick={prevIndex}>Назад</button>
                <div className='slider-images' style={{ display: 'flex', gap: 8 }}>
                    {visibleImages.map((src, index) => {
                        return <img key={`${index}-${index}-${src}`} src={src} style={{ width: 160, height: 100, objectFit: 'cover' }}/>
                    })}
                </div>
                <button onClick={nextIndex}>Вперед</button>
            </div>
        </div>
    )
}

export default Slider