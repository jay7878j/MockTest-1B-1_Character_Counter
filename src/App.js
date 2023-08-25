import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddBtnClick = event => {
    event.preventDefault()

    const {searchInput} = this.state

    this.setState(prev => ({
      wordsList: [...prev.wordsList, searchInput],
      searchInput: '',
    }))
  }

  render() {
    const {wordsList, searchInput} = this.state

    return (
      <div>
        <div>
          <h1>Count the characters like a Boss...</h1>

          <ul>
            {wordsList.length > 0 ? (
              <>
                {wordsList.map(each => (
                  <li key={v4()}>
                    <p>
                      {each}: {each.length}
                    </p>
                  </li>
                ))}
              </>
            ) : (
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </li>
            )}
          </ul>
        </div>
        <div>
          <h1>Character Counter</h1>
          <form onSubmit={this.onAddBtnClick}>
            <input
              type="text"
              value={searchInput}
              onChange={this.onSearchInput}
              placeholder="Enter the Characters here"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
