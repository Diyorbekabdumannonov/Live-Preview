import React, { useState } from 'react'
import searchIcon from './../assets/search-icon.png'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    navigation: {
        display: 'flex',
        flexWrap: 'wrap',
        background: '#393939',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    links: {
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
    },

    activeLink: {
        background: '#F65050',
        padding: '16px',
        fontSize: '16px',
        textDecoration: 'none',
        fontWeight: '400',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    link: {
        background: '#393939',
        padding: '16px',
        fontSize: '16px',
        fontWeight: '400',
        color: 'white',
        border: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
    }
})

export default function Navigation() {
    const linkNames = [
        { text: 'Home', num: 1 },
        { text: 'International', num: 2 },
        { text: 'Sports', num: 3 },
        { text: 'Opinion', num: 4 },
        { text: 'Business', num: 5 },
        { text: 'Youth', num: 6 },
        { text: 'Entertainment', num: 7 },
        { text: 'Lifestyle', num: 8 }
    ]
    const classes = useStyles()
    return (
        <div className={'max-desktop' + classes.navigation}>
            <div className={classes.links}>
                {linkNames.map(link => {
                    return <Link
                        key={link.num}
                        className={window.location.href.split('/')[3] === link.text.toLowerCase() ? classes.activeLink : classes.link}
                        to={`/${link.text.toLowerCase()}`}
                    >{link.text}</Link>
                })}
                <select className={classes.link}>
                    <option value="Pages" selected>Pages</option>
                </select>
            </div>
            <div className='search'>
                <input type="text" placeholder='Search for' />
                <img src={searchIcon} alt="searchIcon" />
            </div>
        </div>
    )
}
