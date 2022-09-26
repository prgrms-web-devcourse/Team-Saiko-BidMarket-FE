import { ChevronRightIcon, SettingsIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface UserSettingProps {
  userId: number;
}

const UserSetting = ({ userId }: UserSettingProps) => {
  return (
    <Flex flexDirection="column" width="100%" marginTop="21px" gap="19px">
      <Link href={`/user/${userId}/setting`} passHref>
        <a>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap="16px"
            cursor="pointer"
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
        </a>
      </Link>
    </Flex>
  );
};

export default UserSetting;
