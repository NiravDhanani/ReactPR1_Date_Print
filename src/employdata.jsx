import { Component } from "react";

class Employee extends Component{
    
    constructor(){
        super();
        this.state= {
            employee : [
                {
                    empid : 1,
                    empname : "abc",
                    empemail : "abc@gmail.com",
                    empphone : 12345,
                    empaddress : {
                        country : "india",
                        state : "gujarat",
                        city : "surat",
                        area : "motavarachha"
                    },
                    empdeg : "junior",
                    empsalary : 23000,
                    empdepartment : "ui/ux"
                },
                {
                    empid : 2,
                    empname : "def",
                    empemail : "def@gmail.com",
                    empphone : 2121,
                    empaddress : {
                        country : "india",
                        state : "rajasthan",
                        city : "jaypur",
                        area : "jaypurabc"
                    },
                    empdeg : "junior",
                    empsalary : 21000,
                    empdepartment : "web design"
                },
                {
                    empid : 3,
                    empname : "ghi",
                    empemail : "ghi@gmail.com",
                    empphone : 2212,
                    empaddress : {
                        country : "india",
                        state : "maharashtra",
                        city : "pune",
                        area : "abcpune"
                    },
                    empdeg : "seniour",
                    empsalary : 65000,
                    empdepartment : "backend developer"
                },
                {
                    empid : 4,
                    empname : "jkl",
                    empemail : "jkl@gmail.com",
                    empphone : 212112,
                    empaddress : {
                        country : "india",
                        state : "karnatak",
                        city : "bengaluru",
                        area : "kgf"
                    },
                    empdeg : "tl",
                    empsalary : 150000,
                    empdepartment : "frontend developer"
                }
            ]
        }
    }

    render(){
        // console.log(this.state.employee);
        return(
            <div className="container" >
        <h1 className="text-center" >Employee Data Display</h1>
        <table className="table table-striped" border={1}>
            <thead>
            <tr>
                <th>SR.NO</th>
                <th>Employe Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Degree</th>
                <th>Salary</th>
                <th>Department</th>
            </tr>
            </thead>
           <tbody>
                {
                    this.state.employee.map((val)=>(
                        <tr key={val.empid}> 
                            <td>{val.empid}</td>
                            <td>{val.empname}</td>
                            <td>{val.empemail}</td>
                            <td>{val.empphone}</td>
                            <td>{val.empaddress.area} ,{val.empaddress.city} ,{val.empaddress.state} ,{val.empaddress.country}.</td>
                            <td>{val.empdeg}</td>
                            <td>{val.empsalary}</td>
                            <td>{val.empdepartment}</td>
                        </tr>
                    ))
                }
           </tbody>
        </table>
      </div>
        )
    }
}

export default Employee