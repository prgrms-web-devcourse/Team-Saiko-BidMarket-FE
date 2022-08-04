const priceFormat = (price: number) => {
  const numeralReg = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
  const numericValueOnly = price.toString().replaceAll(',', '');

  return numericValueOnly.replace(numeralReg, ',');
};

export default priceFormat;
