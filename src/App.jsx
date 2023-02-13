import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getAsyncUsers } from './store'

function App() {


  const users = useSelector(state => state.users)


  const dispatch = useDispatch()

  const getUsers = () => {
    dispatch(getAsyncUsers())
  }

  return (
    <div className="App">
      <button onClick={getUsers}>Get Users</button>
      <div>
        {users && 
          users.map(user => (<h1>{user.username}</h1>))
        }
      </div>
    </div>
  )
}

export default App
