import styled from 'styled-components'
import { LastNewsData } from '../data/lastNewsData'

function lastNews() {
  return (
    <Container>
      <Content>
        <div className="lastNewsContainer">
          {LastNewsData.map((data) => (
            <div className={'lastNewsItem'}>
              <img src={data.img} alt="" />
              <div className="lastNewsItemContent">
                <h3 className="lastNewsItemTitle">{data.title}</h3>
                <span>{data.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin: 4rem 2rem;
  height: 35rem;
  width: 98%;
`

const Content = styled.div`
  .lastNewsContainer {
    margin: 0 3rem;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column-gap: 2rem;
  }

  .lastNewsItem {
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);

    img {
      width: 100%;
      height: 20rem;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .lastNewsItemContent {
      margin: 1rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 1.2rem;
      }
      span {
        align-self: flex-end;
        color: rgb(0, 0, 0, 0.5);
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
  }
`

export default lastNews
