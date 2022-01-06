import logo from './logo.svg';
import './App.css';
import Card from "./Card"

function App() {
  let Cards=[{
    plan: "BASIC",
    team:"For Team of 3-5 Members",
    price:28,
    save:"$20",
    features:[{
     name:"Perfect of Small Team"
    },{
      name:"Unlimited Invoices"
     },{
      name:"Project Management"
     }]
  },{
    plan: "INTERMEDIATE",
    team:"For Team of 5-10 Members",
    price:39,
    save:"$30",
    features:[{
     name:"Perfect of Small Team"
    },{
      name:"Unlimited Invoices"
     },{
      name:"Project Management"
     },{
      name:"Team Management"
     }]
  },{
    plan: "PREMIUM",
    team:"For Team of 10-25 Members",
    price:58,
    save:"$50",
    features:[{
     name:"Perfect of Small Team"
    },{
      name:"Unlimited Invoices"
     },{
      name:"Project Management"
     },{
      name:"Team Management"
     },{
      name:"Time Tracking"
     }]
  },{
    plan: "ULTRA",
    team:"For Team of 25-100 Members",
    price:99,
    save:"$80",
    features:[{
     name:"Perfect of Small Team"
    },{
      name:"Unlimited Invoices"
     },{
      name:"Project Management"
     },{
      name:"Team Management"
     },{
      name:"Time Tracking"
     }]
  }]

  return (
    <div class="pricing1 py-5 bg-light">
      <div  class="container">
      <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
      
         {Cards.map(obj=> <Card data={obj}></Card>)}
      </div>    
      </div>
      </div>
    
  );
}

export default App;