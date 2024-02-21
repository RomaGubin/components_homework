import { Component } from 'react'
import './App.css'
import Button from './components/Button'


export default class Portfolio extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      originalItems: [],
      showItems: [],
      filtered: 'All',
    };
  }
  
  componentDidMount() {
    const { items } = this.props;
    this.setState({ originalItems: items, showItems: items });
  }

  handleFilter = (category) => {
    const { originalItems } = this.state;

    if (category === 'All') {
      this.setState({ showItems: originalItems, filtered: category });
      return
    } 

    const filteredItems = originalItems.filter(item => item.category === category);
    this.setState({ showItems: filteredItems, filtered: category });
  };

  render () {
    const { showItems, filtered } = this.state;
    const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

    return (
      <>
        <div className="body">
          <div className="filtersButton">
            <Button handleFilter={this.handleFilter} filters={filters} filtered={filtered} />
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
