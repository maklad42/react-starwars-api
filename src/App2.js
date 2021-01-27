import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People2';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

class App2 extends React.Component {
  state = {
    people: [],
    planets: [],
    starships: [],
    vehicles: [],
    loading: true,
  };

  componentDidMount() {
    let urlPeople = 'https://swapi.dev/api/people';
    let dataPeople = [];
    do {
      fetch(urlPeople)
        .then((res) => res.json())
        .catch(console.log);
      dataPeople.push(...res.results);
      urlPeople = res.results.next;
    } while (urlPeople != null);
    this.setState({ people: dataPeople });

    fetch('https://swapi.dev/api/planets')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ planets: res.results });
      })
      .catch(console.log);
    fetch('https://swapi.dev/api/starships')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ starships: res.results });
      })
      .catch(console.log);
    fetch('https://swapi.dev/api/vehicles')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ vehicles: res.results });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={this.state.people} />
              </Route>
              <Route exact path="/planets">
                <Planets data={this.state.planets} />
              </Route>
              <Route exact path="/ships">
                <Starships data={this.state.starships} />
              </Route>
              <Route exact path="/vehicles">
                <Vehicles data={this.state.vehicles} />
              </Route>
            </Switch>
          </Container>
        </Router>
      </>
    );
  }
}

export default App2;

// const [people, setPeople] = useState([]);
// const [planets, setPlanets] = useState([]);
// const [starships, setStarships] = useState([]);
// const [vehicles, setVehicles] = useState([]);
// const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPeople() {
//       let url = 'https://swapi.dev/api/people';
//       let data = [];
//       do {
//         let res = await fetch(url);
//         let tmpData = await res.json();
//         data.push(...tmpData.results);
//         url = tmpData.next;
//       } while (url != null);
//       setPeople(data);
//       setLoading(false);
//     }

//     async function fetchPlanets() {
//       let url = 'https://swapi.dev/api/planets/';
//       let data = [];
//       do {
//         let res = await fetch(url);
//         let tmpData = await res.json();
//         data.push(...tmpData.results);
//         url = tmpData.next;
//       } while (url != null);
//       setPlanets(data);
//       setLoading(false);
//     }

//     async function fetchStarships() {
//       let url = 'https://swapi.dev/api/starships/';
//       let data = [];
//       do {
//         let res = await fetch(url);
//         let tmpData = await res.json();
//         data.push(...tmpData.results);
//         url = tmpData.next;
//       } while (url != null);
//       setStarships(data);
//       setLoading(false);
//     }

//     async function fetchVehicles() {
//       let url = 'https://swapi.dev/api/vehicles/';
//       let data = [];
//       do {
//         let res = await fetch(url);
//         let tmpData = await res.json();
//         data.push(...tmpData.results);
//         url = tmpData.next;
//       } while (url != null);
//       setVehicles(data);
//       setLoading(false);
//     }

//     fetchPeople();
//     fetchPlanets();
//     fetchStarships();
//     fetchVehicles();
//   }, []);

//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Container>
//           {loading ? (
//             <Dimmer active inverted>
//               <Loader inverted>Loading...</Loader>
//             </Dimmer>
//           ) : (
//             <Switch>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route exact path="/people">
//                 <People data={people} />
//               </Route>
//               <Route exact path="/planets">
//                 <Planets data={planets} />
//               </Route>
//               <Route exact path="/ships">
//                 <Starships data={starships} />
//               </Route>
//               <Route exact path="/vehicles">
//                 <Vehicles data={vehicles} />
//               </Route>
//             </Switch>
//           )}
//         </Container>
//       </Router>
//     </>
//   );
// }

// export default App;
