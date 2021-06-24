import React, {useContext} from 'react';
import Employee from '../../pages/employee';
import dataEmployee from '../../utils/dataEmployee';
import './card.css'
import Container from '../Container/index'
function Card() {
    const context =useContext(dataEmployee)
    const formatDate = (date) => {
        const dateArr = date.split("-")
        
        const month = dateArr[1]
        const year = dateArr[0]
        const dayArr = dateArr[2].split("T")
        const day = dayArr[0]
        const formattedDate = [month, day, year].join("-")
        return formattedDate
    }
    return ( 
      
    <tbody className='container'>

       
        {context.employeeState.filteredUser.map(({name, login, picture, phone, email, dob}) =>{
            return(
                <tr key={login.uuid} className="card">
                <td data-th="Image" className="align-middle Image">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive card-img-top"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle card-body Name">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle card-body Phone">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle card-body Email">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle card-body DOB">
                  {formatDate(dob.date)}
                </td>
              </tr>

                );
                })}
                </tbody>
                );
                

}
export default Card;