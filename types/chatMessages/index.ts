import { UserInfo } from 'types/user';

export interface ChatMessageData {
  userInfo: UserInfo;
  content: string;
  createdAt: Date;
}

export type ChatMeesageResponseType = Array<ChatMessageData>;
