import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Create an Account — ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <AuthForm
        eyebrow="Create an Account"
        title={
          <>
            Welcome to <br />
            ByteSpace
          </>
        }
        submitLabel="Continue"
        fields={[
          { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
          { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            autoComplete: "new-password",
            minLength: 8,
          },
        ]}
        footer={{ text: "Already have an account?", linkLabel: "Login", href: "/login" }}
      />
    </AuthLayout>
  );
}
