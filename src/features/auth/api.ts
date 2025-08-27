import { http } from "@/lib/api/http";
import type { LoginFormData } from "@/types/schemas";

export async function login(user: LoginFormData) {
  await http.post("/auth/login", user);
}

export async function getMe<T>() {
  const result = await http.get("/auth/me");
  return result.data as T;
}
