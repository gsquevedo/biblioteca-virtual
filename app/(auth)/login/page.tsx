import Image from "next/image";

import LoginForm from "@/features/auth/components/LoginForm";
import "@/app/(auth)/login/page.css";
import LoginImage from "@/public/images/login-image.png";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-container">

        <div className="login-form-side">
          <div className="login-card">
            <LoginForm />
          </div>
        </div>

        <aside className="login-banner">
          <div className="banner-content">
            <Image
              src={LoginImage}
              alt="Pessoa organizando uma biblioteca virtual"
              className="banner-image"
              width={550}
              height={550}
              priority
            />

            <h2>Organize sua biblioteca digital</h2>

            <p>
              Gerencie seus livros, acompanhe suas leituras e descubra
              novos títulos em um único lugar.
            </p>
          </div>
        </aside>

      </section>
    </main>
  );
}