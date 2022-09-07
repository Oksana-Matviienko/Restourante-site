import Filter from "./Filter"
const AllCategories = ()=>{
   return(
      <div>
<h1>What would you prefere?</h1>
{['All', 'Burgers & Sandwiches', 'Side dishes & salads', 'Roll-Lavash', 'Drinks'].map(category=> <Filter category={category}/>)}
      </div>
   )
}
export default AllCategories

