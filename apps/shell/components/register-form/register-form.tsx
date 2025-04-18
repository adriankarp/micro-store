"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValues, registerFormSchema } from "../../lib/validation";

import { ClipLoader } from "react-spinners";
import { cn } from "@micro-store/ui/lib/utils";
import { Button } from "@micro-store/ui/components/button";
import { Card, CardContent } from "@micro-store/ui/components/card";
import { InputWithTooltip } from "../input-with-tooltip/input-with-tooltip";
import { Footer } from "../footer";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    console.log(data);
    return new Promise<void>((resolve) => setTimeout(resolve, 1000));
  };

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
                <h1 className="text-2xl font-bold">Join us</h1>
                <p className="text-muted-foreground text-balance">
                  Register now to set up your profile
                </p>
              </div>
              <div className="grid gap-3">
                <InputWithTooltip<RegisterFormValues>
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
                <InputWithTooltip<RegisterFormValues>
                  name="password"
                  label="Password"
                  type={"password"}
                  register={register}
                  error={errors.password}
                />
              </div>
              <div className="grid gap-3">
                <InputWithTooltip<RegisterFormValues>
                  name="confirmPassword"
                  label="Confirm Password"
                  type={"password"}
                  register={register}
                  error={errors.confirmPassword}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && <ClipLoader size={16} />}
                {isSubmitting ? "Signing up…" : "Sign up"}
              </Button>
              <div className="text-center text-sm">
                Already have an account? <Link href="/login">Log in</Link>
              </div>
            </div>
          </form>
          <div className="bg-muted hidden md:block">
            <Image
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
