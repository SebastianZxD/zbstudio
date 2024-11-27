import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Cases of Success",
  description: "Detailed explanation on tackling past problems with profesionalism and a problem solving mindset.",
};

export default function CasesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full">
          {children}
      </body>
    </html>
  );
}
