"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

import { Button } from "@micro-store/ui/components/button";
import { Card, CardContent } from "@micro-store/ui/components/card";
import { Progress } from "@micro-store/ui/components/progress";
import { cn } from "@micro-store/ui/lib/utils";

import zxcvbn from "zxcvbn";

import { useRegister } from "../../hooks/useAuth";
import { RegisterFormValues, registerFormSchema } from "../../lib/validation";
import { Footer } from "../footer";
import { Header } from "../header";
import { InputWithTooltip } from "../input-with-tooltip/input-with-tooltip";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { registerUser, loading: registerLoading } = useRegister();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const password = watch("password", "");

  const { score, feedback } = useMemo(() => {
    if (!password) {
      return {
        score: 0 as const,
        feedback: {
          warning: "",
          suggestions: [],
        },
      };
    }
    const { score, feedback } = zxcvbn(password);
    return { score, feedback };
  }, [password]);

  const strengthPercent = ((score + 1) / 5) * 100;
  const strengthLabel = ["Very Weak", "Weak", "Fair", "Good", "Strong"][score];

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      const result = await registerUser(data);
      toast.success(result.message || "Registered successfully");
      router.push("/login");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Registration failed");
    }
  };

  const submitting = isSubmitting || registerLoading;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Header />
      <Card className="overflow-hidden p-0 h-full">
        <CardContent className="grid p-0 md:grid-cols-2 md:items-stretch h-full">
          <form
            noValidate
            className="p-6 md:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Join us</h1>
                <p className="text-muted-foreground text-balance">
                  Register now to set up your profile
                </p>
              </div>

              <InputWithTooltip<RegisterFormValues>
                name="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                autoFocus
                register={register}
                error={errors.email}
              />

              <InputWithTooltip<RegisterFormValues>
                name="password"
                label="Password"
                type="password"
                register={register}
                error={errors.password}
              />

              {password && (
                <div className="space-y-1">
                  <Progress
                    value={strengthPercent}
                    max={100}
                    className="h-2 rounded-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Strength: {strengthLabel}
                  </p>
                  {feedback.warning && (
                    <p className="text-xs text-red-500">{feedback.warning}</p>
                  )}
                </div>
              )}

              <InputWithTooltip<RegisterFormValues>
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                register={register}
                error={errors.confirmPassword}
              />

              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting && <ClipLoader size={16} />}
                {submitting ? "Signing up…" : "Sign up"}
              </Button>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Log in
                </Link>
              </div>
            </div>
          </form>

          <div className="hidden md:block h-full">
            <div className="relative w-full h-full">
              <Image
                fill
                priority
                src="/side-image.png"
                alt="Decorative side graphic"
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}
