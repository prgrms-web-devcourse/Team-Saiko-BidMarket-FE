import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: SEOProps) => {
  const titleContent = `${title} | Bidmarket`;
  return (
    <Head>
      <title>{titleContent}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <meta
        name="description"
        content={description || '비딩을 통한 현명한 중고 거래'}
      />
      <meta property="og:title" content={title || '비드마켓'} />
      <meta
        property="og:description"
        content={description || '비딩을 통한 현명한 중고 거래'}
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
