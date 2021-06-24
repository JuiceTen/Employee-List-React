import React, {useContext} from 'react';
import dataEmployee from '../../utils/dataEmployee';
import './nav.css'

function Nav() {
    const context = useContext(dataEmployee);

    return (
        <nav>
            <form>
               <input type='search' onChange={e => context.handleSearch(e)}/>
            </form> 
        </nav>
    )
}

export default Nav;