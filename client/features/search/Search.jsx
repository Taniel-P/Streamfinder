import React from 'react';
import './Search.css';
import axios from 'axios'
import { iron_man } from './tempData';
//remove once carosel can be installed/replace in Search class
const TempDisplay1 = (props) => {
  const firstFive = props.data.filter((v, i) => {if(i<=4) {return v} })
  return (
   <div class='temp-container'>
     {firstFive.map((values, i)=>           
        <div class='temp-sl'>
          <h1>{values.title}</h1>
          <img class='temp' src={values.img_url} alt="" />
          <div class='provider'>
            <img class='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg'/>
            <img class='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg'/>
            <img class='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg'/>
          </div>
        </div> 
     )}
   </div>
  )
}
const TempDisplay2 = (props) => {
  const secondFive = props.data.filter((v, i) => {if(i> 4 && i <=9) {return v} })
  return (
   <div class='temp-container'>
     {secondFive.map((values, i)=>           
        <div class='temp-sl'>
          <h1>{values.title}</h1>
          <img class='temp' src={values.img_url} alt="" />
          <div class='provider'>
            <img class='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg'/>
            <img class='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg'/>
            <img class='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg'/>
          </div>
        </div>
     )}
   </div>
  )
}
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_val:'',
      search_display: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handle_search = this.handle_search.bind(this);
  }

  handle_search(e) {
    //sets up search_val state to be sent to server for processing
    let search_value = e.target.value 
    this.setState({
      search_val: search_value
    })
  }
  handleClick(e) {
    //sends search value state/updates state
    //do stuff with server
    //set state with results
    this.setState({
      search_display: iron_man
    })
  }

  render() {
    return (
      <div>
        <div id="Search">
          <h1 class='search-header'>Stream Finder</h1>
          <input 
            class='search-box' 
            type="text"
            placeholder='search a movie to display streaming providers 🎣' 
            value={this.state.search_val}
            onChange={this.handle_search}
          />
          <button 
            onClick={this.handleClick}
            class='search-button'>Search
          </button>
        </div>
        <TempDisplay1 data={this.state.search_display}/>
        <TempDisplay2 data={this.state.search_display}/>

      </div>
    );
  }
}

export default Search;
