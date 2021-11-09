import styled from 'styled-components';
import Header from '../../components/common/header'
import {PageWrap} from '../../components/common/styled'
import Footer from '../../components/common/footer'
import CompanysItem from '../../components/common/companysItem'
import {RiBookmarkLine} from 'react-icons/ri'
import {AiTwotoneHeart} from 'react-icons/ai'
import {BsShare} from 'react-icons/bs'
const DetailsCompany = () => {
  return (
    <>
      <Header />
      <PageMarginBox>
        <MainSectionBox>
          <SectionLeft>
            <SliderImgBox>
              <SliderImg />
            </SliderImgBox>
            <SectionTitleBox>

            </SectionTitleBox>
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
      <CompanysListBox>
        <CompanysList>
        <CompanysItem />
          <CompanysItem></CompanysItem>
          <CompanysItem></CompanysItem>
          <CompanysItem></CompanysItem>
          <CompanysItem></CompanysItem>
          <CompanysItem></CompanysItem>
          <CompanysItem></CompanysItem>
          <CompanysItem></CompanysItem>
        </CompanysList>
      </CompanysListBox>
      <Footer />
    </>
  );
}
const PageMarginBox = styled(PageWrap)`
  margin: 0 auto;
  padding: 20px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const MainSectionBox = styled.div`
  width: 100%;
  max-width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SectionLeft = styled.div`
  display: inline-block;
  width: calc(100% - 360px);
  height: 500px;
  vertical-align: top;
`
const SectionRight = styled.div`
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

const SliderImgBox = styled.div`
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 490px;
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
const SectionTitleBox = styled.div`
`
export default DetailsCompany;


