export interface ChatRoomData {
  chatRoomId: number;
  productInfo: {
    productId: number;
    thumbnailImage: string;
  };
  opponentUserInfo: {
    username: string;
    profileImage: string;
  };
  lastMessage: string;
  lastMessageDate: Date;
}

export type ChatRoomResponseType = Array<ChatRoomData>;
