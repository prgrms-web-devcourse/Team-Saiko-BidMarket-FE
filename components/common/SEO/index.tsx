import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => {
  const titleContent = `${title} | Bidmarket`;
  return (
    <Head>
      <title>{titleContent}</title>
    </Head>
  );
};

export default SEO;
