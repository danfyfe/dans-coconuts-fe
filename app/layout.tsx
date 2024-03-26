import Providers from '@/context';
import '../styles/globals.css';
import Navigation from '@/components/core/navigation';
import LandscapeContainer from '@/components/core/containers/landscape-container';

interface RootLayout {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayout) => (
	<Providers>
		<html lang="en">
			<body>
				<main id="main-content" className="relative overflow-hidden h-screen">
					<Navigation />
					<LandscapeContainer>
						{children}
					</LandscapeContainer>
				</main>
			</body>
		</html>
	</Providers>
);

export default RootLayout;
