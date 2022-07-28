import { Box } from '@chakra-ui/react';
import Script from 'next/script';

const GoogleLoginButton = () => {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <Box id="g_id_onload" data-ux_mode="redirect" />
      <Box
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="filled_blue"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      />
    </>
  );
};

export default GoogleLoginButton;
