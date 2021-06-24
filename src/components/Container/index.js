import React, { useContext } from 'react';
import dataEmployee from '../../utils/dataEmployee';
import Card from '../Card/index'
import './container.css'

function Container() {
    const context = useContext(dataEmployee)
    
    return (
        <div>
        <table id='table'>
            <thead>
            <tr>
                Sort By: 
            {context.employeeState.headings.map(({name}) =>{
                return (
                    <th className={name} key={name} onClick={() => {context.handleSort(name.toLowerCase())
                     }}>
                        {name}
                        
                        <span className="pointer"></span>
                    </th>
                );
            })}
            </tr>
            </thead>
        <Card />
        </table>
        </div>
    )
}

export default Container;