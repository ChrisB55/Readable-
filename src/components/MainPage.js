import React, { Component } from 'react';


class MainPage extends Component {
  render() {
    return (
      <div>
     
  <div className="container">
      <div className="page-header">
      
          <h3>List of Available Categories </h3>
      </div>
        <p>
          <button className="btn btn-primary" type="button">Sort by Timestamp</button>
        </p>
        <p>
          <h3> <button className="btn btn-primary-primary" type="button">Add New Post </button></h3>
        </p>
      <div className="table">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Categories </th>
                      <th>Vote Score</th>
                      <th>Timestamp </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Category A</td>
                      <td>9 </td>
                      <td>id1 </td>
                  </tr>
                  <tr>
                      <td>Category B</td>
                      <td>8 </td>
                      <td>id2</td>
                  </tr>
                  <tr>
                      <td>Category C</td>
                      <td>5 </td>
                      <td>id3</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div className="page-header">
        
      </div>
  </div>
  <footer className="site-footer">
      <div className="container">
          <div className="row">
              <div className="col-sm-6">
                  <h5>Christopher Brown Web Development 2017</h5>
                </div>
          </div>
      </div>
  </footer>
  
      </div>
    );
  }
}

export default MainPage;