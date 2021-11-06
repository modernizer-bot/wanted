import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Recommendations = ({props}) => {
  return(
    <RecommendationLi>
      <RecommendationLink to={'/'}>
        <RecommendationUp>
          <RecommendationImg className='backImg' style={{background:`url(${props.img})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}/>
        </RecommendationUp>
        <RecommendationTextBox>
          <RecommendationSubImg style={{background:`url(${props.subImg})`, backgroundColor: '#f2f2f2',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}/>
          <RecommendationTitle>
            {props.title}
          </RecommendationTitle>
          <RecommendationText>
            {props.text}
          </RecommendationText>
        </RecommendationTextBox>
      </RecommendationLink>
    </RecommendationLi>
  );
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
  background: #f2f2f2 no-repeat 50% 50%;
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
  z-index: 0;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
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
