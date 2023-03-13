import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

interface SectionProps extends PropsWithChildren {
  name: string;
}

function Section({ name, children }: SectionProps) {
  return (
    <Container as="section" fluid="md" className="px-4">
      <h2 className="text-uppercase mb-4 border-bottom border-gray pb-2">
        {name}
      </h2>
      {children}
    </Container>
  );
}

export default Section;
