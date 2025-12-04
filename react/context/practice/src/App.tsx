import { TestContext, TestContextProvider, useTest, useTestContext } from "./test.context";
import "./index.css";


/**
 * Компонент, который НЕ подписан на контексты
 */
const Component_WITHOUT_Context = () => {
  console.log('Component without context usage render');

  return <div>Component without context usage</div>;
};

/**
 * Компонент, который подписан на контекст
 */
const Component_WITH_Context = () => {
  const ctx = useTestContext();

  console.log('Component with context usage render');

  return <div>Component with context usage </div>;
};

/**
 * Компонент, который меняет состояние контекста
 */
const StateChanger = () => {
  const ctx = useTestContext();

  return <button onClick={ctx.increment}>{ctx.counter}</button>;
};

export default function App() {
  // const { counter, increment } = useTest();

  return (

    <>
      <Component_WITHOUT_Context />
      <TestContextProvider>
      <Component_WITH_Context />
      <StateChanger />
    </TestContextProvider>
    </>

  );
}