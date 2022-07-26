import tw from 'tailwind-styled-components/dist/tailwind';

const Minting = () => {
	return (
		<Container>
			<Mint>
				<TitleContainer>
					<Title>
						Welcome to <br /> the D2YBORED <br /> Yath Club
					</Title>
				</TitleContainer>
				<ButtonContainer>
					<FilledButton>Connect Wallet</FilledButton>
				</ButtonContainer>
				<hr className='mt-4' />
			</Mint>
		</Container>
	);
};

export default Minting;

const Container = tw.div`
	max-w-screen-lg
	w-full
	mt-[-180px]
	z-50
`;

const Mint = tw.div`
	max-w-screen-sm
	w-1/3
	bg-black
	p-4
	z-50
	flex
	flex-col
`;

const TitleContainer = tw.div`
	flex
`;

const Title = tw.h2`
	uppercase
	text-3xl
	italic
	font-bold
`;

const ButtonContainer = tw.div`
	flex
	mt-2
`;

const FilledButton = tw.button`
	bg-[#bfc500]
	hover:bg-white
	font-bold
	py-2
	px-4
	rounded
	text-black
	uppercase
	grow
`;
