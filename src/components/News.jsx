import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { ChromeReaderMode, Forum, Movie } from '@material-ui/icons'
import { ЦагҮеийнМэдээлэл } from '../data/NewsData'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

function News() {
  const classes = useStyles()
  return (
    <Container>
      {ЦагҮеийнМэдээлэл.map((data) => (
        <Wrap>
          <img src={data.img} alt="" />
          <div className="news">
            <h3 className="newsTitle">{data.title}</h3>
            <div className="newsTag">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ChromeReaderMode />}
                size="small"
              >
                Нийтлэл
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<Movie />}
                size="small"
              >
                Бичлэг
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Forum />}
                size="small"
              >
                Ярилцлага
              </Button>
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
  height: 300px;
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
      /* text-indent: 20px; */
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      color: rgb(0, 0, 0, 0.8);
      margin-top: -3rem;
    }
  }
  .newsTag {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .нийтлэл {
      padding: 1rem 3rem;
      background-color: yellow;
    }
    .бичлэг {
      padding: 1rem 3rem;
      background-color: brown;
    }
  }
`

export default News
