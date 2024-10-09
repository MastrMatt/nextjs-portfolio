import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Matthew's Portfolio",
	description:
		"Modern & Minimal Portfolio, Powered by Next.js and Acertinity UI",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={quicksand.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
