interface productFormProps {
  title: string;
  minimumPrice: number;
  location: string;
  images: string;
  category: string;
  description: string;
}

const productFormValidation = ({
  title,
  minimumPrice,
  location,
  images,
  category,
  description,
}: productFormProps) => {
  const error: {
    title?: string;
    minimumPrice?: string;
    location?: string;
    category?: string;
    images?: string;
    description?: string;
  } = {};
  if (!title.trim()) {
    error.title = '상품 제목을 입력해주세요.';
  }

  if (images.length === 0) {
    error.images = '상품 이미지를 넣어주세요.';
  }

  if (minimumPrice === 0) {
    error.minimumPrice = '금액을 입력해주세요.';
  }

  if (minimumPrice && minimumPrice < 1000) {
    error.minimumPrice = '1000원 이상 입력 가능합니다.';
  }

  if (minimumPrice && minimumPrice % 100 !== 0) {
    error.minimumPrice = '100원 단위로 입력 가능합니다.';
  }

  if (minimumPrice > 10000000) {
    error.minimumPrice = '1000만원 이상 입력할 수 없습니다.';
  }

  if (!location.trim()) {
    error.location = '희망 거래지역을 입력해주세요.';
  }

  // if (category === '') {
  //   error.category = '카테고리를 선택해주세요.';
  // }

  if (!description.trim()) {
    error.description = '상세 내용을 입력해주세요.';
  }

  return error;
};

export default productFormValidation;
