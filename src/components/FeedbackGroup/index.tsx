import { cloneElement, ReactElement } from 'react';
import { Form, FormControlProps, FormSelectProps } from 'react-bootstrap';

interface InvalidFeedbackGroupProps {
  children: ReactElement<FormControlProps | FormSelectProps>;
  invalidMessage?: string;
}

function InvalidFeedbackGroup({ children, invalidMessage }: InvalidFeedbackGroupProps) {
  return (
    <Form.Group className="feedback-group">
      {cloneElement(children, { isInvalid: !!invalidMessage })}
      {invalidMessage && (
        <Form.Control.Feedback type="invalid">
          {invalidMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default InvalidFeedbackGroup;
