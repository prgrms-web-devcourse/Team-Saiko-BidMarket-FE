import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: SEOProps) => {
  return (
    <Head>
      <title>{title} | BidMarket</title>
      <meta
        name="description"
        content={description || '비딩을 통한 현명한 중고 거래'}
      />
      <meta property="og:title" content={title || '비드마켓'} />
      <meta
        property="og:description"
        content={description || '비딩을 통한 현명한 중고 거래'}
      />
      <meta property="og:image" content={image || '/svg/bidMarket.svg'} />
    </Head>
  );
};

export default SEO;
