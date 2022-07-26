import type { NextPage } from 'next';
import Head from 'next/head';
import tw from 'tailwind-styled-components/dist/tailwind';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>D2YBORED</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Main />
			<Footer />
		</Container>
	);
};

const Container = tw.div`
  w-full
  h-screen
  bg-black
  text-gray-100
`;

export default Home;
