import {
  AccountBalance,
  Apartment,
  Explore,
  Gavel,
  InsertChart,
  School,
  Block,
  Face,
} from '@material-ui/icons'
import styled from 'styled-components'
function Navigation() {
  return (
    <Nav>
      <NavMenu>
        <ul className="sidebar">
          <li className="side-nav-item">
            <a href="#home" className="side-nav-link">
              <AccountBalance className="side-nav-icon" />
              <span>ЦАГ ҮЕИЙН МЭДЭЭЛЭЛ</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#regime" className="side-nav-link">
              <Apartment className="side-nav-icon" />
              <span>ЯРИЛЦЛАГА</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#News" className="side-nav-link">
              <Explore className="side-nav-icon" />
              <span>ВИДЕО</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#legislation" className="side-nav-link">
              <Gavel className="side-nav-icon" />
              <span>СТАТИСТИК</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#legislation" className="side-nav-link">
              <Gavel className="side-nav-icon" />
              <span>МӨРДӨН ШАЛГАХ, АЖИЛЛАГАА</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#natriskmanag" className="side-nav-link">
              <InsertChart className="side-nav-icon" />
              <span>ҮНДЭСНИЙ ЭРСДЭЛИЙН ҮНЭЛГЭЭ</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#training" className="side-nav-link">
              <School className="side-nav-icon" />
              <span>ЗАР МЭДЭЭ</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#sanctions" className="side-nav-link">
              <Block className="side-nav-icon" />
              <span>СЭРЭМЖЛҮҮЛЭГ</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="#login" className="side-nav-link">
              <Face className="side-nav-icon" />
              <span>ЭРДЭМ ШИНЖИЛГЭЭНИЙ ИЛТГЭЛ, НИЙТЛЭЛ</span>
            </a>
          </li>
        </ul>
      </NavMenu>
    </Nav>
  )
}

const Nav = styled.div`
  margin: 2rem 1.5rem;
  padding: 0.1rem 0;
  width: 98%;
  border-top: 0.1rem solid rgb(0, 0, 0, 0.5);
  border-bottom: 0.1rem solid rgb(0, 0, 0, 0.5);
`

const NavMenu = styled.a`
  .sidebar {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;

    ::-webkit-scrollbar {
      display: none;
      width: 5px;
      height: 8px;
      background-color: #aaa;
    }

    ::-webkit-scrollbar-thumb {
      background: #000;
    }

    .side-nav-item {
      min-width: 20rem;
      height: 3rem;
      /* line-height: 2rem; */
      display: flex;
      align-items: center;
      justify-content: center;

      .side-nav-link {
        color: black;
        display: flex;
        justify-content: center;
        text-decoration: none;
        span {
          margin-left: 1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`

export default Navigation
