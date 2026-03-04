import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual de Sobrevivência no Marketing Para Médicos — GrowDoc",
  description:
    "11 situações que você precisa saber para ter resultado e não ser enrolado no marketing médico.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
