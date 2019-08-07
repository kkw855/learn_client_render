import React from 'react'
import ReactDom from 'react-dom'
import LikeButton from './LikeButton'

function Container() {
  return (
    <div>
      <LikeButton />
      <LikeButton />
    </div>
  )
}

const domContainer = document.querySelector("#react-root")
ReactDom.render(<Container />, domContainer)
