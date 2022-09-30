import React from 'react'
import CardList from "./components/search-box/card-list/Card-list";

import './App.css';
import SearchBox from "./components/search-box/Search-box";

interface State {
  monsters:{
    id:number
    name:string
    email:string
  }[],
  filteredMonsters:{
    id:number
    name:string
    email:string
  }[]
}

interface Monster{
  id:number
  name:string
  email:string
}


class App extends React.Component <any,State> {

  state={
    monsters: [],
    filteredMonsters:[]
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.ir/users')
        .then(res => {
          return res.json()
        }).then(users => {
      this.setState(() => {
        return {
          monsters: [...users],
          filteredMonsters: [...users]
        }
      })
    })
  }

  searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredMonsters = (this.state.monsters as Monster[]).filter(monster => {
      return monster.name.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState(() => {
      return {filteredMonsters: filteredMonsters}
    })
  }

  render() {
    const {filteredMonsters} = this.state
    const {searchInputHandler} = this

    return (
        <div className="App" dir='rtl'>
          <h1 className='app-title'>هیولا ها</h1>

          <SearchBox searchInputHandler={searchInputHandler} placeholder='هرچی تو بگی' className='monsters-search-box'/>
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;
