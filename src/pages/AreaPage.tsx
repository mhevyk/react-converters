import ConverterForm from '../components/ConverterForm';
import Section from '../components/Section';
import response from '../api/area.json';

function Area() {
  return (
    <Section name="Area converter">
      <ConverterForm converterData={response} />
    </Section>
  );
}

export default Area;
