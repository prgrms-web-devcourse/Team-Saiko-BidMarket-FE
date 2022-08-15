import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: SEOProps) => {
  const titleContent = `${title} | 비드마켓`;
  return (
    <Head>
      <title>{titleContent}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="content-type" content="text/html; charset=euc-kr" />
      <meta
        name="description"
        content={
          description ||
          '거래는 중고지만 경험은 새롭게! 비딩으로 기다리는 설렘을 느껴봐!'
        }
      />
      <meta property="og:url" content={'https://bidmarket.vercel.app/'} />
      <meta property="og:title" content={title || '비드마켓'} />
      <meta
        property="og:description"
        content={
          description ||
          '거래는 중고지만 경험은 새롭게! 비딩으로 기다리는 설렘을 느껴봐!'
        }
      />
      <meta
        property="og:image"
        content={
          image ||
          'https://user-images.githubusercontent.com/50071076/184589425-fc918624-3683-4e9c-824e-073ea6bdd60c.jpg'
        }
      />
    </Head>
  );
};

export default SEO;
