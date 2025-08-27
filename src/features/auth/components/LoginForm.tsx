import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/form";
import { LoginSchema, type LoginFormData } from "@/types/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../api";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/shadcn-ui/input";
import { Button } from "@/components/shadcn-ui/button";

function useLoginForm() {
  return useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
  });
}

function useLoginMutation() {
  return useMutation({
    mutationFn: (data: LoginFormData) => login(data),
    onSuccess: () => {
      // Handle successful login, e.g., redirect or show a message
    },
  });
}

export function LoginForm() {
  const form = useLoginForm();
  const { mutateAsync, data, error } = useLoginMutation();

  const onSubmit = async (data: LoginFormData) => {
    const result = await mutateAsync(data);
  };

  return (
    <Form {...form}>
      <div className="w-full p-6">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm sm:max-w-md grid gap-4"
        >
          {error ? <span>{error.message}</span> : ""}
          <h3 className="text-2xl font-semibold text-center">Login</h3>
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
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </Form>
  );
}
