import React from 'react'
import image from './static/GitHub-Mark-Light-64px.png'

const GithubMark = () => {
  return (
    <a
      href="https://github.com/renodesu/sonar"
      target="_blank"
      rel="noreferrer"
      className="githubMark"
      title="Check out the source code on Github! https://github.com/renodesu/sonar"
    >
      <img src={image} width={32} height={32} />
    </a>
  )
}

export default GithubMark
