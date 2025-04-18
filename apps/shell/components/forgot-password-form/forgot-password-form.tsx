"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ForgotPasswordFormValues,
  forgotPasswordFormSchema,
} from "../../lib/validation";

import { ClipLoader } from "react-spinners";
import { cn } from "@micro-store/ui/lib/utils";
import { Button } from "@micro-store/ui/components/button";
import { Card, CardContent } from "@micro-store/ui/components/card";
import { InputWithTooltip } from "../input-with-tooltip/input-with-tooltip";
import { Footer } from "../footer";

import { useForgotPassword } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { sendForgotPassword, loading: forgotLoading } = useForgotPassword();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(forgotPasswordFormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = async (data) => {
    console.log("Form data:", data);
    try {
      const result = await sendForgotPassword(data);
      console.log("Forgot password result:", result);
      toast.success(result.message);
      router.push("/login");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send reset link",
      );
    }
  };

  const submitting = isSubmitting || forgotLoading;

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
                <h1 className="text-2xl font-bold">Forgot your password?</h1>
                <p className="text-muted-foreground text-balance">
                  Enter your email to reset your password.
                </p>
              </div>
              <div className="grid gap-3">
                <InputWithTooltip<ForgotPasswordFormValues>
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  autoFocus
                  register={register}
                  error={errors.email}
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting && <ClipLoader size={16} />}
                {submitting
                  ? "Sending reset link…"
                  : "Send password reset link"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We’ll never share your email with anyone.
              </p>
              <div className="text-center text-sm">
                Remembered your password?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Log in
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
