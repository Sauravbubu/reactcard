import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter'
// import Todo from './components/Todo'
// import Child1 from './components/Child1';
import Giftcard from './Giftcard'
function App() {


  // let cname="SAurav"  //for parent to child data
  // const parentalert=(msg)=>{
  //   alert(msg)
  // }

const data=[
{
  color:"yellow",
  date:"28-12-22",
  btn:"Case Study",
  logo:"https://th.bing.com/th/id/OIP.GOGAIYvawWhbeRl8kCMlmwHaHa?pid=ImgDet&rs=1",
company:"Amazon",
platform:"Desktop-Mobile"
},{
  color:"yellow",
  date:"28-12-22",
  btn:"Case Study",
  log:"https://th.bing.com/th/id/OIP.GOGAIYvawWhbeRl8kCMlmwHaHa?pid=ImgDet&rs=1",
company:"Amazon",
platform:"Desktop-Mobile"
},{
  color:"grey",
  date:"30-12-22",
  btn:"Case Study",
  logo:"https://th.bing.com/th/id/R.a691dfa22635c11791f78e215d69bbc3?rik=Ms2XMlun2W9tTw&riu=http%3a%2f%2fincitrio.com%2fwp-content%2fuploads%2f2015%2f01%2fApple_gray_logo.png&ehk=7LassJNwds3BTEqitrfk8bUlGqmX01%2b5UMUCH1ixbBk%3d&risl=&pid=ImgRaw&r=0",
company:"apple",
platform:"macOS-Mobile"
},


]

  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter />
         */}
         {/* <Todo/> */}
{/* <Child1 fun={parentalert}/>
<h3>from child{}</h3> */}
<div className="container">
{data.map((el)=>{
 return <Giftcard  color={el.color} 
 date={el.date} btn={el.btn} logo={el.logo} 
 company={el.company} platform={el.platform} />
 
})}

</div>

      </header>
    </div>
  );
}

export default App;
