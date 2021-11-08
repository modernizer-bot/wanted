import styled from 'styled-components'
import {MdKeyboardArrowRight} from 'react-icons/md'

const DropDownMenuItem = ({props}) => {

  if(props.texts === ''){
    return(
      <MenuItem>
        {props.title.map((v,i) =>
          <MentItemTitle key={i}>{v}<MdKeyboardArrowRight className='icon'/></MentItemTitle>
        )}
      </MenuItem>
    )}else if(props.title === ''){
      return(
        <MenuItem>
          <MentItemTitle>&nbsp;</MentItemTitle>
          {props.texts.map((v,i) =>
            i === 7 ? <MenuItemText key={i}>{v}<MdKeyboardArrowRight className='icon'/></MenuItemText>
              : <MenuItemText key={i}>{v}</MenuItemText>
          )}
        </MenuItem>
      )
    }

  return (
    <MenuItem>
      <MentItemTitle>{props.title}<MdKeyboardArrowRight className='icon'/></MentItemTitle>
      {props.texts.map((v,i) =>
        i === 7 ? <MenuItemText key={i}>{v}<MdKeyboardArrowRight className='icon'/></MenuItemText>
          : <MenuItemText key={i}>{v}</MenuItemText>
      )}
    </MenuItem>
  )
}

export default DropDownMenuItem;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.666%;
  height: 100%;
  padding: 40px 20px 0 0;
  text-align: left;
  & .icon {
    color: #999;
    font-size: 20px;
  }
`
const MentItemTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const MenuItemText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 13px;
  color: #999;
  padding: 3px 20px 3px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
