import React, { Component } from 'react';
import { connect } from 'react-redux';


//Smart Compnent(Container)
class TableList extends Component {
    renderList() {
        return this.props.categories.map((category) => {
            return (
            
            <li key={category.id}>
            {category.name}
            </li>
        );
        });
    }

    render() {
        return (
          <ul className="list-group col-sm-4">
            {this.renderList()}
          </ul>
        )
      }
    }
    
    function mapStateToProps(state) {
      // Whatever is returned will show up as props
      // inside of tableList hopefully
      return {
        categories: state.categories
      };
    }
    
    export default connect(mapStateToProps)(TableList);