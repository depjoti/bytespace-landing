import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Sign In — ByteSpace" };

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthForm
        eyebrow="Sign In"
        title="Welcome Back"
        submitLabel="Sign In"
        showSocial
        fields={[
          { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            autoComplete: "current-password",
          },
        ]}
        footer={{ text: "New user?", linkLabel: "Create an account", href: "/register" }}
      />
    </AuthLayout>
  );
}
