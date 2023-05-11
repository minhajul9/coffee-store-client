import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';
import { useState } from 'react';
import Swal from 'sweetalert2';


function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDeleteCoffee = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              const remaining = coffees.filter( coffee => coffee._id !== id)

              setCoffees(remaining)
            }
          })
      }
    })
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
