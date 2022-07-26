import { Client } from '@stomp/stompjs';
import getConfig from 'next/config';
import { useCallback } from 'react';
import SockJS from 'sockjs-client';

import { ChatMessageData } from 'types/chatMessages';
import { UserInfo } from 'types/user';

const { publicRuntimeConfig } = getConfig();
let client: Client | null = null;

export interface UseStompProps {
  chatRoomId: number;
  userInfo: UserInfo;
  addMessage: (message: ChatMessageData) => void;
}

const useStomp = ({ chatRoomId, userInfo, addMessage }: UseStompProps) => {
  const connect = () => {
    if (client !== null) {
      return;
    }

    client = new Client({
      webSocketFactory: () => new SockJS(publicRuntimeConfig.stompUrl),
      debug: function (str) {
        console.log(str);
      },
      onConnect: () => {
        subscribe();
      },
    });

    client.activate();
  };

  const subscribe = () => {
    if (client === null || !client.connected) {
      return;
    }

    client?.subscribe(
      `/chat/room/${chatRoomId}`,
      (message: { body: string }) => {
        if (!message.body) {
          return;
        }

        addMessage(JSON.parse(message.body));
      }
    );

    client?.activate();
  };

  const disConnect = () => {
    if (client !== null && client.connected) {
      client.deactivate();
    }

    client = null;
  };

  const publish = useCallback(
    (message: string) => {
      if (client === null || !client.connected) {
        return;
      }

      client?.publish({
        destination: `/message/room/${chatRoomId}`,
        body: JSON.stringify({ userId: userInfo.userId, content: message }),
      });
    },
    [chatRoomId, userInfo]
  );

  return { connect, disConnect, publish };
};

export default useStomp;
