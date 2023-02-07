import { ReactNode, ReactElement } from 'react';
import { Container } from 'react-bootstrap';

interface SectionProps {
  name: string;
  children?: ReactNode | ReactElement;
}

function Section({ name, children }: SectionProps) {
  return (
    <Container as="section">
      <h2 className="text-uppercase">{name}</h2>
      {children}
    </Container>
  );
}

export default Section;
