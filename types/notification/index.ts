interface Notification {
  id: number;
  productId: number;
  title: string;
  thumbnailImage: string;
  type: string;
  checked: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type NotificationsResponseType = Array<Notification>;
