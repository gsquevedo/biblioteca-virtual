"use client"

import Input from "@/components/ui/Input/input";
import Button from "@/components/ui/Button/button";
import "@/features/auth/components/AuthForm.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  loginSchema, 
  type LoginFormData
} from "@/features/auth/validation/login.schema";
import Link from "next/link";
import { login as loginUser } from "@/features/auth/actions/login";

export default function LoginForm() {
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [message, setMessage] = useState("");

  async function onSubmit(data: LoginFormData) {
    const result = await loginUser({
      email: data.email,
      password: data.password,
    });

    setMessage(result.message);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="auth-form-title">Biblioteca Virtual</h1>
      <p className="auth-form-subtitle">
        Acesse sua conta para continuar
      </p>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>

        <Input
          id="email"
          type="email"
          className={`input ${errors.email ? "error" : ""}`}
          placeholder="Digite seu e-mail"
          required
          { ...register("email") }
        />

        {errors.email && (
          <span className="error-message">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <Input 
          id="password"
          type="password"
          className={`input ${errors.password ? "error" : ""}`}
          placeholder="Digite sua senha"
          required 
          { ...register("password") }
        />
        {errors.password && (
          <span className="error-message">
            {errors.password.message}
          </span>
        )}
      </div>
      
      <p className="auth-form-link">
        <Link href="/forgot-password">Esqueceu sua senha?</Link>
      </p>
      <Button
        className="button-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>

      {message && (
        <p className="auth-form-message">
          {message}
        </p>
      )}
    </form>
  );
}