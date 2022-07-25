import Image from 'next/image';
import tw from 'tailwind-styled-components/dist/tailwind';

const Header = () => {
	return (
		<Container>
			<HeaderContainer>
				<Image src='/images/logo.png' width={250} height={50} alt='logo' />
			</HeaderContainer>
		</Container>
	);
};

export default Header;

const Container = tw.div`
  flex
  justify-center
  h-20
`;

const HeaderContainer = tw.div``;
