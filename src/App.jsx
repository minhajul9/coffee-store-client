import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';
import { useState } from 'react';


function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDeleteCoffee = id => {
    
  }



  return (
    <div className='m-32'>
      <h1 className='text-6xl my-8'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDeleteCoffee={handleDeleteCoffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
