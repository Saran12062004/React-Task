import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Listandkeys from '../Component/Listandkeys'
import Status from '../Component/Status'
import BackroundButton from '../Component/BackroundButton'
import Contact from '../Component/Form validation/Contact'
import Timer from '../Component/Timer'
import Todo from '../Component/Todo'
import Counter from '../Component/Counter'
import LifeCycle from '../Component/LifeCycle'
import Pagination from '../Component/Pagination'
import Usereduce from '../Component/Usereduce'
const Routing = () => {
  return (
    
    <Routes>
        <Route path='/Listandkeys' element={<Listandkeys />} />
        <Route path='/BackroundButton' element={<BackroundButton />} />
        <Route path='/Status' element={<Status />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Timer' element={<Timer />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/Pagination' element={<Pagination />} />
        <Route path='/Usereduce' element={<Usereduce />} />
     </Routes>
    
  )
}

export default Routing
