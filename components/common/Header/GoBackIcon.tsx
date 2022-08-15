import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

interface GoBackIconProps {
  color?: string;
}

const GoBackIcon = ({ color = '#000000' }: GoBackIconProps) => {
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
      color={color}
      _hover={{ cursor: 'pointer' }}
      boxSize="8"
      onClick={() => switchRouter()}
    />
  );
};

export default GoBackIcon;
