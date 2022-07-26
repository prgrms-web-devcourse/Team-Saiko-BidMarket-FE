import Head from 'next/head';

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title} | Bidmarket</title>
    </Head>
  );
};

export default Seo;
