import { VerifiedDanProvider } from '@/context/VerifiedDanProvider';
import '../styles/globals.css';
import Navigation from '@/components/core/navigation';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayout) => (
	<html lang="en">
		<body>
			<main id="main-content" className="relative overflow-hidden h-screen">
				<VerifiedDanProvider>
					{/* <Navigation /> */}
					{children}
				</VerifiedDanProvider>
			</main>
		</body>
	</html>
);

export default RootLayout;
