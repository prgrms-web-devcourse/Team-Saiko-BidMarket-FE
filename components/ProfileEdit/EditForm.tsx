import { Flex, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';

import useForm from 'hooks/useForm';

import { NicknameInput, SubmitButton } from '.';
import ProfileImageUpload from './ProfileImageUpload';

interface EditProfileFormProps {
  nickname: string;
  profileImageUrl: string;
}

const EditProfileForm = ({
  nickname,
  profileImageUrl,
}: EditProfileFormProps) => {
  const [prevNickname, setPrevNickname] = useState(nickname);
  const [prevProfileImage, setPrevProfileImage] = useState(profileImageUrl);
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { nickname, profileImage: profileImageUrl },
    // TODO: api로 닉네임, 사진(S3 주소값??) 보내주기
    onSubmit: async ({ nickname, e }) => {
      const fakeSubmit = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            alert(
              `onSubmit!\n nickname: ${nickname} \n profileImage: ${e.target.profileImage.dataset.uploadedUrl}`
            );
            resolve('Success');
          }, 1500);
        });

      await fakeSubmit();
      setPrevNickname(nickname);
      setPrevProfileImage(e.target.profileImage.value);
    },
    validate: ({ nickname, profileImage }) => {
      const error: { nickname?: string } = {};

      if (!nickname) {
        error.nickname = '수정할 닉네임을 입력해주세요.';
      }

      if (prevNickname === nickname && prevProfileImage === profileImage) {
        error.nickname = '닉네임이 변경 안됐습니다.';
      }

      return error;
    },
  });

  // TODO: error(빈값, 길이제한?, 닉네임 정의 필요) 적절하게 렌더링 해주기. (글자 vs 모달)
  return (
    <form style={{ width: '100%', height: '100%' }} onSubmit={handleSubmit}>
      <Flex
        width="100%"
        height="100%"
        direction="column"
        alignItems="center"
        gap="48px"
      >
        <ProfileImageUpload
          name="profileImage"
          profileImageUrl={profileImageUrl}
          onChange={handleChange}
        />
        <FormControl
          flexGrow="1"
          display="flex"
          flexDirection="column"
          height="20%"
          isInvalid={(errors.nickname as string)?.length > 0 ? true : false}
        >
          <NicknameInput
            inputName="nickname"
            nickname={nickname}
            onChange={handleChange}
          />
          <FormErrorMessage paddingLeft="19px">
            {errors.nickname as string}
          </FormErrorMessage>
        </FormControl>

        <SubmitButton isLoading={isLoading} loadingText={'전송 중'} />
      </Flex>
    </form>
  );
};

export default EditProfileForm;
