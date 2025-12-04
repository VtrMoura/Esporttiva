export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
  token?: string;
}

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  // Mock validation
  if (!email || !password) {
    return { success: false, message: "Email e senha são obrigatórios" };
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock user
  const user: User = {
    id: "1",
    name: email.split("@")[0],
    email,
  };

  const token = btoa(JSON.stringify(user)); // Fake JWT

  return {
    success: true,
    user,
    token,
  };
};

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  // Mock validation
  if (!name || !email || !password) {
    return { success: false, message: "Todos os campos são obrigatórios" };
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock user
  const user: User = {
    id: Date.now().toString(),
    name,
    email,
  };

  const token = btoa(JSON.stringify(user)); // Fake JWT

  return {
    success: true,
    user,
    token,
  };
};

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const user = JSON.parse(atob(token));
    return user;
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
};
