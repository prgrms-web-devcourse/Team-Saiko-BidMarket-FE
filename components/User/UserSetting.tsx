import { ChevronRightIcon, SettingsIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface UserSettingProps {
  userId: number;
}

const UserSetting = ({ userId }: UserSettingProps) => {
  const router = useRouter();

  return (
    <Flex flexDirection="column" width="100%" marginTop="21px" gap="19px">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="16px"
        cursor="pointer"
        onClick={() => {
          router.push(`/user/${userId}/setting`);
        }}
      >
        <Flex alignItems="center" gap="10px">
          <SettingsIcon />
          <Text
            textAlign="left"
            color="brand.dark"
            fontFamily="Roboto"
            fontStyle="normal"
            fontSize="16px"
          >
            계정 설정
          </Text>
        </Flex>
        <ChevronRightIcon />
      </Flex>
    </Flex>
  );
};

export default UserSetting;
