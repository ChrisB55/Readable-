import React, { Component } from 'react';
import { connect } from 'react-redux';
// also smart container

class TableListDetail extends Component {
    render() {
        if (!this.props.category) {
            return <div> select a category</div>;
        }
        return (
            <div> 
            <h4>The category selected is </h4>
            <div> title {this.props.category.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeCategory
    }
}

export default connect(mapStateToProps)(TableListDetail);