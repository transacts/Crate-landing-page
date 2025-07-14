'use client';

import { SignInPage } from '@/components/ui/sign-in';
// import { useRouter } from "next/navigation";

export default function SignIn() {
  // const router = useRouter();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle sign in logic here
    console.log('Sign in form submitted');
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log('Google sign in clicked');
  };

  const handleResetPassword = () => {
    // Handle reset password logic here
    console.log('Reset password clicked');
  };

  const handleCreateAccount = () => {
    // Navigate to sign up page or handle account creation
    console.log('Create account clicked');
  };

  return (
    <SignInPage
      title={<span className="font-light text-foreground tracking-tighter">Welcome to <span className="font-bold">CRATE</span></span>}
      description="Sign in to access your AI-powered e-commerce dashboard"
      heroImageSrc="/crate-logo.png"
      onSignIn={handleSignIn}
      onGoogleSignIn={handleGoogleSignIn}
      onResetPassword={handleResetPassword}
      onCreateAccount={handleCreateAccount}
    />
  );
}