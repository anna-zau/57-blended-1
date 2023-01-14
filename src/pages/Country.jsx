import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState(null)
  const { countryId } = useParams()
  console.log(countryId);

  useEffect(() => {
    // null, undefines, false, 0, '', NaN
    fetchCountry(countryId).then(data => setCountryInfo(data))
  }, [countryId])
  
  if (!countryInfo) {
    return
  }
  
  return (
    <Section>
      <Container>
        <CountryInfo countryInfo={countryInfo} />
      </Container>
    </Section>
  );
};
