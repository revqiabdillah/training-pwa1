import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './components/sigin/Componentt'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

// function NumberList(props) {
//   let items = [];
//   for(let dataIndex in props){
//     let dataItem = props[dataIndex]
//   items.push(<li key={dataIndex} >{dataItem.name}</li>)
//   }
// return <ul>{items}</ul>
// }

// class App extends React.Component {
//   render(){
//     console.log(this.props.data.getBrandList)
//     return (
//       <div className="App">
//         {/* <Signin /> */}
//         {NumberList(this.props.data.getBrandList)}
//       </div>
//     );
//   }
// }

const query = gql`
query {
  getBrandList {
    name
    attribute_id
    logo
    sort_order
  }
}
`;

// export default graphql(query)(App);


//use Hook

const App = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>         
      {data.getBrandList.map(item => <li key={item.attribute_id}>{item.name}</li>)}
    </ul>
  )
}

export default App;
