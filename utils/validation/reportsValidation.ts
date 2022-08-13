interface reportsProps {
  reason: string;
}

const reportsValidation = ({ reason }: reportsProps) => {
  const error: { reason?: string } = {};

  if (!reason) {
    error.reason = '신고 사유를 입력해주세요!';
  }

  return error;
};

export default reportsValidation;
