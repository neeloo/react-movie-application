import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { Appstate } from '../App';

const Header = () => {
  const useAppstate = useContext(Appstate);
  return (
    <div className=' sticky z-10  header top-0 text-4xl  flex justify-between text-red-500 font-bold p-3 items-center border-b-2 border-gray-500'>
      <Link to={'/'}><span> Filmy<span className='text-white'>Verse</span></span></Link>
      {/* <Link className="nav-link active" to="/login">Login</Link> */}
      {useAppstate.login ?
        <Link to={'/addmovie'}><h1 className='text-lg flex items-center cursor-pointer' >
          <Button> <AddIcon className='mr-1' color='secondary' /><span className='text-white'>Add New</span> </Button>
        </h1>
        </Link>
        :
        <Link to={'/login'}> <h1 className='text-lg  bg-green-500 flex items-center cursor-pointer' >
          <Button><span className='text-white font-medium capitalize'>Login</span></Button>
        </h1>
        </Link>

      }

    </div>
  )
}

export default Header