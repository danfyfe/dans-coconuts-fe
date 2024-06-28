import Providers from '@/context';
import '../styles/globals.css';
import Menus from '@/components/navigation';
import LandscapeContainer from '@/components/core/containers/landscape-container';
import { Roboto_Condensed } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';

interface RootLayout {
	children: React.ReactNode;
}

// font optimization from Next
const roboto = Roboto_Condensed({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
});

const RootLayout = ({ children }: RootLayout) => (
	<Providers>
		<AntdRegistry>
			<html lang="en" className={roboto.className}>
				<body>
					<main
						id="main-content"
						className="
							relative overflow-hidden h-[100dvh]
							scrollbar-thumb-coconut_brown
							scrollbar-track-sand_day
						"
					>
						<Menus />
						{/* <CoconutDan /> */}
						<LandscapeContainer>
							{children}
						</LandscapeContainer>
					</main>
					<div id="modal-root"></div>
					<div id="tour-root"></div>
				</body>
			</html>
		</AntdRegistry>
	</Providers>
);

export default RootLayout;
