import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import distanceTimeFormat from 'utils/format/distanceTimeFormat';

interface ChattingProps {
  username: string;
  profileImage: string;
  previewChat: string | null;
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
        <Circle position="relative" overflow="hidden" w="44px" h="44px">
          <Image
            width="44px"
            height="44px"
            src={profileImage}
            alt="profile-image"
          />
        </Circle>
        <Flex direction="column" width="100%" paddingLeft="10px">
          <Flex alignItems="center">
            <Text fontWeight="bold">{username}</Text>
            <Text fontSize="sm" color="brand.dark-light" paddingLeft="10px">
              {/* TODO: 채팅 내용 길어지면 '...' 표시해주기  */}
              {createdAt ? distanceTimeFormat(createdAt) : ''}
            </Text>
          </Flex>
          {previewChat ? (
            <Text paddingTop="5px">{previewChat}</Text>
          ) : (
            <Text fontSize="sm" paddingTop="5px" color="brand.dark-light">
              첫번째 채팅을 남겨주세요!
            </Text>
          )}
        </Flex>
        {/* TODO: 채팅 읽지 않으면 Badge표시해주기 */}
        <Box
          overflow="hidden"
          borderRadius="7px"
          marginLeft="15px"
          minW="65px"
          w="65px"
          h="65px"
        >
          <Image
            width="65px"
            height="65px"
            src={productImage}
            alt="product-image"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ChattingCard;
