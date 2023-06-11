import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px');

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          QW - Explore all in one place
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Quatum World, a place for everyone who wants to gain knoledge while
          having fun! <br /> Join us now to access the full potential of the
          platform
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
