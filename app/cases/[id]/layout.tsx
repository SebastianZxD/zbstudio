import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Cases of Success",
  description: "Detailed explanation on tackling past problems with profesionalism and a problem solving mindset.",
};

export default function CaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-black-100">
            <main className="flex-1">
              <div className="container relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 text-white">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
