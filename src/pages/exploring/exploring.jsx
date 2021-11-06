import styled from 'styled-components';
import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header'
import {useState} from 'react'
import {FaBookmark} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Exploring = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  }
  const Recommendation = [
    {
      img:'',
      subImg:'',
      title:'',
      text:''
    },{
      img:'',
      subImg:'',
      title:'',
      text:''
    },{
      img:'',
      subImg:'',
      title:'',
      text:''
    },{
      img:'',
      subImg:'',
      title:'',
      text:''
    },{
      img:'',
      subImg:'',
      title:'',
      text:''
    },
  ]

  return (
    <PageWrap>
      <Header />
      <CompanyListBox>
        <CompanyListCenter>
          <CompanyFilterBox>
            <FilterLiftBox>
              <TagFilterBtn><BtnTitle>태그</BtnTitle><TagText>딱 맞는 기업 찾기</TagText><ArrIcon /></TagFilterBtn>
              <FilterBtn><BtnTitle>지역</BtnTitle><FilterText>서울 외</FilterText><ArrIcon /></FilterBtn>
              <FilterBtn><BtnTitle>경력</BtnTitle><FilterText>신입</FilterText><ArrIcon /></FilterBtn>
            </FilterLiftBox>
            <FilterRightBox>
              <DropdownBtnBox>
                <DropdownBtn onClick={onClick}>최신순<ArrIcon /></DropdownBtn>
                <DropdownListUl className={toggle ? 'toggle' : null}>
                  <DropdownListLi >응답률순</DropdownListLi>
                  <DropdownListLi>보상금순</DropdownListLi>
                  <DropdownListLi>인기순</DropdownListLi>
                </DropdownListUl>
              </DropdownBtnBox>
            </FilterRightBox>
          </CompanyFilterBox>
          <BookMarkBox>
            <FaBookmark style={{width: '11px',height: '16px', marginRight: '8px'}}/>
            <MarkTextBox>북마크 모아보기</MarkTextBox>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z">
            </path>
            </svg>
          </BookMarkBox>
          <SectionsTitle>적극 채용 중인 회사</SectionsTitle>
          <RecommendationBox>
            <RecommendationUl>
              <RecommendationLi>
                <RecommendationLink>
                  <RecommendationUp>
                    <RecommendationImg className='backImg'/>
                  </RecommendationUp>
                  <RecommendationTextBox>
                    <RecommendationSubImg />
                    <RecommendationTitle>
                      럭스로보(LUXROBO)
                    </RecommendationTitle>
                    <RecommendationText>
                      20개 포지션
                    </RecommendationText>
                  </RecommendationTextBox>
                </RecommendationLink>
              </RecommendationLi>
              <RecommendationLi></RecommendationLi>
              <RecommendationLi></RecommendationLi>
              <RecommendationLi></RecommendationLi>
              <RecommendationLi></RecommendationLi>
            </RecommendationUl>
          </RecommendationBox>
        </CompanyListCenter>
      </CompanyListBox>
    </PageWrap>
  )



}

const CompanyListBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CompanyListCenter = styled.div`
  max-width: 1060px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 80px;
`
const CompanyFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 50px;
  margin-bottom: 19px;
  padding-top: 10px;
`
const FilterLiftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`
const FilterRightBox = styled.div`
  height: 40px;
`
const TagFilterBtn = styled.button`
  -webkit-box-align: center;
  align-items: center;
  display: inline-flex;
  height: 40px;
  padding: 0 39px 0 15px;
  margin-bottom: 0;
  border-radius: 5px;
  border: 1px solid #ececec;
  position: relative;
`
const FilterBtn = styled.button`
  -webkit-box-align: center;
  align-items: center;
  display: inline-flex;
  height: 40px;
  padding: 0 39px 0 15px;
  margin-bottom: 0;
  border-radius: 5px;
  border: 1px solid #ececec;
  position: relative;
  margin-left: 10px;
`
const ArrIcon = styled.span`
  content: "";
  top: 50%;
  right: 16px;
  width: 0;
  height: 0;
  position: absolute;
  z-index: 99;
  border-top: 6px solid #333;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
`
const BtnTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  color: #333;
  margin-right: 8px;
  white-space: nowrap;
`
const TagText = styled.span`
  color: #999;
  font-weight: 400;
  font-size: 14px;
`
const FilterText = styled.span`
  color: #36f;
  font-weight: 600;
  margin-right: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`
const DropdownBtnBox = styled.div`
  width: 104px;
  & .toggle {
    display: flex;
  }
`
const DropdownBtn = styled.button`
  border: 1px solid #ececec;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  letter-spacing: normal;
  color: #000;
  padding: 0 0 0 16px;
  position: relative;
  width: 100%;
  text-align: left;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
`
const DropdownListUl = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 0 0 4px 4px;
  display: none;
`
const DropdownListLi = styled.li`
  
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  color: #333;
  text-align: left;
  padding: 0 0 0 16px;
  border-bottom: 1px solid #ececec;
  
`
const BookMarkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  wkdth:100%;
  color: rgb(51, 102, 255);
`
const MarkTextBox = styled.div`
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 24px;
  letter-spacing: normal;
`
const SectionsTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -.3px;
  color: #333;
  margin: 20px 0 14px;
`

// Recommendation List
const RecommendationBox = styled.div`
  margin: 0 -10px 40px;
`
const RecommendationUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const RecommendationLi = styled.li`
  box-sizing: border-box;
  float: left;
  width: calc(20% - 20px);
  margin: 0 10px;
  position: relative;
`
const RecommendationLink = styled(Link)`
  width: 100%;
  height: 100%;
  &:hover h1 {
    color: #258bf7;
  }
  &:hover .backImg {
    transform: scale(1.06);
  }
  
`
const RecommendationUp = styled.header`
  height: 147px;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
`
const RecommendationImg = styled.div`
  height: calc(100% + 1px);
  z-index: 1;
  border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  background-size: cover;
  transition: all .5s ease-in-out;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background: #f2f2f2 url("https://static.wanted.co.kr/images/company/455/mnes3mjmx4m7jmhk__1080_790.jpg") no-repeat 50% 50%;
  background-size: 100% 100%;
  overflow: hidden;
`
const RecommendationTextBox = styled.footer`
  padding: 34px 16px 0;
  height: 124px;
  width: 100%;
  border: 1px solid #e1e2e3;
  border-top: none;
  border-radius: 0 0 3px 3px;
  position: relative;
`
const RecommendationSubImg = styled.div`
  position: absolute;
  top: -25px;
  left: 16px;
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background-image: url('https://static.wanted.co.kr/images/wdes/0_5.b9eea0fb.jpg');
`
const RecommendationTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -.3px;
  color: #333;
  line-height: 1.2;
  margin: 4px 0;
  overflow: hidden;
  max-height: 58px;
`
const RecommendationText = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -.2px;
  color: #999;
  margin-top: 6px;
`
export default Exploring;
