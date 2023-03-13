import { ConvertingResult as ConvertingResultType } from '../../types/converting-result';
import formatConvertingResult from '../../utils/formatConvertingResult';
import ConverterUnitName from '../ConverterUnitName';
import ConvertingError from '../../errors/converting-error';
import Error from '../Error';

interface ConvertingResultProps {
  result: ConvertingResultType;
}

function ConvertingResult({ result }: ConvertingResultProps) {
  if (result instanceof ConvertingError) {
    return <Error error={result} />;
  }

  const formattedResult = formatConvertingResult(result.value);

  return (
    <div className="my-3">
      <span className="text-muted">Result is: </span>
      <span className="result__mantissa">{formattedResult.value}</span>{' '}
      {formattedResult?.exponent && (
        <span className="result__exponent">
          x 10<sup>{formattedResult?.exponent}</sup>
        </span>
      )}{' '}
      <ConverterUnitName
        names={result.names}
        className="result__unit-of-measurement"
      />
    </div>
  );
}

export default ConvertingResult;
