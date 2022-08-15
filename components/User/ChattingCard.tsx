import { Box, Flex, Image, Text } from '@chakra-ui/react';

import distanceTimeFormat from 'utils/format/distanceTimeFormat';

interface ChattingProps {
  username: string;
  profileImage: string;
  previewChat: string;
  productImage: string;
  createdAt: Date | null;
  onClick: () => void;
}

const ChattingCard = ({
  username,
  profileImage,
  previewChat,
  productImage,
  createdAt,
  onClick,
}: ChattingProps) => {
  return (
    <Box cursor="pointer" width="100%" onClick={onClick}>
      <Flex width="100%" padding="15px 0">
        <Image
          src={profileImage}
          alt="profile-image"
          w="44px"
          h="44px"
          borderRadius="50%"
        />
        <Flex direction="column" width="100%" paddingLeft="10px">
          <Flex alignItems="center">
            <Text fontWeight="bold">{username}</Text>
            <Text fontSize="sm" color="brand.dark-light" paddingLeft="10px">
              {/* TODO: 채팅 내용 길어지면 '...' 표시해주기  */}
              {createdAt ? distanceTimeFormat(createdAt) : ''}
            </Text>
          </Flex>
          <Text paddingTop="5px">{previewChat}</Text>
        </Flex>
        {/* TODO: 채팅 읽지 않으면 Badge표시해주기 */}
        <Image
          w="65px"
          h="65px"
          minWidth="65px"
          src={productImage}
          alt="product-image"
          borderRadius="7px"
          objectFit="cover"
          marginLeft="15px"
        />
      </Flex>
    </Box>
  );
};

export default ChattingCard;
