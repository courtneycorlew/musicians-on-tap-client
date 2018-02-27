import React from 'react';
import '../App.css'



export default class Search extends React.Component {
    
    filterUpdate() {
        const val = this.myValue.value
        console.log(val)
        this.props.filterUpdate(val)
      
    }
 

  

    render() {
        return (
            
            
                <form>
                <input type="text" ref={(value) => {this.myValue = value}} 
                 placeholder="Search by Location"
                 onChange={this.filterUpdate.bind(this)}
                 className="searchBar" />
                 </form>
          
   
        )
    }
}