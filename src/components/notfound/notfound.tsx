import React, { FC } from 'react';
import './notfound.css';

interface NotfoundProps {}

const Notfound: FC<NotfoundProps> = () => (
  <div className="notfound" data-testid="Notfound">
   <h1>Error:404 Page Not Found</h1>
  </div>
);

export default Notfound;
