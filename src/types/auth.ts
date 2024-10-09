export type SocialProvider = 'google' | 'facebook';

export class LoginResponse {
  accessToken: string;

  constructor(data: any) {
    this.accessToken = data.accessToken || '';
  }
}
