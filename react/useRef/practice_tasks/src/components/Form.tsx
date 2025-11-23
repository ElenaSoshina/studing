import { useRef } from 'react'

export default function Form() {
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const handleFocusEmail = () => {
        emailRef.current?.focus()
    }

    const handlePhoneFocus = () => {
        phoneRef.current?.focus()
    }
    return (
        <>
            <h1>Form</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input type="text" placeholder="Name" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}/>
                <input type="email" placeholder="Email" ref={emailRef} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}/>
                <input type="phone" placeholder="Phone" ref={phoneRef} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}/>
            </form>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button type="button" onClick={handleFocusEmail}>Фокус на Email</button>
                <button type="button" onClick={handlePhoneFocus}>Фокус на телефон</button>
            </div>
        </>
    )
}