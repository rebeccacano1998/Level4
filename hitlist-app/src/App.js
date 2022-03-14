import React,{Component} from "react"

class App extends Component{

  constructor(){
  super()
  //this.state will hold all of our post
  this.state={
    posts:[]

    
  }
}

componentDidMount() {
  //fetch the api
    fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then((res)=> res.json())
      //set post to data
      .then((data)=>this.setState({posts:data}))

}
render(){
  console.log('render method called')
  

return(
  
    <>
      <h1>Hit List</h1>
       {/*Map through post and render the name and images*/}
       <h1>{this.state.posts.map( post =><div>{post.name} <br/><br/>
       
       <img src={post.image}  width="300" height="300"/></div>)}</h1>
      
    </>


  )}
}





export default App;
