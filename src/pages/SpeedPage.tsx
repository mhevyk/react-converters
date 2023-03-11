import ConverterPage from './ConverterPage';
import speedApiData from '../api/speed.json';

function SpeedPage() {
  return (
    <ConverterPage converterName="speed" converterApiData={speedApiData} />
  );
}

export default SpeedPage;
