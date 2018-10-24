import React, { Component } from 'react';

class FamousPerson extends Component {
  
   state = {
     user: {
       name: '',
       role: '',
     }
   };
   
   handleChangeFor = (propertyName) => {
     return (event) => {
       this.setState( { 
         user: {
           ...this.state.user,
           [propertyName]: event.target.value 
         }
       });
     }
   }

   logData = (event) => {
     console.log(this.state.user.name);
   }
   
   render() {
     return (
         <section>
           <label htmlFor="nameInput">Name</label>
           <input className="nameInput" onChange={this.handleChangeFor('name')}/>
           <label htmlFor="roleInput">Role</label>
           <input className="roleInput" onChange={this.handleChangeFor('role')}/>
           <button onClick={this.logData} >Log Info</button>
           <p>{this.state.user.name} is famous for: {this.state.user.role}</p>
         </section>
     );
   }
 }

export default FamousPerson;