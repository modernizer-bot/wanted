import styled from 'styled-components';
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import CompanysItem, {CompanySubText, ResponseRate} from '../../components/common/companysItem'
import {RiBookmarkLine} from 'react-icons/ri'
import {AiTwotoneHeart} from 'react-icons/ai'
import {BsShare} from 'react-icons/bs'
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from 'react-icons/md';



const DetailsCompany = () => {
  const onClick = () => {
    const move = document.getElementById('moveImg');
    console.log(move);
    // transform: translate(-100%);
    move.style.transform='translate(-50%)';
  }
  return (
    <Page>
      <Header />
      <PageMarginBox>
        <MainSectionBox>
          <SectionLeft>
            <ImgContainer>
              <ImgLeftBtnBox onClick={onClick}><MdOutlineArrowBackIos/></ImgLeftBtnBox>
              <SliderBtn>
                <SliderImgBox id='moveImg'>
                <ImgBox className='imgs'>
                  <SliderImg/>
                </ImgBox>
                <ImgBox className='imgs'>
                  <SliderImg />
                </ImgBox>
                <ImgBox className='imgs'>
                  <SliderImg />
                </ImgBox>
              </SliderImgBox>
              </SliderBtn>
              <ImgRightBtnBox onClick={onClick}><MdOutlineArrowForwardIos/></ImgRightBtnBox>
            </ImgContainer>
            <SectionTitleBox>
              <SectionTitle>Product Owner</SectionTitle>
              <CompanyTextBox>
                <CompanyText>서클 플랫폼</CompanyText>
                <ResponseRate style={{marginLeft:'10px'}}>응답률 매우 높음</ResponseRate>
                <CompanySubText style={{marginLeft:'10px'}}>서울·한국</CompanySubText>
              </CompanyTextBox>
              <TagesBox>
                <Tages>#스톡옵션</Tages>
                <Tages>#스타트업</Tages>
                <Tages>#커피</Tages>
                <Tages>#간식</Tages>
                <Tages>#IT.컨텐츠</Tages>
              </TagesBox>
            </SectionTitleBox>
            <CompanyDetail>
              서클플랫폼은 데이터 기반의 플랫폼 비즈니스를 하고 있는 스타트업 입니다. <br/><br/>
              데이터를 많이 이야기 하지만 실제 비즈니스로 연결되는 프러덕은 찾아보기 어렵습니다.<br/><br/>
              저희는 데이터를 비즈니스로 연결하는데 많은 관심을 가지고 있습니다.<br/><br/>
              주요업무<br/><br/>
              서비스 비전 정의 및 전략 로드맵 설계<br/><br/>
              서비스 요구사항 정의, 서비스 기획, 백로그 우선순위 관리<br/><br/>
              서비스 개선 기획, 개발 협업 프로세스 진행<br/><br/>
              데이터에 기반한 컨텐츠 설계<br/><br/>
              온라인 셀러를 위한 서비스 설계<br/><br/>
              플랫폼 비즈니스 설계<br/><br/>
              자격요건<br/><br/>
              고객 중심, 데이터 중심의 사고를 바탕으로 문제 해결 능력을 갖춘분<br/><br/>
              o2o, 데이터 비즈니스 기획을 경험하신분<br/><br/>
              기술적인 제약을 이해하고 결정 시점의 합리적 의사결정 및 문제 해결 능력을 갖추신 분<br/><br/>
              2년 이상의 서비스 기획, 프로덕트 오너 실무 경험이 있으신 분<br/><br/>
              우대사항<br/><br/>
              o2o 및 데이터 서비스 기획 및 PO 경력<br/><br/>
              애자일 방식의 스프린트 진행으로 빠르고 유연한 프로젝트 리딩 경험<br/><br/>
              테스트를 통한 사용자 중심의 Product 개선 경험<br/><br/>
              Slack, Jira, Confluence 사용 경험<br/><br/>
              혜택 및 복지<br/>
              - 자율출퇴근제<br/>
              - 스톡옵션<br/>
              - 사이닝 보너스<br/>
              - 맛있는 간식 및 커피 무한 제공<br/>
              - 최신형 장비 지원. 맥북프로, 윈도우 중 선택<br/>
              - 업무연관 도서구입/세미나/온오프라인 강의수강 지원<br/>
            </CompanyDetail>
            <hr style={{borderTop: '1px solid #eee'}}/>
            <MapSectionBox>
              <MapTextBox>
                <MapTitle>마감일</MapTitle>
                <MapText>상시</MapText>
              </MapTextBox>
              <MapTextBox>
                <MapTitle>근무지역</MapTitle>
                <MapText>강남구 테헤란로 427, 위워크 타워 7층 101호</MapText>
              </MapTextBox>
            </MapSectionBox>
          </SectionLeft>
          <SectionRight>
            <Navigation>
              <NavigationTitle>채용보상금</NavigationTitle>
              <LinkBox><BsShare color={'#36f'} size={18}/></LinkBox>
              <NavigationTextBox>
                <NavigationTextList>
                <NavigationText>추천인</NavigationText>
                  <NavigationSubText>500,000원</NavigationSubText>
                </NavigationTextList>
              <NavigationTextList>
                <NavigationText>지원자</NavigationText>
                <NavigationSubText>500,000원</NavigationSubText>
              </NavigationTextList>
              </NavigationTextBox>
              <NavigationBtnBox>
                <NavigationBtn  style={{marginBottom: '10px'}}>
                  <RiBookmarkLine color={'#36f'} style={{marginRight:'5px'}}/>북마크하기</NavigationBtn>
                <NavigationBtn style={{color:'#fff', background:'#36f'}}>지원하기</NavigationBtn>
              </NavigationBtnBox>
              <IconBox>
                <LikeBtnBox>
                  <AiTwotoneHeart color={'#dbdbdb'} size={17}/>
                  1
                </LikeBtnBox>
                <UserBtn>
                </UserBtn>
              </IconBox>
            </Navigation>
          </SectionRight>
        </MainSectionBox>
      </PageMarginBox>
      <Footer />
    </Page>
  );
}
//<CompanysListBox>
//         <CompanysList>
//           <CompanysItem />
//           <CompanysItem></CompanysItem>
//           <CompanysItem></CompanysItem>
//           <CompanysItem></CompanysItem>
//           <CompanysItem></CompanysItem>
//           <CompanysItem></CompanysItem>
//           <CompanysItem></CompanysItem>
//           <CompanysItem></CompanysItem>
//         </CompanysList>
//       </CompanysListBox>










