import { ReactNode, ReactElement } from 'react';
import { Container } from 'react-bootstrap';

interface SectionProps {
  name: string;
  children?: ReactNode | ReactElement;
}

function Section({ name, children }: SectionProps) {
  return (
    <Container as="section" fluid="md">
      <h2 className="text-uppercase mb-4 border-bottom border-gray pb-2 ps-4">
        {name}
      </h2>
      {children}
    </Container>
  );
}

export default Section;
