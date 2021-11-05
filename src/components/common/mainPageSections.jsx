import styled from 'styled-components';


const MainPageSections = ({props,line}) => {
  return(
    <SectionsBox>
      <SectionImg style={{background:`50%/cover no-repeat red url(${props.img})`}}/>
      { line&& <SectionLine src="https://static.wanted.co.kr/images/newintro/dot.png" alt="line" />}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const SectionLine = styled.img`
  position: relative;
  top: -50%;
  transform: translate(0, 50%);
  width: 4px;
`
export default MainPageSections;
