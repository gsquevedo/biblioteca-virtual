"use client"

import Input from "@/app/ui/input";
import Button from "@/app/ui/button";
import "@/app/(auth)/login/components/form.css"

export default function LoginForm() {

  return (
    <form className="login">
      <h1 className="login-title">Biblioteca Virtual</h1>
      <p className="login-description">
        Acesse sua conta para continuar
      </p>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>

        <Input
          id="email"
          type="email"
          name="email"
          className="input"
          placeholder="Digite seu e-mail"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <Input 
          id="password"
          type="password"
          name="password"
          className="input"
          placeholder="Digite sua senha"
          required 
        />
      </div>
      
      <a
        href="#"
        className="forgot-password"
      >
        Esqueceu sua senha?
      </a>
      <Button
        className="button-primary"
        type="submit">
          Entrar
      </Button>
    </form>
  );
}