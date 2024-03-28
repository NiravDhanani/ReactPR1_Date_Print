import { Component } from "react";

class Child extends Component {
  constructor(propes) {
    super(propes);
    this.state = {
      userData: this.props.record,
    };
  }

  render() {
    // console.log(this.state.userData);
    return (
      <div className="container " >
        <h1 className="text-center">User Data Display</h1>
        <table className="table table-striped" border={1}>
            <thead>
            <tr>
                <th>SR.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Course</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.userData.map((val)=>(
                        <tr key={val.grid}>
                            <td>{val.grid}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.course.join(" , ")}</td>
                            <td>{val.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    );
  }
}

export default Child;
