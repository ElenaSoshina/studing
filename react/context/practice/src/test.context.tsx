import React from 'react';

interface TestContextValue {
  counter: number;
  increment: () => void;
}

export const TestContext = React.createContext<TestContextValue | undefined>(
  undefined
);

/**
 * Хук, который представляет модель какой-то фичи
 */
export const useTest = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return { counter, increment };
};

interface TestContextProviderProps {
  children?: React.ReactNode;
}

/**
 * Дополнительный компонент для провоайдера
 */
export const TestContextProvider = ({ children }: TestContextProviderProps) => {
  const value = useTest();

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

/**
 * Хук-алиас для доступа к контексу Test
 */
export const useTestContext = () => {
  const ctx = React.useContext(TestContext);

  if (!ctx) {
    throw Error('useTestContext must be used within TestContext Provider');
  }

  return ctx;
};
