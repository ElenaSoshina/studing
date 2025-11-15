import { useCounter } from '../../hooks/useCounter'

type CounterProps = { delay: number }

export default function Counter({ delay }: CounterProps) {
  const count = useCounter(delay)
  return <h1>Seconds passed: {count}</h1>
}