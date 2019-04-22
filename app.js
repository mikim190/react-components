/*
create a GroceryList component that:
- contains an unordered list of 2 grocery items. 
- Render this component to the div tag in index.html with an id of app
*/


clearInterval// TODO

//Create simple GroceryList components
//that can take arguments by it's instance

var GroceryList = () => (
    <ul>
        <li>Strawberry</li>
        <li>Lemonade</li>
    </ul>
)
//Render simple GroceryList components
// Template--: ReactDOM.render(componentInstance, DOMElement)
ReactDOM.render(<GroceryList/>, document.getElementById('app'));