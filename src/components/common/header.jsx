import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDownMenuItem from './dropDownMenuItem'
import {useEffect, useState} from 'react'

export const menuTop = [
  {
    title:'개발',
    texts:['웹 개발','서버 개발자','프론트엔드 개발자','자바개발자','소프트웨어 개발자','안드로이드 개발자','iOS 개발자','데이터 엔지니어'],
  },{
    title:'',
    texts:['파이썬 개발자','Node.js 개발자','DevOps / 시스템 관리자','시스템, 네트워크 관리자','C,C++ 개발자','머신러닝 엔지니어','데이터 사이언티스트','더보기']
  },
  {
    title:'경영&·비지니스',
    texts:['서비스 기획자','사업개발·기획자','PM·PO','전략 기획자','운영 매니저','데이터 분석가','경영지원','더보기']
  },
  {
    title:'마케팅&·광고',
    texts:['마케터','디지털 마케터','퍼포먼스 마케터','콘텐츠 마케터','마케팅 전략 기획자','브랜드 마케터','광고 기획자(AE)','더보기']
  },
  {
    title:'디자인',
    texts:['UX 디자이너','UI,GUI 디자이너','웹 디자이너','그래픽 디자이너','모바일 디자이너','BI/BX 디자이너','광고 디자이너','더보기']
  },
  {
    title:'영업',
    texts:['기업영업','외부영업','영업 관리자','기술영업','주요고객사 담당자','해외영업','솔루션 컨설턴트','더보기']
  },


]
export const menuBotton = [
  {
    title:'고객서비스·리테일',
    texts:['MD','CS 매니저','서비스 운영','CS 어드바이저','리테일 MD','패션 MD','CRM 전문가','더보기']
  },
  {
    title:'인사',
    texts:['인사담당','리크루터','조직문화','평가·보상','헤드헌터','HRD','HRBP','더보기']
  },
  {
    title:'미디어',
    texts:['콘텐츠 크리에이터','PD','영상 편집가','에디터','비디오 제작','작가','통·번역','더보기']
  },
  {
    title:'게임제작',
    texts:['게임 기획자','게임 클라이언트 개발자','모바일 게임 개발자','게임 아티스트','게임 그래픽 디자이너','유니티 개발자','게임 서버 개발자','더보기']
  },
  {
    title:'금융',
    texts:['재무 담당자','회계 담당자','투자·증권','IR','재무 분석가','애널리스트','자산운용가']
  },{
    title:['엔지니어링·설계','의료·제약·바이오','물류·무역','제조·생산','식·음료','교육','법률·법집행기관','건설·시설','공공·복지'],
    texts: ''
  },

]

const Header = ({ page }) => {
  const [fixed, setFixed] = useState(false);
  const [hover, setHover] = useState(false);
  const [scroll, setScroll] = useState(0);
  const updateScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    scroll >= 50 ? setFixed(true) : setFixed(false);
  });
  const mouseOver = () => {
    setHover(true);
  }
  const mouseOut = () => {
    setHover(false);
  }

    return (
      <Headers>
        <HeaderBox className={fixed ? 'fixed' : null}>
          <HeaderCenterBox>
            <LogoBox><p>wanted</p></LogoBox>
            <LinkListBox>
              <LinkList onMouseOver={() => mouseOver()} onMouseOut={() => mouseOut()}>
                <Link to='/exploring'>탐색</Link>
              </LinkList>
              <LinkList><Link to=''>커리어 성장</Link></LinkList>
              <LinkList><Link to=''>직군별 연봉</Link></LinkList>
              <LinkList><Link to=''>이력서</Link></LinkList>
              <LinkList><Link to=''>매치업</Link></LinkList>
              <LinkList><Link to=''>프리랜서</Link></LinkList>
              <LinkList><Link to=''>AI 합격예측</Link></LinkList>
            </LinkListBox>
            <FlexRightBox>
              <SearchBox>
                <UserText>
                <svg viewBox="0 0 18 18" width='18' height='18'>
                    <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z" />>
                </svg>
                </UserText>
              </SearchBox>
              <UserBox>
                <UserText>회원가입/로그인</UserText>
              </UserBox>
              <Line />
              <CompanyBox>
                <CompanyService>기업 서비스</CompanyService>
              </CompanyBox>
            </FlexRightBox>
          </HeaderCenterBox>
        </HeaderBox>
        <DropDownMenuBox onMouseOver={() => mouseOver()} onMouseOut={() => mouseOut()}
                         style={{height:`${hover ? '620px' : '0'}`}}
                         className={fixed ? 'drop' : null}
        >
          <DropDownMenu>
            <MenuListBox>
              {menuTop.map((v,i) =>
                <DropDownMenuItem props={v} key={i}/>
              )}
            </MenuListBox>
            <MenuListBox>
              {menuBotton.map((v,i) =>
                <DropDownMenuItem props={v} key={i}/>
              )}
            </MenuListBox>
          </DropDownMenu>
        </DropDownMenuBox>
        <Modal style={{display:`${hover ? 'block' : 'none'}`}}/>
      </Headers>
    )
}

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & .fixed{
    z-index: 9999;
    position: fixed;
    top: 0px;
  }
  &  .drop{
    position: fixed;
    z-index: 9999;
  }
`
const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`
const HeaderCenterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1060px;
  width: 100%;
  height: 100%;
  
`

// Logo Box(FlexLeft)
const LogoBox = styled.div`
  font-size: 25px;
  line-height: 17px;
  font-weight: 800;
  text-decoration: none solid rgba(51,51,51);
`

// Link Box(Flex Center)
const LinkListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & .firstChild:hover .dropdown{
    display: block;
  }
`
const LinkList = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  &:hover{
    border-bottom: 2px solid #999;
  }
`

// userBox(Flex Right)
const FlexRightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
`
const UserBox = styled.div`
  display: flex;
  justify-content: center;
`
const UserText = styled.div`
  height: 100%;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
`
const CompanyBox = styled.div`
  display: flex;
  justify-content: center;
`
const Line = styled.div`
  display: block;
  content: "";
  width: 1px;
  height: 10px;
  background-color: #e1e2e3;
  margin: auto 10px;
`
const CompanyService = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
`

const DropDownMenuBox = styled.div`
  overflow: hidden;
  width: 100%;
  justify-content: center;
  background: #fff;
  display: flex;
  z-index: 9999;
  position: absolute;
  top: 50px;
  height: 620px;
`

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: left;
  max-width: 1060px;
  width: 100%;
  height: 100%;
`
const MenuListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const Modal = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;
  z-index: 1;
  background: rgba(0,0,0,.4);
  transition: .5s;
`


export default Header
