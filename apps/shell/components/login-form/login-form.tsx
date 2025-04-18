"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

import { Button } from "@micro-store/ui/components/button";
import { Card, CardContent } from "@micro-store/ui/components/card";
import { cn } from "@micro-store/ui/lib/utils";
import { setTokens } from "@micro-store/utils/cookies";

import { useLogin } from "../../hooks/useAuth";
import { LoginFormValues, loginFormSchema } from "../../lib/validation";
import { Footer } from "../footer";
import { InputWithTooltip } from "../input-with-tooltip/input-with-tooltip";
import { SocialButtons } from "../social-buttons/social-buttons";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { loginUser, loading: loginLoading } = useLogin();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    console.log("Form data:", data);
    try {
      const tokens = await loginUser(data);
      console.log("Received tokens:", tokens);
      setTokens(tokens);
      toast.success("Logged in successfully");
      router.push("/");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Login failed");
    }
  };

  const submitting = isSubmitting || loginLoading;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2 md:items-center">
          <form
            noValidate
            className="p-6 md:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="text-muted-foreground text-balance">
                  Log in to your micro-store account
                </p>
              </div>
              <div className="grid gap-3">
                <InputWithTooltip<LoginFormValues>
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  autoFocus
                  register={register}
                  error={errors.email}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Link
                    href="/forgot-password"
                    className="mt-[-1rem] ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <InputWithTooltip<LoginFormValues>
                  name="password"
                  label="Password"
                  type="password"
                  register={register}
                  error={errors.password}
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting && <ClipLoader size={16} />}
                {submitting ? "Logging in…" : "Log in"}
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <SocialButtons isDisabled={submitting} />
              <div className="text-center text-sm">
                Don’t have an account?{" "}
                <Link href="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="bg-muted hidden md:block">
            <Image
              priority
              src="/side-image.png"
              alt="Decorative side graphic"
              width={768}
              height={1024}
              className="w-full h-auto object-contain object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}
