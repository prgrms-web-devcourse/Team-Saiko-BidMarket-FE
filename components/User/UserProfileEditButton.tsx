import { EditIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

interface UserProfileEditButtonProps {
  onClick: () => void;
}

const UserProfileEditButton = ({ onClick }: UserProfileEditButtonProps) => {
  return (
    <Button
      leftIcon={<EditIcon color="brand.primary-900" />}
      width="100%"
      border="1.5px dashed"
      borderColor="brand.primary-900"
      backgroundColor="brand.primary-100"
      borderRadius="30px"
      onClick={onClick}
    >
      <Text
        color="brand.primary-900"
        fontFamily="Roboto"
        fontStyle="normal"
        fontWeight="400"
        fontSize="15"
      >
        프로필 수정하기
      </Text>
    </Button>
  );
};

export default UserProfileEditButton;
