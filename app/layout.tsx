import { FC } from 'react';
import '../styles/globals.css';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout: FC<RootLayout> = ({ children }) => (
	<html lang="en">
			<body>
					<main id="main-content" className="overflow-hidden h-screen">
						{children}
					</main>
			</body>
	</html>
);

export default RootLayout;
