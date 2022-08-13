import { EditIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

interface UserProfileEditOrReportButtonProps {
  text: 'edit' | 'report';
  onClick: () => void;
}

const UserProfileEditOrReportButton = ({
  text,
  onClick,
}: UserProfileEditOrReportButtonProps) => {
  const isMyPage = text === 'edit';
  const buttonText = isMyPage ? '프로필 수정하기' : '신고하기';
  const buttonIcon = isMyPage ? (
    <EditIcon color="brand.primary-900" />
  ) : (
    <WarningTwoIcon color="brand.primary-900" />
  );

  return (
    <Button
      leftIcon={buttonIcon}
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
        {buttonText}
      </Text>
    </Button>
  );
};

export default UserProfileEditOrReportButton;
