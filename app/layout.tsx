import { WeatherProvider } from '@/context/WeatherProvider';
import '../styles/globals.css';
// import { VerifiedDanProvider } from '@/context/VerifiedDanProvider';
import Navigation from '@/components/core/navigation';
import { CoconutProvider } from '@/context/CoconutProvider';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayout) => (
	<html lang="en">
		<body>
			<WeatherProvider>
				<CoconutProvider>
					<main id="main-content" className="relative overflow-hidden h-screen">
						{/* <VerifiedDanProvider> */}
							<Navigation />
							{children}
						{/* </VerifiedDanProvider> */}
					</main>
				</CoconutProvider>
			</WeatherProvider>
		</body>
	</html>
);

export default RootLayout;
