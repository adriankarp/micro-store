"use client";

import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import type {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

import { Input } from "@micro-store/ui/components/input";
import { Label } from "@micro-store/ui/components/label";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@micro-store/ui/components/tooltip";
import { cn } from "@micro-store/ui/lib/utils";

export interface InputWithTooltipProps<T extends FieldValues>
  extends React.ComponentProps<typeof Input> {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

export function InputWithTooltip<T extends FieldValues>({
  name,
  label,
  register,
  error,
  className,
  ...props
}: InputWithTooltipProps<T>) {
  const id = String(name);
  const [isView, setIsView] = React.useState(false);

  return (
    <div className="grid gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Tooltip open={!!error}>
        <TooltipTrigger asChild>
          <div className="relative">
            <Input
              id={id}
              {...register(name)}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
              className={cn(className)}
              {...props}
              type={
                props.type === "password"
                  ? isView
                    ? "text"
                    : "password"
                  : props.type
              }
            />
            {props.type === "password" &&
              (isView ? (
                <Eye
                  data-testid="eye-icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500"
                  onClick={() => setIsView(false)}
                />
              ) : (
                <EyeOff
                  data-testid="eye-off-icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500"
                  onClick={() => setIsView(true)}
                />
              ))}
          </div>
        </TooltipTrigger>

        {error && (
          <TooltipContent side="right" align="start" id={`${id}-error`}>
            <p className="text-sm text-destructive">{error.message}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </div>
  );
}
