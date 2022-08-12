import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const GoBackIcon = () => {
  const router = useRouter();

  const switchRouter = () => {
    const pathName = router.pathname;
    if (pathName === '/products') {
      router.push('/');
    } else {
      router.back();
    }
  };

  return (
    <ChevronLeftIcon
      _hover={{ cursor: 'pointer' }}
      boxSize="8"
      onClick={() => switchRouter()}
    />
  );
};

export default GoBackIcon;
