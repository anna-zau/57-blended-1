import { Container, SearchForm, Section, Heading, Loader, CountryList } from 'components';
import { fetchByRegion } from 'service/country-service';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const region = searchParams.get("query")

  useEffect(() => {
    if (!region) {
      return;
    }

    fetchByRegion(region).then(resp => setCountries(resp));
  }, [region]);

  const handleSubmit = region => {
    setSearchParams({
      query: region,
    })
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
