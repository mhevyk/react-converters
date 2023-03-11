import ConverterPage from './ConverterPage';
import timeApiData from '../api/time.json';

function TimePage() {
  return <ConverterPage converterName="time" converterApiData={timeApiData} />;
}

export default TimePage;
