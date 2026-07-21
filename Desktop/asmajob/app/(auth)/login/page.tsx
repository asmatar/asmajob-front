import { Metadata } from 'next';
import Link from 'next/link';
import { LoginForm } from '@/app/(auth)/login/LoginForm';

export const metadata: Metadata = {
  title: 'Login | AsmaJobs',
  description: 'Log in to your AsmaJobs account',
};

const Login = () => (
  <main className="flex min-h-full flex-1 items-center justify-center bg-[#f4f4f5] px-4 py-10">
    <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:grid-cols-2">
      <section className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-14">
        <Link href="/" className="mb-8 inline-flex w-fit items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-[#6b4eff] text-sm font-bold text-white">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight text-[#2d2660]">
            AsmaJobs
          </span>
        </Link>

        <h1 className="mb-8 max-w-md text-2xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-[1.65rem]">
          Welcome to AsmaJobs - Connect to your account
        </h1>

        <LoginForm />
      </section>

      <aside className="hidden items-center justify-center bg-[#f7f7f8] px-8 py-10 md:flex">
        <p className="text-center text-sm text-zinc-400">Illustration to add</p>
      </aside>
    </div>
  </main>
);

export default Login;
