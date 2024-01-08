
import React, { Component } from 'react';
import BasicInfo from './basicInfo'; 
import './App.css'; // 

// Define the main App component
class App extends Component {
  // Constructor function initializes the component with properties and state
  constructor(props) {
    //  calls the constructor of the Component
    super(props);
    // The state object stores data for component
    this.state = {

      
      people: [
        {
          name: 'Chastity Matthews',
          title: 'Software Engineer',
          phoneNumber: '(843) 345-0709',
        },
        {
          name: 'Beyonce Knowles',
          title: 'Singer',
          phoneNumber: '(913) 854-0624',
        },
        {
          name: 'Barrack Obama',
          title: 'President',
          phoneNumber: '(294) 7301-6729',
        },
        {
          name: 'Tyra Banks',
          title: 'Model',
          phoneNumber: '(982) 529-5492',
        },
        {
          name: 'Rachael Ray',
          title: 'Chef',
          phoneNumber: '(704) 837-8492',
        },
      ],
    };
  }



  // render method returns the JSX component user interface
  render() {
    return (
      <div>
        {/*map function to iterate over each person in the 'people' array */}
        {this.state.people.map((person, index) => (
          // Render each person, passing the key and person as props
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
