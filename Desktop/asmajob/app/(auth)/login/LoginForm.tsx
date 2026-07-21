'use client';

import { Controller, useForm } from 'react-hook-form';
import { loginFormSchema, loginSchema } from '@/schema/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  InputGroup, 
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import Link from 'next/link';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm<loginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: loginFormSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log(errors);
      })}
      className="flex w-full max-w-md flex-col gap-5"
    >
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className="text-zinc-700">
              Email
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              placeholder="marie.dupont@hireflow.com"
              aria-invalid={fieldState.invalid}
              className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className="text-zinc-700">
              Mot de passe
            </FieldLabel>
            <InputGroup className="h-11 rounded-lg border-zinc-200 bg-white has-[[data-slot=input-group-control]:focus-visible]:border-[#6b4eff] has-[[data-slot=input-group-control]:focus-visible]:ring-[#6b4eff]/20">
              <InputGroupInput
                {...field}
                id={field.name}
                type={showPassword ? 'text' : 'password'}
                aria-invalid={fieldState.invalid}
                className="h-11 px-3 text-sm"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  type="button"
                  size="icon-xs"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword
                      ? 'Masquer le mot de passe'
                      : 'Afficher le mot de passe'
                  }
                  className="text-zinc-400 hover:text-zinc-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="mt-1 h-11 w-full rounded-lg bg-[#6b4eff] text-sm font-medium text-white hover:bg-[#5a3fe6] cursor-pointer"
      >
        connect
      </Button>

      <p className="mt-2 text-center text-sm text-zinc-600">
        Pas encore de account ? {' '}
        <Link
          href="/register"
          className="font-medium text-[#6b4eff] hover:text-[#5a3fe6]"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}
