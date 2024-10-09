import { axiosInstance } from '@/configs';
import { API_ENDPOINT } from '@/constant';
import { LoginResponse } from '@/types';

class AuthService {
  async logIn(token: string): Promise<LoginResponse> {
    const res = await axiosInstance.get(API_ENDPOINT.LOGIN, {
      params: { token },
    });
    return new LoginResponse(res?.data as any);
  }
}

const authService = new AuthService();

export { authService };
