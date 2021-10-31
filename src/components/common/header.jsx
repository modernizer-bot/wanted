import styled from "styled-components"
import { Link } from "react-router-dom";

const Header = ({ page }) => {
    return (
        <HeaderBox>
          <HeaderCenterBox>
            <LogoBox><p>wanted</p></LogoBox>
            <LinkListBox>
              <LinkList><Link to=''>탐색</Link></LinkList>
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
    )
}

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
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
  
`
const LinkList = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  
  &:hover{
    border-bottom: 2px solid blue;
  }
;
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


export default Header

//<HeaderCenterBox>
//             <div>
//                 <LogoImg src='https://risingcamp.com/assets/image-bro-logo@2x.png' />
//             </div>
//             <div style={{ flexGrow: '1', position: 'relative' }}>
//                 <HeaderText>Header Component</HeaderText>
//             </div>
//             <div>
//                 {page == 'index' &&
//                     <Link to='/login'>
//                         <Button>로그인</Button>
//                     </Link>
//                 }
//
//                 {page == 'login' &&
//                     <Link to='/'>
//                         <Button>뒤로가기</Button>
//                     </Link>
//                 }
//
//                 {page == 'home' &&
//                     <Link to='/'>
//                         <Button>로그아웃</Button>
//                     </Link>
//                 }
//             </div>
//           </HeaderCenterBox>
