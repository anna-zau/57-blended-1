import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const { countryId } = useParams();

  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    // null, undefines, false, 0, '', NaN
    fetchCountry(countryId).then(data => setCountryInfo(data));
  }, [countryId]);

  if (!countryInfo) {
    return;
  }

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>
        <CountryInfo countryInfo={countryInfo} />
      </Container>
    </Section>
  );
};
