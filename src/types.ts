export interface IUser {
  name?: string;
  password: string;
  email: string;
  accessToken?: string;
  refreshToken?: string;
  checkPassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
  phone?: string;
  avatar?: string;
  favorites: string[];
}

export interface INotice {
  _id?: string;
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
  category: string;
  price?: number;
  comment: string;
  locationId?: string;
  user?: IUser;
  popularity: number;
}

export interface IPet {
  name: string;
  title: string;
  imageURL: string;
  species: string;
  birthday: string;
  sex: string;
}

export interface ICity {
  _id: string;
  useCounty: string;
  stateEn: string;
  cityEn: string;
  countyEn: string;
}

export interface IFriend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: IWorkDays[];
  phone: string;
  email: string;
}

export interface IWorkDays {
  _id: string;
  isOpen: boolean;
  from: string;
  to: string;
}

export interface INew {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface IForms {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IFormsBD {
  name?: string;
  email: string;
  password: string;
}

export interface FetchParams {
  page: number;
  limit: number;
  title: string | null;
  category: string | null;
  sex: string | null;
  species: string | null;
  sort: string | null;
}

export interface ISearchQuery {
  title: string | null;
  category: string | null;
  sex: string | null;
  species: string | null;
  sort: string | null;
}

export interface IFilter {
  filter: string;
}

export interface INoticeDate {
  data: INotice;
}
