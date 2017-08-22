import React, { Component } from 'react';


class MainPage extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-default">
      <div class="container">
          <div class="navbar-header"><a class="navbar-brand navbar-link" href="#"><em>Readable</em> </a>
              <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
          </div>
          <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="nav navbar-nav">
                  <li role="presentation">
                      <a href="#"> </a>
                  </li>
                  <li role="presentation">
                      <a href="#"> </a>
                  </li>
                  <li role="presentation"><a href="#">A Content and Comment Web Application Build With React-Redux</a></li>
              </ul>
          </div>
      </div>
  </nav>
  <div class="container">
      <div class="page-header">
          <h3>List of Available Categories </h3></div>
      <p>
          <button class="btn btn-primary" type="button">Sort by Timestamp</button>
      </p>
      <div class="table-responsive">
          <table class="table table-striped">
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
      <div class="page-header">
          <h3>Add New Post<button class="btn btn-primary write-review" type="button">Add New Post</button></h3></div>
  </div>
  <footer class="site-footer">
      <div class="container">
          
          <div class="row">
              <div class="col-sm-6">
                  <h5>Christopher Brown Web Development 2017</h5></div>
          </div>
      </div>
  </footer>
  
      </div>
    );
  }
}

export default MainPage;
