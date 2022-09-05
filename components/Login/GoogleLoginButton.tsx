import { Box } from '@chakra-ui/react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const { publicRuntimeConfig } = getConfig();

const GoogleLoginButton = () => {
  const router = useRouter();
  const loginButton = useRef<HTMLDivElement>(null);

  const handleLoginButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    router.push(publicRuntimeConfig.googleLoginUrl);
  };

  useEffect(() => {
    const GOOGLE_GSI_SCRIPT_URL = 'https://accounts.google.com/gsi/client';
    const script = document.createElement('script');

    script.src = GOOGLE_GSI_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Box
        id="g_id_onload"
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
        ref={loginButton}
        onClickCapture={handleLoginButtonClick}
      />
    </>
  );
};

export default GoogleLoginButton;
