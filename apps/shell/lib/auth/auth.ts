/* eslint-disable */

import {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
} from "../validation";

const BASE_URL = process.env.API_BASE_URL ?? "https://api.escuelajs.co/api/v1";

export class APIError extends Error {
  public status: number;
  constructor(message: string, status: number) {
    super(message);
    Object.setPrototypeOf(this, APIError.prototype);
    this.name = "APIError";
    this.status = status;
  }
}

async function handleResponse<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") ?? "";
  const data: any = contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    const message = data.error || data.message || res.statusText;
    throw new APIError(message, res.status);
  }

  return data as T;
}

export async function login(credentials: LoginFormValues): Promise<{
  access_token: string;
  refresh_token: string;
}> {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  return handleResponse<{
    access_token: string;
    refresh_token: string;
  }>(res);
}

export async function register(
  userData: RegisterFormValues,
): Promise<{ message: string }> {
  await new Promise((r) => setTimeout(r, 500));
  return { message: "Registration successful!" };
}

export async function forgotPassword(
  payload: ForgotPasswordFormValues,
): Promise<{ message: string }> {
  await new Promise((r) => setTimeout(r, 500));
  return {
    message: "If that account exists, you’ll receive a reset email shortly.",
  };
}
