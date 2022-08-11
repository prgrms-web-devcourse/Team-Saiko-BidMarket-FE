interface Notification {
  id: number;
  productId: number;
  title: string;
  thumbnailImage: string;
  type: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type NotificationsResponseType = Array<Notification>;
