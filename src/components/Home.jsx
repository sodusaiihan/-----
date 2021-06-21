import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Content>
        <div className="right">
          <img src="/assets/images/зуун-чухал-сэдэв.jpg" alt="" />
        </div>
        <div className="left">
          <div className="navContainer">
            <div className="navItem">
              <img src="/assets/images/warning.png" alt="" />
              <span>Сэрэмжлүүлэг</span>
            </div>
            <div className="navItem">
              <img src="/assets/images/graduate.png" alt="" />
              <span>Эрдэм шинжилгээний илтгэл нийтлэл</span>
            </div>
            <div className="navItem">
              <img src="/assets/images/newspaper1.png" alt="" />
              <span>ФАТФ-ын тайлан</span>
            </div>
            <div className="navItem">
              <img src="/assets/images/report1.png" alt="" />
              <span>Зарлал</span>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin: 1rem 5rem;
`

const Content = styled.div`
  display: flex;
  .right {
    flex: 8;

    img {
      width: 100%;
      height: 40rem;
      object-fit: cover;
    }
  }

  .left {
    flex: 4;
    margin-left: 3rem;

    .navContainer {
      display: grid;
      align-content: center;
      justify-content: center;
      grid-column-gap: 4rem;
      grid-row-gap: 2rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      .navItem {
        height: 19rem;
        width: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);

        img {
          width: 14rem;
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

          &:hover {
            transform: scale(1.05);
          }
        }
        span {
          font-size: 1.2rem;
          margin: 0 1rem;
          text-overflow: ellipsis;
        }
      }
    }
  }
`

export default Home
