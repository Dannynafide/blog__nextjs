import Head from 'next/head';
import Image from 'next/image';

import ButtonBack from 'components/ButtonBack/ButtonBack';
import Layout from 'components/Layout';
import playChessImg from 'public/playChess.jpg';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section>
        <div className={'bg-gradient border-b border-solid border-black'}>
          <div className="px-10">
            <ButtonBack />

            <h1 className="uppercase text-3xl font-bold my-8">
              Discover our company story
            </h1>

            <div className="flex justify-center">
              <Image
                src={playChessImg}
                width={800}
                priority={true}
                alt="Picture of the author"
                className="about-page__main-image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center px-10 my-10">
          <div className="md:w-3/5 text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. <br /> <br />
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
            <br />
            <h2 className="text-xl font-bold">
              Sed do eiusmod tempor incididunt ut labore et dolore
            </h2>
            <br />
            <p>
              Magna aliqua quis ipsum suspendisse ultrices gravida. Risus
              commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
