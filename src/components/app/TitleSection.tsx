import React from 'react';

import { Route } from 'constants/routes';
import { pageTitles } from 'constants/texts';

type Props = {
  route: Route
}

const TitleSection = ({ route }: Props) => (
  <section className='title-section'>
    <h1 className='title-section--headline'>{pageTitles[route]}</h1>
  </section>
);

export default TitleSection;
