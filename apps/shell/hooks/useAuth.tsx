import { useState, useCallback } from "react";
import {
  login as apiLogin,
  register as apiRegister,
  forgotPassword as apiForgotPassword,
} from "../lib/auth/auth";
import type {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
} from "../lib/validation";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loginUser = useCallback(async (credentials: LoginFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const tokens = await apiLogin(credentials);
      return tokens;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loginUser, loading, error };
}

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const registerUser = useCallback(async (data: RegisterFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiRegister(data);
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { registerUser, loading, error };
}

export function useForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendForgotPassword = useCallback(
    async (data: ForgotPasswordFormValues) => {
      setLoading(true);
      setError(null);
      setMessage(null);
      try {
        const result = await apiForgotPassword(data);
        setMessage(result.message);
        return result;
      } catch (err) {
        setError(err as Error);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { sendForgotPassword, loading, error, message };
}
