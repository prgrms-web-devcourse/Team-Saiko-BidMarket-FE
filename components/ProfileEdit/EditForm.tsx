import { Flex, FormControl, FormErrorMessage } from '@chakra-ui/react';

import { NicknameInput, SubmitButton } from '.';
import useForm from '../../hooks/useForm';
import ProfileImageUpload from './ProfileImageUpload';

interface EditProfileFormProps {
  nickname: string;
  profileImageUrl: string;
}

const EditProfileForm = ({
  nickname,
  profileImageUrl,
}: EditProfileFormProps) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { nickname: '', profile: '' },
    // TODO: api로 닉네임, 사진(S3 주소값??) 보내주기
    onSubmit: async ({ nickname, e }) => {
      const fakeSubmit = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            alert(
              `onSubmit!\n nickname: ${nickname} \n profile: ${e.target.profile.dataset.url}`
            );
            resolve('Success');
          }, 1500);
        });

      await fakeSubmit();
    },
    validate: ({ nickname }) => {
      const error: { nickname?: string } = {};

      if (!nickname) {
        error.nickname = '수정할 닉네임을 입력해주세요.';
      }

      return error;
    },
  });

  // TODO: error(빈값, 길이제한?, 닉네임 정의 필요) 적절하게 렌더링 해주기. (글자 vs 모달)
  return (
    <form style={{ width: '100%', height: '100%' }} onSubmit={handleSubmit}>
      <Flex width="100%" direction="column" alignItems="center" gap="48px">
        <ProfileImageUpload
          name="profile"
          profileImageUrl={profileImageUrl}
          onChange={handleChange}
        />
        <FormControl
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
