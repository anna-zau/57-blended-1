import { Section, Container, CountryInfo, Loader } from 'components';
import { useParams } from 'react-router-dom'
import {useEffect} from 'react';

export const Country = () => {
  const { countryId } = useParams()
  console.log(countryId);

  useEffect(() => {
    
  }, [])
  

  return (
    <Section>
      <Container>
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
