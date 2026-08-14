"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/features/auth/actions/forgot-password";
import { useState } from "react";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/features/auth/validation/forgot-password.schema";

export function useForgotPassword() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  async function onSubmit(data: ForgotPasswordFormData) {
    setMessage("");
    setSuccess(false);
    const response = await forgotPassword(data.email);

    setMessage(response.message);
    setSuccess(response.success);

  }

  return {
    ...form,
    onSubmit,
    message,
    success,
  };
}