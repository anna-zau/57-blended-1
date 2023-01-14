import { Container, SearchForm, Section, Heading, Loader, CountryList } from 'components';
import { fetchByRegion } from 'service/country-service';
import { useState, useEffect } from 'react';

export const CountrySearch = () => {
  const [countryName, setCountryName] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!countryName) {
      return;
    }

    fetchByRegion(countryName).then(resp => setCountries(resp));
  }, [countryName]);

  const handleSubmit = region => {
    console.log(region);
    setCountryName(region);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
