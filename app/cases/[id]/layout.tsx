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
    <html lang="en">
      <body className="font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <div className="container relative mx-auto max-w-3xl md:px-4 py-10 px-1 lg:px-8 text-white">
                {children}
            </div>
          </div>
      </body>
    </html>
  );
}
