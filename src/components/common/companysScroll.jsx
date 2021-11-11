import styled from 'styled-components';
import {PageWrap} from './styled';
import {menuTop} from './header';


const CompanysScroll = () => {
  return(
    <ScrollBox>
      <ScrollTitle>전체</ScrollTitle>
      <ScrollFlexBox>

      </ScrollFlexBox>
    </ScrollBox>
  );
}

const ScrollBox = styled(PageWrap)`
  max-width: 1060px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ScrollTitle = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 15px;
  font-size: 18px;
  color: #333;
  text-decoration: inherit;
  cursor: pointer;
  text-align: left;
`
const ScrollFlexBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`



export default CompanysScroll;

