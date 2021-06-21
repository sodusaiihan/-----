import styled from 'styled-components'
import { NewsListData } from '../data/NewsListData'
function NewsList() {
  return (
    <Container>
      <Content>
        <div className="left">
          <img src="/assets/images/баялгийнСан.jpg" alt="БаялгийнСан" />
          <div className="newsListLeftContent">
            <h2 className="newsListLeftContentTitle">
              Л.Оюун-Эрдэнэ: Баялгаа ашиглуулсны хариуд өртэй биш харин өвтэй
              үлдэх нөхцөлийг бүрдүүлэхийн төлөө ажиллана
            </h2>
            <p>
              Монгол Улсын Засгийн газрын гишүүд УИХ-д тангараг өргөсний дараа
              Ерөнхий сайд Л.Оюун-Эрдэнэ УИХ-ын гишүүд болон ард түмэнд хандаж
              үг хэ8ллээ. Ерөнхий сайдын үгийг бүрэн эхээр нь хүргэж байна.
              Тэрбээр, "Монгол Улсын 31 дэх Ерөнхий сайд Улаанбаатар хотын
              агаарын бохирдлыг 50 хувь бууруулан...
            </p>
          </div>
        </div>
        <div className="right">
          <div className="newsListRightContent">
            {NewsListData.map((data) => (
              <div className="newsContent">
                <img src={data.img} alt="" />
                <div className="newsListRightTitle">
                  <span>{data.title}</span>
                  <p>{data.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin: 10rem 2rem;
  height: 74vh;
  position: relative;
  display: flex;
`

const Content = styled.div`
  display: flex;
  height: 100%;
  .left {
    flex: 8;
    border-radius: 20px;
    -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
    margin-right: 2rem;

    img {
      width: 100%;
      height: 40rem;
      object-fit: cover;
      border-radius: 0.5rem;
    }

    .newsListLeftContent {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .newsListLeftContentTitle {
        color: #000;
        font-size: 2rem;
        font-weight: 700;
        margin-top: -0.1rem;
      }

      p {
        margin-top: -0.8rem;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }

  .right {
    flex: 4;
    -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);

    .newsListRightContent {
      display: grid;
      grid-template-columns: repeat(4, minmax(1, 1fr));
      grid-gap: 0.2rem;

      .newsContent {
        height: 16rem;
        margin: 0.8rem;
        display: flex;

        :not(:last-child) {
          border-bottom: 1px solid rgb(0, 0, 0, 0.2);
        }
        img {
          width: 50%;
          height: 14rem;
          object-fit: cover;
          background-position: top;
          background-color: saddlebrown;
          margin-right: 1rem;
          border-radius: 0.7rem;
        }
        .newsListRightTitle {
          span {
            font-size: 1.3rem;
            line-height: 0.6rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`

export default NewsList
