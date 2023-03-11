import ConverterPage from './ConverterPage';
import dataApiData from '../api/data.json';

function DataPage() {
  return <ConverterPage converterName="data" converterApiData={dataApiData} />;
}

export default DataPage;
