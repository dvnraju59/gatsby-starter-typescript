// import * as React from 'react'
// import Link from 'gatsby-link'

// const SecondPage = () => (
//   <div>
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </div>
// )

// export default SecondPage

import React from 'react'

interface MyProps {}
interface MyState {}

export default class RandomAPIData extends React.Component<MyProps, MyState> {
  state = {
    starships: [],
    loading: true,
    error: false
  }

  componentDidMount () {
    fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then(response => this.setState({ 
        starships: response.results,
        loading: false
      }))
      .catch(error => this.setState({ 
        loading: false, 
        error: true 
      }));
  }

  render () {
    const { starships, loading, error } = this.state;
    return (
      <div><h1>Starships</h1>
        {loading && <div>Loading...</div>}
        {!loading && !error && 
          starships.map(starship => (
            <div key={starship.name}>
              {starship.name}
            </div>
          ))
        }
        {error && <div>Error message</div>}
      </div>
    );
  }
}