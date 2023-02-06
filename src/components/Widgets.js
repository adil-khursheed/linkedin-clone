import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Widgets = () => {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
      <>
      <aside className='widget'>
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon/>
        </div>
        {newsArticle('Papa React is back', 'Top news - 9099 readers')}
        {newsArticle('Coronavirus: India updates', 'Top news - 886 readers')}
        {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
        {newsArticle('Bitcoin breaks $22k', 'Crypto - 8000 readers')}
        {newsArticle('Is redux too good', 'Code - 123 readers')}
        {newsArticle('Papa react lauches course?!', 'Top news - 3056 readers')}
      </aside>
      </>
  )
}

export default Widgets