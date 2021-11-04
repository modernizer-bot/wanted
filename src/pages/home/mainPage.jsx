import styled from 'styled-components';
import MainPageSections from '../../components/common/mainPageSections'

const MainPage = () => {
  const sections = [
    {
      img:'https://static.wanted.co.kr/images/newintro/001.webp',
      titleUp:'더 나은 커리어를 위한',
      titleDown:'새로운 기회',
      textUp:'나에게 딱 맞는 회사를 찾거나',
      textDown:'나에게 딱 맞는 회사가 커리어를 제안합니다.',
    }, {
      img:'https://static.wanted.co.kr/images/newintro/002.webp',
      titleUp:'실력있는 사람들과',
      titleDown:'함께하는 성장',
      textUp:'강연&밋업에서 이야기를 듣고 공유하여',
      textDown:'함께 성장하는 기회를 발견합니다',
    }, {
      img:'https://static.wanted.co.kr/images/newintro/003.webp',
      titleUp:'원티드와 요즘 직장인이',
      titleDown:'만드는 행복',
      textUp:'직장인의 행복을 위한 다양한 이벤트에 참여하고,',
      textDown:'일상 속 여유를 질기기도 합니다.',
    },
  ]
  return(
    <MainPageBox>
      <MainPageBackground>
        <MainPageTextBox>
          <MainPageTitle>직장인의 커리어 여정을<br/> 행복하게, 원티드</MainPageTitle>
          <MainPageText>지금 원티드와 커리어 여정을 시작하세요.</MainPageText>
          <MainPageBtn>지금 시작하기</MainPageBtn>
        </MainPageTextBox>
        </MainPageBackground>
      <MainPageSections props={sections[0]}/>
      <SectionLineBox>
        <SectionLine src="https://static.wanted.co.kr/images/newintro/dot.png" alt="line" />
      </SectionLineBox>
      <MainPageSections props={sections[1]} />
      <SectionLineBox>
        <SectionLine src="https://static.wanted.co.kr/images/newintro/dot.png" alt="line" />
      </SectionLineBox>
      <MainPageSections props={sections[2]} />
      <StartWantedBox>
        <StartWantedTextBox>
          <StartWantedTitle>커리어 성장과 행복을 위한 여정,<br/>지금 원티드에서 시작하세요.</StartWantedTitle>
          <StartWantedText>200만 직장인과 10,000개 기업이<br/>원티드와 커리어 여정을 함께 합니다.</StartWantedText>
          <MainPageBtn>지금 시작하기</MainPageBtn>
        </StartWantedTextBox>
      </StartWantedBox>
    </MainPageBox>
  );
}

const MainPageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainPageBackground = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 550px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: 50%/cover no-repeat #eee url(https://static.wanted.co.kr/images/newintro/pc.webp);
`
const MainPageTextBox = styled.div`
  width: 940px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`
const MainPageTitle = styled.div`
  font-size: 48px;
  line-height: 62px;
  margin-bottom: 20px;
  font-weight: 600;
`
const MainPageText = styled.div`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 30px;
  font-weight: 500;
`
const MainPageBtn = styled.button`
  height: 64px;
  width: 230px;
  border-radius: 32px;
  background-color: #3a68f9;
  color: #fff;
  font-size: 20px;
  line-height: 17px;
  border: 0;
`
const SectionLineBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SectionLine = styled.img`
  width: 4px;
`
const StartWantedBox = styled.div`
  position: relative;
  display: -webkit-box;
  display: flex;
  width: 100%;
  height: 520px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding-top: 140px;
  text-align: center;
  color: #fff;
  background: 50%/cover no-repeat #eee url(https://static.wanted.co.kr/images/newintro/foot_pc.webp);
`
const StartWantedTextBox = styled.div`
`
const StartWantedTitle = styled.div`
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 20px;
  font-weight: 600;
`
const StartWantedText = styled.div`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 30px;
  font-weight: 500;
`

export default MainPage;
