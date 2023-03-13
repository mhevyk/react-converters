import { useEffect } from 'react';
import Section from '../components/Section';
import ConverterForm from '../components/ConverterForm';
import ConvertingResult from '../components/ConvertingResult';
import { useConvertingResult } from '../context/ConvertingResultContext';
import { ConverterResponse } from '../types/measurement-unit';

interface ConverterPageProps {
  converterName: string;
  converterApiData: ConverterResponse;
}

function ConverterPage({
  converterName,
  converterApiData,
}: ConverterPageProps) {
  const { result, setResult } = useConvertingResult();

  //clear result, when user opens another converter
  useEffect(() => {
    setResult(null);
  }, [setResult]);

  return (
    <Section name={`${converterName} converter`}>
      <ConverterForm converterData={converterApiData} />
      {result && <ConvertingResult result={result} />}
    </Section>
  );
}

export default ConverterPage;
