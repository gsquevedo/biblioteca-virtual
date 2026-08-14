"use client"

import Input from "@/components/ui/Input/input";
import Button from "@/components/ui/Button/button";
import "@/features/auth/components/AuthForm.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema, 
  type LoginFormData
} from "@/features/auth/validation/login.schema";
import Link from "next/link";

export default function LoginForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
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
        type="submit">
          Entrar
      </Button>
    </form>
  );
}