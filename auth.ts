import NextAuth from "next-auth"
import { signIn, signOut } from "next-auth/react"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  GitHub,
  // Google // would need to verify users
  // Credentials({
  //   credentials: { password: { label: "Password", type: "password" } },
  //   authorize(c) {
  //     if (c.password !== "password") return null
  //     return {
  //       id: "test",
  //       name: "Test User",
  //       email: "test@example.com",
  //     }
  //   },
  // }),
]

export const { handlers, auth } = NextAuth({
  providers,
  trustHost: true,
  pages: {
    signIn: "/signin"
  }
});

export {
  signIn,
  signOut
};

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
});
