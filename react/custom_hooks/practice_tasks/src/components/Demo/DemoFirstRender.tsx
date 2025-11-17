import { useState } from 'react'
import useIsFirstRender from '../../hooks/useIsFirstRender'

const Demo = () => {
    const isFirstRender = useIsFirstRender()
    const [value, setValue] = useState('')

    return (
        <div style={{ padding: 16, border: '1px solid #ddd', marginTop: 12 }}>
            <p>isFirstRender: {isFirstRender ? 'true' : 'false'}</p>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <p>Currentvalue: {value}</p>
        </div>
    )
}

export default Demo