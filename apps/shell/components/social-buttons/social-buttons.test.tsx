import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SocialButtons } from "./social-buttons";

describe("SocialButtons", () => {
  it("renders exactly two buttons", () => {
    render(<SocialButtons />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it("matches snapshot", () => {
    const { container } = render(<SocialButtons />);
    expect(container).toMatchSnapshot();
  });

  it("buttons are disabled when isDisabled is true", () => {
    render(<SocialButtons isDisabled />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("buttons are enabled when isDisabled is false", () => {
    render(<SocialButtons isDisabled={false} />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeEnabled();
    });
  });

  it("has accessible names for both providers", () => {
    render(<SocialButtons />);
    expect(
      screen.getByRole("button", { name: /login with google/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /login with meta/i }),
    ).toBeInTheDocument();
  });
});
