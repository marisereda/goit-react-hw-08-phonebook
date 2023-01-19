// import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { LoaderSmall } from 'components/LoaderSmall';
import { theme } from 'constants/theme';

const SuspenedPage = () => {
  return (
    <Section
      title=""
      bgColor={theme.colors.bgLight}
      backgroundImage='url("../images/background2.png")'
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <LoaderSmall />
    </Section>
  );
};

export default SuspenedPage;
