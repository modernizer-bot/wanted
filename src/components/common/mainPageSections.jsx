import styled from 'styled-components';
import * as url from 'url'

const MainPageSections = ({props}) => {

  return(
    <SectionsBox>
      <SectionImg style={{background:`50%/cover no-repeat red url(${props.img})`}}/>
      <SectionTextBox>
        <SectionTitle>{props.titleUp}<br/>{props.titleDown}</SectionTitle>
        <SectionText>{props.textUp}<br/>{props.textDown}</SectionText>
      </SectionTextBox>
    </SectionsBox>
  )
}

const SectionsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 480px;
  justify-content: center;
  align-items: center;
`
const SectionImg = styled.div`
  width: 530px;
  height: 380px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  
`
const SectionTextBox = styled.div`
  text-align: left;
  padding-left: 60px;
  width: 530px;
  height: 380px;
`
const SectionTitle = styled.div`
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 20px;
  font-weight: 600;
  
`
const SectionText = styled.div`
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
`
export default MainPageSections;
