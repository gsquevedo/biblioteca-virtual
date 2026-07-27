import RegisterForm from "@/features/auth/components/RegisterForm";
import RegisterImage from "@/public/images/login-image.png";
import Image from "next/image";
import "@/app/(auth)/register/page.css";

export default function RegisterPage() {
  return (
    <main className="register-page">
      <section className="register-container">

        <div className="register-form-side">
          <div className="register-card">
            <RegisterForm />
          </div>
        </div>

        <aside className="register-banner">
          <div className="banner-content">
            <Image
              src={RegisterImage}
              alt="Pessoa organizando uma biblioteca virtual"
              className="banner-image"
              width={550}
              height={550}
              priority
            />

            <h2>Junte-se à nossa comunidade de leitores</h2>
            <p>
              Crie sua conta e tenha acesso a uma vasta coleção de livros digitais,
              organize suas leituras e descubra novos títulos para explorar.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
