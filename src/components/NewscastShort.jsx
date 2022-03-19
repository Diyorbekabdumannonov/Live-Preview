import { makeStyles } from '@material-ui/core'
import React from 'react'
import newcast from './../assets/newcast.png'
import purchase from './../assets/purchase.png'

const useStyles = makeStyles({

    newcast: {
        display: 'flex',
        margin: '25px auto',
        justifyContent: 'space-between'
    },
    img: {
        width: '100%'
    }
})

export default function NewscastShort() {
    const classes = useStyles()
    return (
        <div className={'max-desktop' + classes.newcast}>
            <div>
                <img src={newcast} alt="newcast" className={classes.img}/>
            </div>
            <div>
                <img src={purchase} alt="purchase" className={classes.img}/>
            </div>
        </div>
    )
}
