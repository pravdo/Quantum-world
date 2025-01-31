import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBeteen';
import WidgetWrapper from 'components/WidgetWrapper';
// import FeaturedProducts from 'components/FeaturedProducts';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <>
      <WidgetWrapper>
        <FlexBetween>
          <Typography
            color={dark}
            variant="h5"
            fontWeight="500"
            className="sponsored"
          >
            Sponsored
          </Typography>
          <Typography color={medium}>Create Ad</Typography>
        </FlexBetween>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/photons.jpg"
          style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
        />
        <FlexBetween>
          <Typography color={main}>Knowledge Store</Typography>
          <Typography color={medium}>knoledgestore.com</Typography>
        </FlexBetween>
        <Typography color={medium} m="0.5rem 0">
          Test your knowledge! How much do you know about Physics or other
          topics related to science? Let's find out! Explore and find materials
          for your growth
        </Typography>
      </WidgetWrapper>
      <br />
      {/* <WidgetWrapper>
        <FeaturedProducts />
      </WidgetWrapper> */}
    </>
  );
};

export default AdvertWidget;
