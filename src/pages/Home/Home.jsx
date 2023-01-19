import { Box } from 'components/Box';
import { ButtonLink } from './Home.styled';
import { Section } from 'components/Section';
import { theme } from 'constants';

const Home = () => {
  return (
    <Section
      title="Welcome!"
      bgColor={theme.colors.bgLight}
      backgroundImage='url("../images/background2.png")'
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box display="flex" gridGap={5} padding={5} as="div">
        {/* <p>Welcome to Phonebook!</p> */}
        <ButtonLink to="register">Register</ButtonLink>
        <ButtonLink to="login">Log in</ButtonLink>
      </Box>
    </Section>
  );
};

export default Home;
