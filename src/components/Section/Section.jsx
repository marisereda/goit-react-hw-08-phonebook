import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Section = ({
  title,
  bgColor = 'white',
  children,
  backgroundImage = '',
  backgroundPosition = '',
  backgroundRepeat = '',
}) => (
  <Box
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    padding={5}
    gridGap={5}
    minWidth="sectionBox"
    bg={bgColor}
    boxShadow="primary"
    backgroundImage={backgroundImage}
    backgroundPosition={backgroundPosition}
    backgroundRepeat={backgroundRepeat}
    as="section"
  >
    <h2>{title}</h2>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
