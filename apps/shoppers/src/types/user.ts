export interface UserInfoType {
  id?: string;
  email: string;
  name: string;
  photoUrl: string;
  providerId: string;
  creationTime: string;
  lastSiginTime: string;
}

export const emptyUsersInfo = {
  id: '',
  email: '',
  name: '',
  photoUrl: '',
  providerId: '',
  creationTime: '',
  lastSiginTime: '',
};
