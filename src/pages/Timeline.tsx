import styled from 'styled-components';
import cubes from '../assets/images/cubes-blanket.webp';
import avatar from '../assets/images/my-avatar.jpeg';
import Avatar from '../components/Avatar';
import NavbarDesktop from '../components/NavbarDesktop';
import Container from '../components/Container';
import MainContent from '../layout/MainContent';

import theme from '../styles/Theme';
import { useEffect, useState } from 'react';
import NavbarMobile from '../components/NavbarMobile';

const Timeline = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 993;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Container>
      <Background>
        <ProfileInfo>
          <Avatar src={avatar} $avaType="lg" />
          <Info>
            <Name>Natalia Yarmolinskaya </Name>
          </Info>
        </ProfileInfo>
        {width >= breakpoint && <NavbarDesktop />}
      </Background>
      {width < breakpoint && <NavbarMobile />}
      <MainContent />
    </Container>
  );
};

const Background = styled.div`
  background: url(${cubes});
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: center;
  position: relative;
  grid-area: bg;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 240px;
  position: absolute;
  top: 210px;
  z-index: 99;

  @media ${theme.media.laptop} {
    left: 50%;
    transform: translate(-50%);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Name = styled.h3`
  padding: 14px 0 14px;
  color: ${theme.colors.accentSecondary};
  font-weight: 500;
  font-size: 2.2rem;
  text-align: center;
  word-wrap: break-word;
`;

export default Timeline;
