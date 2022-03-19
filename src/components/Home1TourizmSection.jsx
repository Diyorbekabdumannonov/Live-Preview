import React from 'react'
import Img1 from './../assets/Img1.png'
import Img2 from './../assets/Img2.png'
import Img3 from './../assets/Img3.png'
import Img4 from './../assets/Img4.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  home: {
    display: 'flex',
    width: '100%',
    height: '570px',
    alignItems: 'center',
  },
  child: {
    display: 'flex',
    width: '50%',
    height: '278px',
    flexDirection: 'column'
  },
  img: {
    width: '50%',
    margin: '8px',
  },
  rightbar: {
    display: 'flex',
    width: '100%important',
    flexDirection: 'row'
  },
  imgs: {
    margin: '8px',
    width: '50%',
  }
})

export default function Home1TourizmSection() {
  const classes = useStyles()
  return (
    <div className={'max-desktop' + classes.home}>
      <img src={Img1} alt="Img1" className={classes.img} />
      <div className={classes.child}>
        <div className={classes.rightbar}>
          <img src={Img2} alt="Img2" className={classes.imgs} />
          <img src={Img3} alt="Img3" className={classes.imgs} />
        </div>
        <img src={Img4} alt="Img4" />
      </div>
    </div>
  )
}
