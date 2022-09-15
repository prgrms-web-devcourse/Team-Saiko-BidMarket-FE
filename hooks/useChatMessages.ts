import { useCallback, useState } from 'react';

import { ChatMeesageResponseType, ChatMessageData } from 'types/chatMessages';
import chatDateFormat from 'utils/format/chatDateFormat';

export type ChatMessagesType = {
  chatDate: string;
  messages: ChatMeesageResponseType;
};

const useChatMessages = () => {
  const map = new Map();
  const [chatMessages, setChatMessages] = useState<ChatMessagesType[]>([]);

  const setPrevMessagesFromApi = useCallback(
    (messages: ChatMeesageResponseType) => {
      messages.forEach((message) => {
        const date = chatDateFormat(new Date(message.createdAt));
        const prevMessages = map.get(date) || [];

        map.set(date, [...prevMessages, message]);
      });

      setChatMessages(
        [...map].map(([chatDate, messages]) => ({ chatDate, messages }))
      );
    },
    []
  );

  const addMessage = useCallback((message: ChatMessageData) => {
    const today = chatDateFormat(new Date());
    const prevMessages = map.get(today) || [];

    map.set(today, [...prevMessages, message]);

    setChatMessages(
      [...map].map(([chatDate, messages]) => ({ chatDate, messages }))
    );
  }, []);

  return {
    chatMessages,
    setPrevMessagesFromApi,
    addMessage,
  };
};

export default useChatMessages;
