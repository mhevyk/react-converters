import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ConvertingResult } from '../types/converting-result';

type ConvertingResultOrNull = ConvertingResult | null;

interface ConvertingResultContextType {
  result: ConvertingResultOrNull;
  setResult: (value: ConvertingResultOrNull) => void;
}

const ConvertingResultContext = createContext<ConvertingResultContextType>({
  result: null,
  setResult: () => {},
});

interface ConvertingResultProviderProps extends PropsWithChildren {}

function ConvertingResultProvider({ children }: ConvertingResultProviderProps) {
  const [result, setResult] = useState<ConvertingResultOrNull>(null);

  const contextValue = {
    result,
    setResult,
  };

  return (
    <ConvertingResultContext.Provider value={contextValue}>
      {children}
    </ConvertingResultContext.Provider>
  );
}

export default ConvertingResultProvider;

export const useConvertingResult = () => useContext(ConvertingResultContext);
