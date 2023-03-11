import ConverterPage from './ConverterPage';
import volumeApiData from '../api/volume.json';

function VolumePage() {
  return (
    <ConverterPage converterName="volume" converterApiData={volumeApiData} />
  );
}

export default VolumePage;
