import '../styles/globals.css';
import { WeatherProvider } from '@/context/WeatherProvider';
import Navigation from '@/components/core/navigation';
import { CoconutProvider } from '@/context/CoconutProvider';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayout) => (
	<WeatherProvider>
		<CoconutProvider>
				<html lang="en">
					<body>
						<main id="main-content" className="relative overflow-hidden h-screen">
							<Navigation />
							{children}
						</main>
					</body>
				</html>
		</CoconutProvider>
	</WeatherProvider>
);

export default RootLayout;
