import '../styles/globals.css';
import Navigation from '@/components/navigation';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayout) => (
	<html lang="en">
			<body>
					<main id="main-content" className="overflow-hidden h-screen">
						<Navigation />
						{children}
					</main>
			</body>
	</html>
);

export default RootLayout;
