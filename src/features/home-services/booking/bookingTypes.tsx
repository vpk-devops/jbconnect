export interface BookingItem {
  serviceId: string;
  title: string;
  tag?: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface BookingSection {
  sectionId: string;
  sectionTitle: string;
  items: BookingItem[];
}

export interface BookingAddress {
  house?: string;
  landmark?: string;
  text: string;
}

export interface BookingAgent {
  name?: string;
  image?: string;
  basicCharge?: string;
}

export interface BookingDateTime {
  date: string;
  time?: string;
}

export interface Booking {
  _id: string;
  userId?: string;
  sections: BookingSection[];
  address: BookingAddress;
  agent: BookingAgent;
  dateTime: BookingDateTime;
  method: string;
  amount: number;
  amountPaise: number;
  currency: string;
  paymentStatus: "pending" | "success" | "failed";
  orderStatus: string;
  razorpay?: {
    orderId?: string;
    paymentId?: string;
    signature?: string;
    receipt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BookingState {
  bookings: Booking[];
  currentBooking?: Booking | null;
  loading: boolean;
  error?: string | null;
}
