import { useState, useEffect } from 'react';

import { Container, CountryList, Heading, Loader, Section } from 'components';

import { getCountries } from '../service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
