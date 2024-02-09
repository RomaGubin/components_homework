import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react'
import './App.css'

export default class App extends Component {

  render () {
    const item = this.props.item

    return (
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <div className="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">
              {item.descriptionFull}
            </div>
            <div className="highlight-window mobile">
              <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
              <div className="price">{item.currency}{item.price}.00</div>
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
