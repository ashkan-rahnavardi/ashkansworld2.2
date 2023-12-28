import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomCursorManager from './_components/_cursor/context/manager';
import CustomCursor from './_components/_cursor/index';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CustomCursorManager>
					<CustomCursor />
					{children}
				</CustomCursorManager>
			</body>
		</html>
	);
}
