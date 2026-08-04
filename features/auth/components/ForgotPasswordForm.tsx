"use client";

import Link from "next/link";
import Input from "@/components/ui/Input/input";
import Button from "@/components/ui/Button/button";

import "@/features/auth/components/ForgotPasswordForm.css";

export default function ForgotPasswordForm() {
  return (
    <form className="forgot-password">
      <h1 className="forgot-password-title">Esqueceu a senha?</h1>

      <p className="forgot-password-subtitle">
        Não se preocupe! Insira seu e-mail abaixo e enviaremos um código de verificação para redefinir sua senha.]
      </p>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          name="email"
          className="input"
          placeholder="Digite seu e-mail"
          required
        />
      </div>

      <Button 
        type="submit" 
        className="button-primary">
        Enviar código
      </Button>

      <p className="forgot-password-link">
        Lembrou sua senha? <Link href="/login">Faça login</Link>
      </p>
    </form>
  ) ;  
}