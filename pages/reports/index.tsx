import type { NextPage } from 'next';

import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import { ProductReport } from 'components/Report';

const Reports: NextPage = () => {
  return (
    <>
      <SEO title="게시글 신고" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="게시글 신고" />}
      />
      <ProductReport />
    </>
  );
};

export default Reports;
