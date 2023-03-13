import ConverterPage from './ConverterPage';
import weightApiData from '../api/weight.json';

function WeightPage() {
  return (
    <ConverterPage converterName="weight" converterApiData={weightApiData} />
  );
}

export default WeightPage;
