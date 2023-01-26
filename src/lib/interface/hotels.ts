export interface RoomI {
  type: '1P' | '2P' | '3P' | '4P' | '5P' | '6P';
  totalRooms: number;
  price: number;
}

export interface HotelI {
  _id: string;
  name: string;
  description: string;
  phoneNumber: string;

  roomType: RoomI[];
  photos: string[];

  city: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface AllHotelsI {
  status: string;
  results: number;
  data: HotelI[];
}
export interface HotelsDetailI {
  status: string;
  results: number;
  data: HotelI;
}
