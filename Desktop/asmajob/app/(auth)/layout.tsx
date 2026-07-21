import React, { ReactNode } from 'react';
import Link from 'next/link';

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-[#f4f4f5] px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:grid-cols-2">
        <section className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-14">
          <Link
            href="/"
            className="mb-8 inline-flex w-fit items-center gap-2.5"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-[#6b4eff] text-sm font-bold text-white">
              A
            </span>
            <span className="text-lg font-semibold tracking-tight text-[#2d2660]">
              AsmaJobs
            </span>
          </Link>

          {children}
        </section>

        <aside className="hidden items-center justify-center bg-[#f7f7f8] px-8 py-10 md:flex">
          <p className="text-center text-sm text-zinc-400">
            Illustration to add
          </p>
        </aside>
      </div>
    </main>
  );
}
