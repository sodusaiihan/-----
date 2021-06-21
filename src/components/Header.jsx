import React from 'react'
import { Search } from '@material-ui/icons'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/assets/images/СЗХ.jpg" alt="" />
      </Logo>
      <SearchWrapper>
        <SearchBarWrapper>
          <form>
            <input type="text" placeholder="ХАЙХ УТГАА ОРУУЛНА УУ?" />
            <button type="submit"></button>
          </form>
          <Icon>
            <Search
              color="disabled"
              style={{ fontSize: 80 }}
              className="searchIcon"
            />
          </Icon>
        </SearchBarWrapper>
      </SearchWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 14rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.4rem;
  z-index: 10;
`
const Logo = styled.a`
  padding: 0;
  width: 30rem;
  /* margin-top: 4px; */
  margin-right: 4rem;
  max-height: 10rem;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`
const SearchWrapper = styled.div`
  flex: 1;
`
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 10rem;
  width: 100%;
  border: none;
  padding-left: 1rem;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 2rem;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }

  input:active {
    outline: none;
  }

  input:hover {
    outline: none;
  }
`
const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Header
