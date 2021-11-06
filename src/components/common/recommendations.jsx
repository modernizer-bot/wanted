import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Recommendations = () => {
  return;
}

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

export default Recommendations;
