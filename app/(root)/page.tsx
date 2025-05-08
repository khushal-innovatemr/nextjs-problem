import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs'

export  function Home(){
  return(
      <UserButton afterSignOutUrl="/"></UserButton>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Home />
        {children}
      </ClerkProvider>
    </html>
  )
}