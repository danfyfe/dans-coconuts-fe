import Providers from '@/context';
import '../styles/globals.css';
import Navigation from '@/components/core/navigation';
import LandscapeContainer from '@/components/core/containers/landscape-container';
import CoconutDan from '@/components/coconut-dan';

interface RootLayout {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayout) => (
	<Providers>
		<html lang="en">
			<body>
				<main
					id="main-content"
					className="
						relative overflow-hidden h-screen
						scrollbar-thumb-coconut_brown scrollbar-track-sand_day
					"
				>
					<Navigation />
					{/* <CoconutDan /> */}
					<LandscapeContainer>
						{children}
					</LandscapeContainer>
				</main>
			</body>
		</html>
	</Providers>
);

export default RootLayout;
