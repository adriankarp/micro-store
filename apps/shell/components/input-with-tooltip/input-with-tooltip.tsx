"use client";

import * as React from "react";
import { Input } from "@micro-store/ui/components/input";
import { Label } from "@micro-store/ui/components/label";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@micro-store/ui/components/tooltip";
import { cn } from "@micro-store/ui/lib/utils";
import type {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

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
  return (
    <div className="grid gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Tooltip open={!!error}>
        <TooltipTrigger asChild>
          <Input
            id={id}
            {...register(name)}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={cn(className)}
            {...props}
          />
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
