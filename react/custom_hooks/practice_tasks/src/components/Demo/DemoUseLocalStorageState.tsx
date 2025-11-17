import useLocalStorageState from '../../hooks/useLocalStorageState'

const DemoUseLocalStorageState = () => {
  const [name, setName] = useLocalStorageState('name', '')

  return (
    <div>
      <h2>useLocalStorageState demo</h2>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Stored: {name}</p>
    </div>
  )
}

export default DemoUseLocalStorageState