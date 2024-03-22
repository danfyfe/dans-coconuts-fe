import { WeatherProvider } from '@/context/WeatherProvider';
import '../styles/globals.css';
// import { VerifiedDanProvider } from '@/context/VerifiedDanProvider';
import Navigation from '@/components/core/navigation';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayout) => (
	<html lang="en">
		<body>
			<WeatherProvider>
				<main id="main-content" className="relative overflow-hidden h-screen">
					{/* <VerifiedDanProvider> */}
						<Navigation />
						{children}
					{/* </VerifiedDanProvider> */}
				</main>
			</WeatherProvider>
		</body>
	</html>
);

export default RootLayout;
