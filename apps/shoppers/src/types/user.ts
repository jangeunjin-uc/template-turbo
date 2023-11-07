export interface UserInfoType {
  id?: string;
  email: string;
  name: string;
  photoUrl: string;
  providerId: string;
  creationTime: string;
  lastSiginTime: string;
  auth: 'ADMIN' | 'USER' | '';
}

export const emptyUsersInfo: UserInfoType = {
  id: '',
  email: '',
  name: '',
  photoUrl: '',
  providerId: '',
  creationTime: '',
  lastSiginTime: '',
  auth: '',
};
