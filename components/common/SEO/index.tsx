import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => {
  return (
    <Head>
      <title>{title} | Bidmarket</title>
    </Head>
  );
};

export default SEO;
