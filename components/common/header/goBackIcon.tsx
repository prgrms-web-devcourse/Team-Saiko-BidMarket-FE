import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const GoBackIcon = () => {
  const router = useRouter();

  return <ChevronLeftIcon boxSize="8" onClick={() => router.back()} />;
};

export default GoBackIcon;
