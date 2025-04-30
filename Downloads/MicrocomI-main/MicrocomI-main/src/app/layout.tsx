import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="pt-14">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 