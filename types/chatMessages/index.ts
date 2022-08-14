import { User } from 'types/user';

export interface ChatMessageData {
  userInfo: User;
  content: string;
  createdAt: Date;
}

export type ChatMeesageResponseType = Array<ChatMessageData>;
