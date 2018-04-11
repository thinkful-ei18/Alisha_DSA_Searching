import React, { Component } from 'react'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      reply: ''
    }
  }

  render() {

    /*
    Given the following dataset, find out how many tries did it take to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches did it take to do so.
    */

    const linear = input => {

      let count = 0;

      for (let i = 0; i < this.state.dataset.length/10 ; i++) {
        count ++;

        if (i === 0 && this.state.dataset[i] === input) {
          return this.setState({
            reply: `You found ${input} on the first try!`
          })
        }
        else if (this.state.dataset[i] === input) {
          return this.setState({
            reply: `You found ${input} in ${count} tries!`
          })
        }
      }

      return this.setState({
        reply: `After ${count} tries, ${input} could not be found.`
      })
       
    };

    /*
    Use the same front end and the dataset from the previous exercise for this one. Use array.sort to sort the dataset. Then implement Binary search to find a particular value in the dataset. Display how many tries it takes to search a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches did it takes to do so.
    */

    const binary = input => {

    };



    return (
      <section className="App">

        <header className="App-header">
          <h1 className="App-title">Pick A Number!</h1>
        </header>

        <form
          >
          <div>
            <label>
              Choose a number between 1 and 90, then decide whether to perform a linear or binary search for it.
            </label>
            <br></br>
            <input 
              type='number' 
              name='userGuess'
              id='userGuess'
              placeholder='1, 2, 3...'
              ref={input => this.input = input}
              required>
            </input>
          </div>
          <div className='buttons'>
            <button 
              type='submit'
              className='linear-button'
              onClick={e => {
                e.preventDefault();
                linear(parseInt(this.input.value, 10));
                this.input.value = '';
              }}
              >
              Linear
            </button>
            
          </div>
        </form>

        <div>
          {this.state.reply}
        </div>

      </section>
    );
  }
}


export default App;
