import { useState } from 'react'
import styled from 'styled-components'
import { Navigation } from '@material-ui/icons'

function Tab() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <Container>
      <Content>
        <div className="container">
          <div className="blog-tabs">
            <button
              className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              ХОЛБООСУУД
            </button>
            <button
              className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              Мөнгө угаах, терроризмыг санхүүжүүлэхтэй тэмцэхтэй холбоотой
              асуудлаар холбоо барих
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? 'content  active-content' : 'content'
              }
            >
              <section>
                <ul>
                  <li>
                    <a href="/#">
                      <img src="/assets/images/Лого.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="/assets/images/Лого.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="/assets/images/Лого.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src="/assets/images/Лого.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <div
              className={
                toggleState === 2 ? 'content  active-content' : 'content'
              }
            >
              <div className="container">
                <div className="left">
                  <div className="content">
                    <Navigation
                      className="uparrow"
                      style={{ fontSize: 30 }}
                      color="primary"
                    />
                    <div className="items">
                      <img src="/assets/images/монголбанк.png" alt="" />
                    </div>
                    <div className="items active">
                      <img src="/assets/images/сзх.png" alt="" />
                    </div>
                    <div className="items">
                      <img src="/assets/images/сангийн яам.png" alt="" />
                    </div>
                    <Navigation
                      className="downarrow"
                      style={{ fontSize: 30 }}
                      color="primary"
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="imgBox"></div>
                  <div className="contact">
                    <div className="contactItems">
                      <img src="/assets/images/phone.svg" alt="" />
                      <span>11310081</span>
                    </div>
                    <div className="contactItems">
                      <img src="/assets/images/email.svg" alt="" />
                      <span>info@mongolbank.mn</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem 3rem;
`
const Content = styled.div`
  .container {
    height: 70vh;
    width: 100%;
  }

  .blog-tabs {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .tabs {
    margin-top: -2.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.02rem;
    word-spacing: 1rem;
    padding: 1rem 2rem;
    border-radius: 1.1rem;
    position: relative;
    outline: none;
    cursor: pointer;
    z-index: 10;
  }

  .tabs:first-child {
    background-image: linear-gradient(
      111.9deg,
      rgba(0, 81, 146, 1) 0.3%,
      rgba(14, 250, 255, 1) 90%
    );
  }
  .tabs:last-child {
    color: rgba(255, 255, 255);
    text-transform: uppercase;
    /* border-top: 0.2rem solid rgba(250, 234, 12, 0.918);
    border-right: 0.2rem solid rgba(250, 234, 12, 0.918); */
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(7, 121, 222, 1) 0%,
      rgba(20, 72, 140, 1) 90%
    );
  }

  button {
    border: none;
  }

  .content-tabs {
    flex-grow: 1;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;

    section {
      position: absolute;
      width: 90vw;
      height: 75vh;
      border-radius: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(
        89.9deg,
        rgba(208, 246, 255, 1) 0.1%,
        rgba(255, 237, 237, 1) 47.9%,
        rgba(255, 255, 231, 1) 100.2%
      );
      overflow: hidden;
    }

    section::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50%;
      z-index: 1;
      backdrop-filter: blur(5px);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

    ul {
      position: relative;
      display: flex;
      z-index: 2;
    }

    ul li {
      position: relative;
      list-style: none;
      margin: 30px;
    }

    ul li a {
      position: relative;
      width: 150px;
      height: 150px;
      display: inline-block;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2px);
      transition: 1s;
      overflow: hidden;

      img {
        margin-top: 40px;
      }
    }

    ul li a:hover {
      transform: translateY(-20px);
      transition: 0.5s;
    }

    ul li a::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      transform: skewX(45deg) translateX(250px);
      transition: 1s;
    }

    ul li a:hover::before {
      transform: skewX(45deg) translateX(-150px);
    }

    .container {
      position: absolute;
      width: 90vw;
      height: 75vh;
      border-radius: 1.5rem;
      display: flex;
      background-image: linear-gradient(
        89.9deg,
        rgba(208, 246, 255, 1) 0.1%,
        rgba(255, 237, 237, 1) 47.9%,
        rgba(255, 255, 231, 1) 100.2%
      );
      overflow: hidden;

      .left {
        flex: 2;
        /* background-color: blue; */

        &:before {
          content: '';
          position: absolute;
          left: 0;
          width: 12rem;
          height: 100%;
          z-index: 1;
          border-right: 0.3rem solid rgba(255, 255, 255, 0.8);
        }

        .content {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;

          .uparrow {
            display: flex;
            align-self: center;
          }

          .downarrow {
            display: flex;
            align-self: center;
            transform: rotate(180deg);
            width: 10%;
          }

          .items {
            margin: 2rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active {
              transform: scale(1.4);
              overflow: hidden;
            }

            img {
              -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
              box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
              background: #fff;
              border-radius: 0.5rem;
              width: 80%;
            }
          }
        }
      }

      .right {
        flex: 4;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url('/assets/images/Монголбанк.jpg'),
          url('/assets/images/mask.jpg');
        background-blend-mode: screen;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        .contact {
          position: absolute;
          bottom: 0;
          width: 80%;
          display: flex;
          align-content: flex-end;
          justify-content: space-evenly;

          .contactItems {
            width: 3.5rem;
            height: 3.5rem;
            margin-right: 10rem;
            display: flex;
            align-content: center;

            span {
              margin-top: 0.8rem;
              margin-left: 1.1rem;
              font-size: 1.5rem;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
  .active-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Tab
