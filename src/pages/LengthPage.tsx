import ConverterPage from './ConverterPage';
import lengthApiData from '../api/length.json';

function LengthPage() {
  return (
    <ConverterPage converterName="length" converterApiData={lengthApiData} />
  );
}

export default LengthPage;
