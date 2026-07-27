"use client"

import Input from "@/components/ui/Input/input";
import Button from "@/components/ui/Button/button";
import "@/features/auth/components/RegisterForm.css";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="register">
      <h1 className="register-title">Biblioteca Virtual</h1>
      <p className="register-subtitle">Registre-se para acessar a biblioteca</p>

      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <Input
          id="name"
          name="name"
          type="text"
          className="input"
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Usuário</label>
        <Input
          id="username"
          type="text"
          name="username"
          className="input"
          placeholder="Digite seu usuário"
          required
        />
      </div>

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

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <Input 
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          className="input"
          placeholder="Confirme sua senha"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="birthDate">Data de Nascimento</label>
        <Input
          id="birthDate"
          type="date"
          name="birthDate"
          className="input"
          required
        />
      </div>

      <Button
        className="button-primary"
        type="submit">
          Registrar
      </Button>

      <p className="login-link">
        Já possui uma conta? <Link href="/login">Faça login</Link>
      </p>
    
    </form>
  );
}