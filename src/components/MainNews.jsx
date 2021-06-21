import React from 'react'
import styled from 'styled-components'
import LastNews from './lastNews'

function MainNews() {
  return (
    <Container>
      <Content>
        <div className="MainNews">
          <div className="MainNewsTop">
            <div className="MainNewsTitle">
              <a href="/#" className="MainNewsTopTag">
                Мөрдөн шалгах ажиллагаа
              </a>
              <span>
                АШИГ СОНИРХЛЫН ЗӨРЧИЛД ХАМААРАХ 48 ГОМДЛЫГ ХЯНАН ШАЛГАВ.
              </span>
              <div className="MainNewsTopSub"></div>
            </div>
          </div>
          <div className="MainNewsBottom">
            <div className="left">
              <div className="AuthorContainer">
                <span>2021 ОНЫ 06 САРЫН 16</span>
                <img src="/assets/images/Жаргалсайхан.jpg" alt="" />
                <h2>Д. Жаргалсайхан </h2>
              </div>
            </div>
            <div className="right">
              <img src="/assets/images/2-1.jpg" alt="" />
              <p>
                Авлигатай тэмцэх газрын Хяналт шалгалт, дүн шинжилгээний хэлтэс
                нь 2020 оны 11 дүгээр сарын 2-6-ны өдрүүдэд иргэн, аж ахуйн
                нэгж, байгууллагаас ирүүлсэн нийтийн албан тушаалтны авлига,
                ашиг сонирхлын зөрчилтэй холбоотой 48 гомдол, мэдээллийг хүлээн
                авч шалгав. Өнгөрсөн долоо хоногт 14 гомдол, мэдээллийг хянан
                шийдвэрлэжээ. Одоогоор ашиг сонирхлын зөрчилд хамаарах 34 гомдол
                шалгагдаж байна. Гэмт хэргийн шинж агуулсан 2 гомдлыг Мөрдөн
                шалгах хэлтэст шилжүүллээ. Түүнчлэн 6 гомдлыг харьяаллын дагуу
                холбогдох төрийн байгууллагад шилжүүлсэн байна. Aвилгатай тэмцэх
                газар
              </p>
            </div>
          </div>
        </div>
        <LastNews />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 150vh;
  margin: 2rem 2rem;
`

const Content = styled.div`
  .MainNews {
    display: flex;
    flex-direction: column;

    .MainNewsTop {
      width: 100%;
      height: 20rem;
      /* background-color: gray; */
      display: flex;
      flex-direction: column;
      border-top: 0.2rem solid rgb(0, 0, 0, 0.2);
      border-bottom: 0.2rem solid rgb(0, 0, 0, 0.2);

      .MainNewsTitle {
        margin: 1rem;
        display: flex;
        flex-direction: column;

        a {
          min-width: 50rem;
          text-decoration: none;
          padding: 0.4rem 2rem;
          color: rgb(0, 0, 0, 0.8);
          font-size: 1.8rem;
          font-weight: 900;
          color: #ff0000;
          margin-bottom: 1rem;
        }

        span {
          height: 13rem;
          font-size: 5rem;
          font-weight: 900;
          text-overflow: clip;
          color: rgb(0, 0, 0, 0.6);
        }
      }
    }

    .MainNewsBottom {
      display: flex;
      margin: 2rem 1rem;
      height: 90%;

      .left {
        flex: 3;
        margin-right: 1rem;
        border-radius: 1rem;
        height: 50rem;

        .AuthorContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 0.1rem solid rgb(0, 0, 0, 0.8);
          span {
            width: 90%;
            font-size: 1.5rem;
            font-weight: 300;
            margin: 2rem;
            padding: 1rem 0;
            border-top: 0.1rem solid rgb(0, 0, 0, 0.4);
            border-bottom: 0.1rem solid rgb(0, 0, 0, 0.4);
            text-align: center;
          }

          img {
            margin: 2rem 0;
            width: 50%;
            height: 50%;
            object-fit: cover;
            border-radius: 10px;
          }

          h2 {
            margin-top: -1rem;
            font-size: 2rem;
          }
        }
      }

      .right {
        flex: 8;
        margin-top: 2rem;
        -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
        border-radius: 1rem;

        img {
          width: 100%;
          height: 50%;
          border-radius: 1rem;
          object-fit: cover;
        }

        p {
          padding: 0.2rem 2rem;
          font-size: 1.6rem;
          font-weight: 300;
          text-indent: 3rem;
        }
      }
    }
  }
`

export default MainNews