const Page =styled.div`
  width: 100%;
  height: 150vw;
`

const PageMarginBox = styled.div`
  margin: 0 auto;
  padding: 20px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`
const MainSectionBox = styled.div`
  width: 100%;
  max-width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SectionLeft = styled.div`
  width: calc(100% - 360px);
  height: 100%;
`
const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  top: 70px;
`
const Navigation = styled.div`
  position: fixed;
  width: 340px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  padding: 24px 20px;
`
const NavigationTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: normal;
  text-align: left;
  color: #333;
`
const LinkBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e1e2e3;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`
const NavigationTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 24px 0;
`
const NavigationTextList = styled.div`
  flex-grow: 1;
`
const NavigationText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #999;
  margin-bottom: 8px;
  line-height: 1.2;
`
const NavigationSubText = styled.div`
  font-size: 15px;
  color: #333;
  font-weight: 600;
`
const NavigationBtnBox = styled.div`
  width: 100%;
`
const NavigationBtn = styled.button`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: center;
  justify-content: center;
  align-content: stretch;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  border: 1px solid #36f;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  color: #36f;
  text-align: center;
`
// Company List
const CompanysListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CompanysList = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  `

const IconBox = styled.div`
  margin: 24px 0 0;
  height: 30px;
  display: flex;
  flex-direction: row;
`
const LikeBtnBox = styled.button`
  height: 30px;
  border-radius: 15px;
  border: 1px solid #e1e2e3;
  margin-right: 12px;
  padding: 0 15px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  position: relative;
  & svg{
    margin-right: 7px;
  }
`
const UserBtn = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #fff;
  z-index: 1;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://graph.facebook.com/2329473657134559/picture?height=300&width=300');
`

// Img Slider
const ImgContainer = styled.div`
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  overflow: hidden;
  height: 100%;
  max-height: 490px;
  display: flex;
  flex-direction: row;
`
const SliderBtn = styled.div`
  width: 100%;
  height: 100%;
`
const SliderImgBox = styled.div`
 height: 100%;
 width: 300%;
 display: flex;
 flex-direction: row;
`
const ImgBox =styled.div`
  height: 100%;
  flex-grow: 1;
  
`
const SliderImg = styled.div`
  background-image: url('https://static.wanted.co.kr/images/company/26068/enfu6cadipsddcad__1080_790.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #fbfbfb;
  background-size: 100%;
  padding-bottom: 35%;
  height: 100%;
`
const ImgLeftBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: absolute;
  z-index: 10;
  width: 50px;
  max-height: 488px;
  height: 100%;
  cursor: pointer;
  color: #b5b5b5;
`
const ImgRightBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: absolute;
  z-index: 10;
  width: 50px;
  max-height: 488px;
  height: 100%;
  cursor: pointer;
  left: calc(100% - 580px);
  color: #b5b5b5;
`
// Sections
const SectionTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 40px 0 30px;
`
const SectionTitle = styled.div`
  color: #333;
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 10px;
  word-break: keep-all;
  word-wrap: break-word;
`
const CompanyTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`
const CompanyText = styled.div`
  color: #333;
  line-height: 1.4;
`
const TagesBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-top: 20px;
`
const Tages = styled.a`
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 10px;
  padding: 9px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 25px;
`
const CompanyDetail = styled.div`
  display: block;
  text-align: left;
  margin-bottom: 80px;
  padding-right: 20px;
`

//Section Map
const MapSectionBox = styled.div`
  margin: 20px 0 40px;
  max-width: 1060px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`
const MapTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
`
const MapTitle = styled.div`
  color: #999;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
`
const MapText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`

export default DetailsCompany;


