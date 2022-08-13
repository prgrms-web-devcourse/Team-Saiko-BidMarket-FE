interface reportsProps {
  reportContent: string;
}

const reportsValidation = ({ reportContent }: reportsProps) => {
  const error: { reportContent?: string } = {};

  if (!reportContent) {
    error.reportContent = '신고 사유를 입력해주세요!';
  }

  return error;
};

export default reportsValidation;
