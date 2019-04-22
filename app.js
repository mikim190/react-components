/*
create a GroceryList component that:
- contains an unordered list of 2 grocery items. 
- Render this component to the div tag in index.html with an id of app
*/


clearInterval// TODO

//Create simple GroceryList components
//that can take arguments by it's instance

// var GroceryList = () => (
//     <ul>
//         <li>Strawberry</li>
//         <li>Lemonade</li>
//     </ul>
// )
//Render simple GroceryList components
// Template--: ReactDOM.render(componentInstance, DOMElement)

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));

//-------------
// Create a reusable GroceryListItem component
// var GroceryListItem = (props) => {

//     var onListItemClick = (event) => {
//         alert('Item got clicked!'); //click on first <li> will alert this message
//     };

//     return (
//     <ul>
//         <li onClick={onListItemClick}>{props.lists[0]}</li>
//         <li>{props.lists[1]}</li>
//         <li>{props.lists[2]}</li>
//     </ul>
//     );
// }

// var GroceryList = () => (
//     <div>
//         <h3>Reusable React components</h3>
//         <GroceryListItem lists={['Kale', 'Romaine','Carrot']}/> 
        
//     </div>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));


//JSX version for React
//new GroceryListItem(var list =['Kale','Romaine'])
// Refactor GroceryList to dynamically render an array of groceryItems,
// utilizing your new GroceryListItem component

//-------ES6---------
// var listOfItems = ['Kale','Romaine'];
// class GroceryListItem extends React.Component {

//     constructor(props) {
//       // Equivalent to ES5's React.Component.call(this, props)
//       super(props);
      
      
//     }

//     render() {
//       return (
//         <li>{this.props.list}</li>
//       );
//     } 
//   }
  
//   var GroceryList = (props) => (
//       <ul>
//           {props.lists.map(list => 
//           <GroceryListItem list={list}/>
//         )}
//       </ul>
//     );

  
//   ReactDOM.render(<GroceryList lists={['Milk','Berry','Apple']}/>, document.getElementById("app"));

  //----STATE-----
  class GroceryListItem extends React.Component {
    constructor(props) {
      super(props);
  
      // `state` is just an object literal
      this.state = {
        done: false
      };

    }
  
    // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }
  
    render() {
      // Making the style conditional on our `state` lets us 
      // update it based on user interactions.
      var style = {
          
        textDecoration: this.state.done ? 'underline': 'none'
      };
  
      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      return (
        <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.list}</li>
      );
    }
  }

  var GroceryList = (props) => (
        <ul>
            {props.lists.map(list => 
            <GroceryListItem list={list}/>
            )}
        </ul>
    );


  ReactDOM.render(<GroceryList lists={['Milk','Berry','Apple']}/>, document.getElementById("app"));