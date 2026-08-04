import Image from "next/image";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";
import ForgotPasswordImage from "@/public/images/login-image.png";

import "@/app/(auth)/forgot-password/page.css";

export default function ForgotPasswordPage() {
  return (
    <main className="forgot-password-page">
      <section className="forgot-password-container">
        <div className="forgot-password-form-side">
          <div className="forgot-password-card">
            <ForgotPasswordForm />
          </div>
        </div>

        <aside className="forgot-password-banner">
          <div className="banner-content">
            <Image
              src={ForgotPasswordImage}
              alt="Pessoa organizando uma biblioteca virtual"
              className="banner-image"
              width={550}
              height={550}
              priority
            />

            <h2>Recupere sua conta</h2>
            <p> Enviaremos um código de verificação para o e-mail informado.
              Com ele você poderá criar uma nova senha com segurança.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}