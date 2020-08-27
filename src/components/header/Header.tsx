import React from 'react'
import styled from 'styled-components'
import MenuIcon from '../icons/menu.svg'

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <img src={MenuIcon} alt='menu icon' />
      {children}
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
  max-width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;
  color: ${props => props.theme.black};
  font-weight: 600;
  img {
    position: absolute;
    left: 0;
    cursor: pointer;
    margin-left: 10px;
  }
  img:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0);
  }
`
