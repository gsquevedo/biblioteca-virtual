
import LoginForm from "./components/form";
import "@/app/(auth)/login/page.css"

export default function LoginPage(){
  return (
    <main className="login-page">
      <section className="login-card">
        <LoginForm/>
      </section>
    </main>
  )
}