"use client";

import Link from "next/link";
import Input from "@/components/ui/Input/input";
import Button from "@/components/ui/Button/button";

import "@/features/auth/components/AuthForm.css";
import { useForgotPassword } from "@/features/auth/hooks/useForgotPassword";

export default function ForgotPasswordForm() {
  const { register, handleSubmit, onSubmit, formState: { errors, isSubmitting }, message, success } = useForgotPassword();

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="auth-form-title">Esqueceu a senha?</h1>

      <p className="auth-form-subtitle">
        Não se preocupe! Insira seu e-mail abaixo e enviaremos um código de verificação para redefinir sua senha.
      </p>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          className={`input ${errors.email ? "error" : ""}`}
          placeholder="Digite seu e-mail"
          {...register("email")}
        />

        {errors.email && (
          <span className="error-message">
            {errors.email.message}
          </span>
        )}
      </div>

      { message && (
        <div className={`message ${success ? "success" : "error"}`}>
          {message}
        </div>
      )}

      <Button
        type="submit"
        className="button-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar código"}
      </Button>

      <p className="auth-link">
        Lembrou sua senha? <Link href="/login">Faça login</Link>
      </p>
    </form>
  ) ;  
}