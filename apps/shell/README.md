# Authentication Shell App

This project is an authentication shell. It serves as the entry-point for a multi-zone architecture where users log in, register, and request password resets. After successful authentication, the user is redirected to the storefront (products) app via Next.js rewrites.

## Overview

This Authentication Shell app is designed as the "shell" in a multi-zone architecture. It handles:

- User Login
- User Registration (Signup)
- Forgot Password Flow

Upon successful login, the app stores a JWT token in cookies and automatically redirects the user to the storefront zone where products are displayed.
