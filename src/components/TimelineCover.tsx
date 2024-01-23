import styled from 'styled-components';
import { user } from '../user';
import { useWindowSize } from '../helpers/useWindowSize';

import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import ProfileInfo from './ProfileInfo';

const TimelineCover = () => {
  const windowSize = useWindowSize();
  const breakpoint = 993;
  return (
    <Cover>
      <Background>
        <ProfileInfo userName={user.userName} avatar={user.avatar} />
        {windowSize >= breakpoint && <NavbarDesktop />}
      </Background>
      {windowSize < breakpoint && <NavbarMobile />}
    </Cover>
  );
};

const Cover = styled.div`
  grid-area: cover;
`;

const Background = styled.div`
  background: url(${user.background});
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default TimelineCover;
