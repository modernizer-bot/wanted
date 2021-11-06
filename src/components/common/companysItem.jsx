import styled from 'styled-components';
import {Link} from 'react-router-dom'

const CompanysItem = () => {
  return (
    <CompanyItemBox>
      <CompanyFlexBox>
        <CompanyLink to={'/'}>
          <CompanyItemHeader />
          <CompanyItemFooter>
            <CompanyTitle>네이티브 모듈 개발 (React Native - iOS, Android)</CompanyTitle>
            <CompanyText>키클롭스</CompanyText>
            <CompanySubText>서울·한국</CompanySubText>
            <CompanyMoney>채용보상금 1,000,000원</CompanyMoney>
          </CompanyItemFooter>
        </CompanyLink>
      </CompanyFlexBox>
    </CompanyItemBox>
  );
}

const CompanyItemBox = styled.li`
  width: 25%;
  padding: 10px;
  list-style: none;
  display: inline-block;
  vertical-align: top;
`
const CompanyFlexBox = styled.div`
  width: 100%;
  height: 100%;
`
const CompanyLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`
const CompanyItemHeader = styled.div`
  padding-bottom: 75%;
  position: relative;
  background-size: cover;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background: url("https://static.wanted.co.kr/images/company/2259/ugxnirwuuqrodxpe__400_400.jpg") 50%;
`
const CompanyItemFooter = styled.div`
  padding: 14px 10px;
`
const CompanyTitle = styled.div`
  text-overflow: ellipsis;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  max-height: 2.4em;
  overflow: hidden;
  text-align: left;
  word-break: break-word;
`
const CompanyText = styled.div`
  color: #333;
  font-weight: 600;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const CompanySubText = styled.div`
`
const CompanyMoney = styled.div`
`


export default CompanysItem;
