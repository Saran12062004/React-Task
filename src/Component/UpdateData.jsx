// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

//  class UpdateData extends Component {
//     constructor(){
//         super()
//         console.log('constructor executed');
//     }

//     state = {
//         userData:[]
//     }

//     static getDerivedStateFromProps(props,state){
//         console.log('getDerivedStateFromProps Executed');
//         return null
//     }

//     componentDidMount(){
//         console.log('compontentdidmount');
//         this.getUserData()
        
//     }
//     getUserData = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         this.setState({userData: data})
//         console.log(data);
//     }
//   render() {
//     console.log('render executed')
//     return (
//       <div>
//         <h2>UserData</h2>
//         <table>
//             <thead>
//                 <td>S.No</td>
//                 <td>Name</td>
//                 <td>UserName</td>
//                 <td>Email</td>
//             </thead>
//             {
//                 this.state.userData && this.userData.length> 0 && this.state.userData.map((user,index) => (
//                     <tr key={index}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.username}</td>
//                         <td>{user.email}</td>
//                     </tr>
//                 ))
//             }
//         </table>
//       </div>
//     )
//   }
// }

// export default UserData

