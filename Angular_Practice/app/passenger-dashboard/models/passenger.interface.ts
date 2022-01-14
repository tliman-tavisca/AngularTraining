export interface PassengerForComponent {
  id: number;
  fullname: string;
  checkedin: boolean;
  checkedInDate?: number;
  children: Children[] | null;
}

export interface Children {
  name: string;
  age: number;
}
