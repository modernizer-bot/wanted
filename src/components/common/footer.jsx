import styled from 'styled-components';
import {MdOutlineArrowDropDown} from 'react-icons/md';

const Footer = () => {
  return (
    <FooterBox>
      <CenterBox>
        <CategoryBox>
          <CategoryList>
            <LogoBox>
              <Logo src='https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted_black.png' />
            </LogoBox>
            <CategoryItem>기업소개</CategoryItem>
            <CategoryItem>이용약관</CategoryItem>
            <CategoryItem>개인정보 처리방침</CategoryItem>
            <CategoryItem>고객센터</CategoryItem>
          </CategoryList>
          <IconBox>
            <a href="https://www.instagram.com/wantedjobs.kr/">
              <Icons src='https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_instagram.png'/>
            </a>
            <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
              <Icons src='https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_youtube.png'/>
            </a>
            <a href="https://www.facebook.com/wantedkr">
              <Icons src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_facebook.png" />
            </a>
            <a href="https://blog.naver.com/wantedlab">
              <Icons src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_blog.png" />
            </a>
            <a href="https://pf.kakao.com/_XqCIxl">
              <Icons src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_kakao.png" />
            </a>
            <a href="https://post.naver.com/my.nhn?memberNo=18284175">
              <Icons src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_post.png" />
            </a>
            <a href="https://apps.apple.com/kr/app/id1074569961">
              <Icons src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_apple.png" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted">
              <Icons src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_google.png" />
            </a>
          </IconBox>
        </CategoryBox>
      </CenterBox>
      <CompanyBox>
        <TextBox>
          <p>(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호
            : 2020-서울송파-3147<br />유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 :
              299-86-00021 | 02-539-7118<br />© Wantedlab, Inc.</p>
        </TextBox>
        <LanguageBox>
          <LanguageBtnBox>
            <LanguageBtn>
              <option value="KR">한국 (한국어) </option>
              <option value="JP">日本 (日本語)</option>
              <option value="TW">臺灣 (中文)</option>
              <option value="WW">Worldwide (English)</option>
              <option value="SG">Singapore (English)</option>
            </LanguageBtn>
            <MdOutlineArrowDropDown className='icon'/>
          </LanguageBtnBox>
        </LanguageBox>
      </CompanyBox>
    </FooterBox>
  )
}

const FooterBox = styled.div`
  padding: 18px 0 65px;
  border-top: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`
const CenterBox = styled.div`
  max-width: 1060px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ececec;
`
const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const LogoBox = styled.div`
  margin-right: 50px;
`
const Logo = styled.img`
  width: 110px;
`
const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CategoryItem = styled.div`
  margin-right: 45px;
  font-size: 15px;
  line-height: 2.6;
  font-weight: 500;
  color: #3a3a3a;
`
const IconBox = styled.div`
  width: 270px;
`
const Icons = styled.img`
  margin-left: 14px;
`


const CompanyBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 0 0;
  width: 100%;
  max-width: 1060px;
`
const TextBox = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.66667em;
  color: #767676;
  width: calc(100% - 290px);
  margin-right: 40px;
  width: 100%;
`
const LanguageBox = styled.div`
`
const LanguageBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  background: #f2f4f7;
  height: 40px;
  border-radius: 5px;
  & .icon {
    font-size: 30px;
    color: #717171;
  }
`
const LanguageBtn = styled.select`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 2.1;
  color: #717171;
  padding: 0 45px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 500;
  background: url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/ico_KR.svg") no-repeat 20px;
  background-size: 24px;
`
const LanguageImg = styled.img`
  width: 24px;
  height: 17px;
`
export default Footer;
