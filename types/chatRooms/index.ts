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
  lastMessage: string | null;
  lastMessageDate: Date | null;
}

export type ChatRoomResponseType = Array<ChatRoomData>;
