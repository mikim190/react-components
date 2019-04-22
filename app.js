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
var GroceryListItem = (props) => (
    <ul>
        <li>{props.lists[0]}</li>
        <li>{props.lists[1]}</li>
    </ul>
);

var GroceryList = () => (
    <div>
        <h3>Reusable React components</h3>
        <GroceryListItem lists={['Kale', 'Romaine']}/>
    </div>
);

ReactDOM.render(<GroceryList/>, document.getElementById('app'));

// Refactor GroceryList to dynamically render an array of groceryItems,
// utilizing your new GroceryListItem component


