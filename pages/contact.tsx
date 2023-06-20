import Head from 'next/head';
import Image from 'next/image';

import ButtonBack from 'components/ButtonBack/ButtonBack';
import Layout from 'components/Layout';
import playChessImg from 'public/playChess.jpg';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={'bg-gradient px-10 pb-2'}>
        <ButtonBack />

        <h1 className="text-center text-4xl md:text-5xl mb-16 mt-16 font-bold uppercase">
          The fastest way
          <br /> to contact us
        </h1>

        <div className="flex justify-center mb-16 mt-16">
          <p className="md:w-3/4 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>

        <div className="flex justify-center mt-16 mb-8">
          <button className="flex items-center px-14 py-3 font-bold text-xl border-2 border-solid border-black rounded-md hover:bg-teal-400">
            Write an email
          </button>
        </div>
      </div>

      <div className="bg-main-color overflow-hidden">
        <Image
          src={playChessImg}
          alt="Picture of the author"
          priority={true}
          className="contact-page__main-image"
        />
      </div>
    </Layout>
  );
}
