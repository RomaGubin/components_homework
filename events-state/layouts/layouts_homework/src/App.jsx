import { Component } from 'react'
import './App.css'
import IconSwitch from './components/IconSwitch';

export default class Store extends Component {

  state = {
    layoutType: 'view_list',
  };

  handleSwitch = () => {
    this.setState(prevState => ({
      layoutType: prevState.layoutType === 'view_list' ? 'view_module' : 'view_list',
    }));
  };

  render () {

    const products = this.props.items;
    const { layoutType } = this.state;


    return (
      <>
        <div className="body">
          <div className="button_cont">
          <IconSwitch icon={layoutType} onSwitch={this.handleSwitch} />
          </div>
          <div className={layoutType}>
            {products.map((item, index) => (
              <div className="img" key={index}>
                <img src={item.img} alt={item.category} />
                <p className="name">{item.name}</p>
                <p className="color">{item.color}</p>
                <div className="price_cont">
                  <div className="price">{item.price}</div>
                  <button className="button">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }  
}
