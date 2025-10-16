export interface SignUpPayload {
  firstName:string;
  lastName: string;
  email: string;
  phone:number;
  password: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name?: string;
    email: string;
  };
  token: string;
}
