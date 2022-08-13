export interface ChatMessageData {
  userId: number;
  content: string;
  createdAt: Date;
}

export type ChatMeesageResponseType = Array<ChatMessageData>;
