import { Metadata } from 'next';
import { RegisterForm } from '@/app/(auth)/register/RegisterForm';

export const metadata: Metadata = {
  title: 'Sign up | AsmaJobs',
  description: 'Create your AsmaJobs account',
};

const Register = () => {
  return (
    <>
      <h1 className="mb-8 max-w-md text-2xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-[1.65rem]">
        Welcome to AsmaJobs - Create an account
      </h1>
      <RegisterForm />
    </>
  );
};

export default Register;
