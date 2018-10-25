import React, { Component } from 'react';

class FamousPersonList extends Component {
  
  render() {

   let htmlList = this.props.list.map( (celebrity) => {
      return <li>{celebrity.name}</li>
   });
   
   return (
   <section>
      <h3>List of Celebrities</h3>
      <ul>{htmlList}</ul>
   </section>
   );
  }
}

export default FamousPersonList;