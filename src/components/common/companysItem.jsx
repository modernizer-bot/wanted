import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {AiTwotoneHeart} from 'react-icons/ai';
import {useState} from 'react'

const CompanysItem = () => {
  const [like, setLike] = useState(false);

  return (
    <CompanyItemBox>
      <CompanyFlexBox>
        <CompanyLink to={'/exploring'}>
          <CompanyItemHeader>
            <LikeBtnBox  onClick={() => setLike(!like)} style={{color:`${like ? 'red' : 'blue'}`}}>
              <AiTwotoneHeart className={'btnIcon'}/>0
            </LikeBtnBox>
          </CompanyItemHeader>
          <CompanyItemFooter>
            <CompanyTitle>네이티브 모듈 개발 (React Native - iOS, Android)</CompanyTitle>
            <CompanyText>키클롭스</CompanyText>
            <ResponseRateBox>
              <ResponseRate>
                응답률 메우높음
              </ResponseRate>
            </ResponseRateBox>
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
  z-index: -1;
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
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  margin-top: 6px;
  color: #999;
`
const CompanyMoney = styled.div`
  margin-top: 6px;
  color: #666;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const ResponseRateBox = styled.div`
`
const ResponseRate = styled.div`
  border-radius: 2px;
  background-color: #fff;
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  height: 19px;
  line-height: 19px;
  margin-top: 4px;
  padding: 0 5px;
  border: 1px solid #00aead;
  color: #00aead;
`
const LikeBtnBox = styled.button`
  z-index: 3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  position: absolute;
  background: rgba(0,0,0,.3);
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  border: none;
  & .btnIcon{
    margin-right: 5px;
    color: hsla(0,0%,100%,.3);
  }
`
export default CompanysItem;
