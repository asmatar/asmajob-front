import { Metadata } from 'next';
import { LoginForm } from '@/app/(auth)/login/LoginForm';

export const metadata: Metadata = {
  title: 'Login | AsmaJobs',
  description: 'Log in to your AsmaJobs account',
};

const Login = () => (
  <>
    <h1 className="mb-8 max-w-md text-2xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-[1.65rem]">
      Welcome to AsmaJobs - Connect to your account
    </h1>
    <LoginForm />
  </>
);

export default Login;
