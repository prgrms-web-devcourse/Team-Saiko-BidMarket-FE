const setToastInfo = (
  position: 'top',
  title: string,
  status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined
) => {
  const toastInfo = {
    position: position,
    title: title,
    status: status,
    duration: 1500,
    isClosable: true,
  };

  return toastInfo;
};

export default setToastInfo;
