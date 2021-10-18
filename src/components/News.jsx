import React from 'react'
import styled from 'styled-components'
import { ЦагҮеийнМэдээлэл } from '../data/NewsData'

function News() {
  return (
    <Container>
      {ЦагҮеийнМэдээлэл.map((data) => (
        <Wrap>
          <img src={data.img} alt="" />
          <div className="news">
            <h3 className="newsTitle">{data.title}</h3>
            <div className="newsTag">
              <a href="/#" className="нийтлэл">
                Нийтлэл
              </a>
              <a href="/#" className="ярилцлага">
                Ярилцлага
              </a>
            </div>
          </div>
        </Wrap>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin: 5rem 5rem;
  padding: 1rem;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  width: 95%;
`

const Wrap = styled.div`
  width: 90%;
  height: 350px;
  margin: 1rem;
  -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  .news {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.2rem 1rem;

    .newsTitle {
      width: 90%;
      text-align: left;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: left;
      line-height: 1.6rem;
      text-indent: 2rem;
      text-align: left;
      letter-spacing: 0.1rem;
      word-spacing: 0.5rem;
      color: rgb(0, 0, 0, 0.8);
      z-index: 1;
    }
  }

  .newsTag {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem 3rem;

    .нийтлэл {
      padding: 0.8rem 2rem;
      background-color: rgba(255, 255, 255, 0.8);
      margin-right: 4rem;
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 1.4rem;
      border: 0.2rem solid rgba(0, 0, 0, 0.4);
    }

    .ярилцлага {
      padding: 0.8rem 1.2rem;
      text-decoration: none;
      color: #000;
      font-weight: 300;
      font-size: 1.4rem;
      border: 0.2rem solid rgba(0, 0, 0, 0.1);
    }
  }
`

export default News
