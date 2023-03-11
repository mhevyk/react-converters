import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ConvertingResult } from '../types/converting-result';

interface ConvertingResultContextType {
  result: ConvertingResult | null;
  setResult: (value: ConvertingResult | null) => void;
}

const ConvertingResultContext = createContext<ConvertingResultContextType>({
  result: null,
  setResult: () => {},
});

interface ConvertingResultProviderProps extends PropsWithChildren {}

function ConvertingResultProvider({ children }: ConvertingResultProviderProps) {
  const [result, setResult] = useState<ConvertingResult | null>(null);
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
