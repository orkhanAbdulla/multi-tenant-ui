import { Button } from "@/components/shadcn-ui/button";
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";
import { RegisterSchema, type RegisterFormaData } from "@/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { register } from "../api";
function useRegisterForm() {
  return useForm<RegisterFormaData>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(RegisterSchema),
  });
}
function useLoginMutation() {
  return useMutation({
    mutationFn: (data: RegisterFormaData) => register(data),
    onSuccess: () => {
      // Handle successful login, e.g., redirect or show a message
    },
  });
}

export function RegisterForm() {
  const form = useRegisterForm();
  const {mutateAsync,error}=useLoginMutation()

  function onSubmit(data: RegisterFormaData) {
   mutateAsync(data)
}
  return (
    <Form {...form}>
      <div className="w-full p-6">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm sm:max-w-md grid gap-4"
        >
          {error ? <span>{error.message}</span> : ""}
          <h3 className="text-2xl font-semibold text-center">Register</h3>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ConfirmPassword</FormLabel>
                <FormControl>
                  <Input {...field} type="confirmPassword" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
           Submit
          </Button>
        </form>
      </div>
    </Form>
  );
}
