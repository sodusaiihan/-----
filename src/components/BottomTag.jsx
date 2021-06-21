import React from 'react'
import styled from 'styled-components'
import { bottomTagData } from '../data/bottomTagData'

function BottomTag() {
  return (
    <Container>
      <Content>
        <div className="bottomTag">
          {bottomTagData.map((data) => (
            <div className="bottomTagItem">
              <img src={data.img} alt="" />
              <div className="bottomTagTitle">
                <h3>{data.title}</h3>
                <span>{data.number}</span>
                <div className="bottomTagLink">
                  <p>{data.status}</p>
                  <a href="/#">&#8594;</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem;
  width: 124rem;
  height: 50vh;
`

const Content = styled.div`
  margin: 1rem;

  .bottomTag {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .bottomTagItem {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 2rem 2rem 0;
      padding: 2rem;
      height: 37rem;
      width: 50%;
      -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
      box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
      border-radius: 2rem;

      img {
        height: 10rem;
        width: 10rem;
        object-fit: cover;
      }

      .bottomTagTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        h3 {
          font-size: 1.4rem;
          color: rgb(0, 0, 0, 0.7);
        }

        span {
          font-size: 5rem;
          font-weight: 700;
          color: red;
        }

        .bottomTagLink {
          display: flex;
          align-items: center;

          a {
            color: #000;
            text-decoration: none;
            margin-left: 1.7rem;
            font-size: 2rem;
            padding: 0.4rem 1.3rem;
            background-color: rgb(255, 255, 255, 0.1);
            border: 1px solid rgb(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
`

export default BottomTag
