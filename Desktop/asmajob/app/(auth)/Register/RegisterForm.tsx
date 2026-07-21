'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { registerFormSchema, registerSchema } from '@/schema/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, } from '@/components/ui/input-group';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm<registerFormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      profession: '',
      address: null,
      city: null,
      postalCode: null,
    },
  });

  const onSubmit = (data: registerFormSchema) => {
    console.log('register form', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log(errors);
      })}
      className="flex w-full flex-col gap-5"
    >
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        <Controller
          name="firstname"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-zinc-700">
                First name
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Enter your first name"
                aria-invalid={fieldState.invalid}
                className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-zinc-700">
                Last name
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Enter your last name"
                aria-invalid={fieldState.invalid}
                className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="profession"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-zinc-700">
                Profession
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Enter your profession"
                aria-invalid={fieldState.invalid}
                className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-zinc-700">
                Address
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                value={field.value ?? ''}
                placeholder="Enter your address"
                aria-invalid={fieldState.invalid}
                className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="postalCode"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-zinc-700">
                Postal code
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ''}
                id={field.name}
                placeholder="Enter a postal code"
                aria-invalid={fieldState.invalid}
                className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-zinc-700">
                City
              </FieldLabel>
              <Input
                {...field}
                value={field.value ?? ''}
                id={field.name}
                placeholder="Enter your city"
                aria-invalid={fieldState.invalid}
                className="h-11 rounded-lg border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus-visible:border-[#6b4eff] focus-visible:ring-[#6b4eff]/20"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
                placeholder="Enter your email"
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
                Password
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
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
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
      </div>
      <Button
        type="submit"
        className="mt-1 h-11 w-full cursor-pointer rounded-lg bg-[#6b4eff] text-sm font-medium text-white hover:bg-[#5a3fe6]"
      >
        Sign up
      </Button>
      <p className="mt-2 text-center text-sm text-zinc-600">
        you do have an account?{' '}
        <Link
          href="/login"
          className="font-medium text-[#6b4eff] hover:text-[#5a3fe6]"
        >
          Let&apos;s connect
        </Link>
      </p>
    </form>
  );
};
