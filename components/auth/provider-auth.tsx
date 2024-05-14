import { signIn, signOut } from "auth"
import Button from "../core/utility/button"

export function SignIn({
  provider,
  children,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        await signIn(provider)
      }}
    >
      <Button type="submit" {...props}>{children}</Button>
    </form>
  )
}

export function SignOut({ children, ...props }: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <Button >
        {children}
      </Button>
    </form>
  )
}