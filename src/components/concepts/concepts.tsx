import React, { FC } from 'react';
import './concepts.css';

interface ConceptsProps {}

const Concepts: FC<ConceptsProps> = () => (
  <div className="concepts" data-testid="Concepts">
    Concepts Component
  </div>
);

export default Concepts;
