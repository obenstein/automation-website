import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataSigil - AI-Powered Workflow Automation",
  description:
    "We build AI-powered workflow automation with inherent flexibility, designed for technical professionals. Expert integration with n8n, Zapier, Make, and more.",
  keywords: [
    "AI automation",
    "workflow automation",
    "n8n",
    "Zapier",
    "Make",
    "AI agents",
    "chatbots",
    "RAG",
    "automation services",
  ],
  authors: [{ name: "DataSigil" }],
  openGraph: {
    title: "DataSigil - AI-Powered Workflow Automation",
    description:
      "We build AI-powered workflow automation with inherent flexibility, designed for technical professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
