import { Component } from 'react'
import './App.css'
import Button from './components/Button'

export default class Portfolio extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      originalItems: [],
      showItems: [],
    };
  }
  
  componentDidMount() {
    this.setState({ originalItems: this.props.items, showItems: this.props.items });
  }

  handleFilter = (category) => {
    const { originalItems } = this.state;

    if (category === 'All') {
      this.setState({ showItems: originalItems })
      return
    } 

    const filteredItems = originalItems.filter(item => item.category === category);
    this.setState({ showItems: filteredItems });
  };

  render () {
    const { showItems } = this.state;
    
    return (
      <>
        <div className="body">
          <div className="filtersButton">
            <Button handleFilter={this.handleFilter} />
          </div>
          <div className="img_cont">
            {showItems.map((item, index) => (
              <div className="img" key={index}>
                <img src={item.img} alt={item.category} />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }  
}
