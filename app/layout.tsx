import '../styles/globals.css';
import { WeatherProvider } from '@/context/WeatherProvider';
import { CoconutProvider } from '@/context/CoconutProvider';
import Navigation from '@/components/core/navigation';

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
