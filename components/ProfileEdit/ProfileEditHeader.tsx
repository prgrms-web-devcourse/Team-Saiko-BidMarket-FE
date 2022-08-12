import { Header, GoBackIcon, HeaderTitle } from 'components/common';

const ProfileEditHeader = () => (
  <Header
    leftContent={<GoBackIcon />}
    middleContent={<HeaderTitle title="프로필 수정" />}
  ></Header>
);

export default ProfileEditHeader;
