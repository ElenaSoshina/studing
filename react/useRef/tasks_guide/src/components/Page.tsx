import { useRef } from "react";
export default function Page() {
    const inputRef = useRef<HTMLInputElement>(null)

    const focusSearch = () => {
        inputRef.current?.focus()
    }
    return (
      <>
      <h1>Page</h1>
        <nav>
          <button onClick={focusSearch}>Search</button>
        </nav>
        <input
          placeholder="Looking for something?"
          ref={inputRef}
        />
      </>
    );
  }