import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import type { UseFormRegister } from "react-hook-form";
import { InputWithTooltip } from "./input-with-tooltip";

type FormValues = { password?: string; email?: string };

const registerMock = vi.fn() as unknown as UseFormRegister<FormValues>;

describe("InputWithTooltip", () => {
  it("renders a label tied to the input", () => {
    render(
      <InputWithTooltip<FormValues>
        name="email"
        label="Email Address"
        register={registerMock}
        type="text"
      />,
    );
    const input = screen.getByLabelText("Email Address");
    expect(input).toHaveAttribute("id", "email");
  });

  it("forwards non-password types without toggle icons", () => {
    render(
      <InputWithTooltip<FormValues>
        name="email"
        label="Email"
        register={registerMock}
        type="email"
        className="foo"
      />,
    );

    const input = screen.getByLabelText("Email") as HTMLInputElement;
    expect(input.type).toBe("email");
    expect(screen.queryByTestId("eye-icon")).toBeNull();
    expect(screen.queryByTestId("eye-off-icon")).toBeNull();
  });

  it("toggles password visibility when type=password", () => {
    render(
      <InputWithTooltip<FormValues>
        name="password"
        label="Password"
        register={registerMock}
        type="password"
      />,
    );

    const input = screen.getByLabelText("Password") as HTMLInputElement;

    expect(input.type).toBe("password");
    const eyeOff = screen.getByTestId("eye-off-icon");
    fireEvent.click(eyeOff);

    expect(input.type).toBe("text");
    const eye = screen.getByTestId("eye-icon");
    fireEvent.click(eye);

    expect(input.type).toBe("password");
  });

  it("does not show tooltip when there is no error", () => {
    render(
      <InputWithTooltip<FormValues>
        name="email"
        label="Email"
        register={registerMock}
        type="text"
      />,
    );

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(input).not.toHaveAttribute("aria-describedby");
    expect(screen.queryByText(/./, { selector: "[id$='-error']" })).toBeNull();
  });
});
