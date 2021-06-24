import React, { useState, useEffect} from "react";
import API from '../../utils/API'
import dataEmployee from '../../utils/dataEmployee';
import Container from '../../components/Container/index'
import Nav from '../../components/Nav/index'
function Employee() {

 const [employeeState, setEmployeeState] = useState({
     user: [],
     filteredUser: [],
     order: "ascend",
     headings: [
        { name: "Image", width: "10%", },
        { name: "Name", width: "10%", },
        { name: "Phone", width: "10%", },
        { name: "Email", width: "10%", },
        { name: "DOB", width: "10%", },
      ]
 });


 
 
    const handleSort = heading => {
        if (employeeState.order === "descend") {
            setEmployeeState({...employeeState,
                order:"ascend"
            })
        } else {
            setEmployeeState({...employeeState,
                order:"descend"
            })
        }
    
        const compareFnc = (a, b) => {
          if (employeeState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
            } else  {
            if (a[heading] === undefined){
                return 1;
            } else if (b[heading] === undefined){
                return -1;
            } else if (heading ==="name"){
                return b[heading].first.localeCompare(a[heading].first);
            } else {
                return b[heading]-  a[heading];
            }
    }
    }
        const sortedUsers = employeeState.filteredUser.sort(compareFnc);

        setEmployeeState({
          ...employeeState,
          filteredUser: sortedUsers
        });

    };
    
    

    const handleSearch = (e) => {
        const filteredUser = employeeState.user.filter(item => {
            let value = item.name.first.toLowerCase()
            return value.indexOf(e.target.value.toLowerCase()) !==-1;
        });
        setEmployeeState({...employeeState, filteredUser}) 
    }

    useEffect(() => {
        API.searchEmployee()
        .then(res => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          
          setEmployeeState( {...employeeState, user: res.data.results, filteredUser: res.data.results } )
          })
          .catch(err => console.log(err));
      },[])

    return(
        <dataEmployee.Provider value={{employeeState, handleSearch, handleSort}}>
            <Nav />
          <div className="data-area">
            {employeeState.filteredUser.length > 0 
    ? <Container />
     : <div></div>
     }
          </div>
        </dataEmployee.Provider>
    )


}

export default Employee;