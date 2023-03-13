import ConverterPage from './ConverterPage';
import areaApiData from '../api/area.json';

function Area() {
  return <ConverterPage converterName="area" converterApiData={areaApiData} />;
}

export default Area;
