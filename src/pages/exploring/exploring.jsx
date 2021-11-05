import styled from 'styled-components';
import {PageWrap} from '../../components/common/styled'
import Header from '../../components/common/header'
import {useState} from 'react'
import {FaBookmark} from 'react-icons/fa'

const Exploring = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  }
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
              <RecommendationLi>ds</RecommendationLi>
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
const RecommendationBox = styled.div`
  margin: 0 -10px 40px;
`
const RecommendationUl = styled.ul`
`
const RecommendationLi = styled.li`
  float: left;
  width: calc(20% - 20px);
  margin: 0 10px;
  position: relative;
`
export default Exploring;
