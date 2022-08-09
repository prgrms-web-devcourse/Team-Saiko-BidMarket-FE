export interface ChatRoomData {
  chatRoomId: number;
  productInfo: {
    productId: number;
    thumbnailImg: string;
  };
  opponentUserInfo: {
    username: string;
    profileImg: string;
  };
  lastMessage: string;
  lastMessageDate: Date;
}

export type ChatRoomResponseType = Array<ChatRoomData>;
