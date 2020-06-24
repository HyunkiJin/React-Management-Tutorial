import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
{
  'id': 1,
  'image': 'https://placeimage.com/64/64/1',
  'name': '진예서',
  'birthday': '091231',
  'gender': '여자',
  'job': '첫째'
},
{
  'id': 2,
  'image': 'https://placeimage.com/64/64/2',
  'name': '진예림',
  'birthday': '140530',
  'gender': '여자',
  'job': '둘째'
},
{
  'id': 3,
  'image': 'https://placeimage.com/64/64/3',
  'name': '진예림',
  'birthday': '160428',
  'gender': '남자',
  'job': '셋째'
}
]

class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}

              />
            )

          })
        }
        
      </div>
      
    )
  }
}

export default App;
