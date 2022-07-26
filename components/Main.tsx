import tw from 'tailwind-styled-components/dist/tailwind';
import Minting from './Minting';

const Main = () => {
	return (
		<Container>
			<VideoContainer>
				<Video src='/videos/club.mp4' muted='true' autoplay='true' loop='true' />
			</VideoContainer>
			<Minting />
		</Container>
	);
};

export default Main;

const Container = tw.div`
  flex
  flex-col
  items-center
`;

const VideoContainer = tw.div`
  max-w-screen-lg
`;

const Video = tw.video``;
