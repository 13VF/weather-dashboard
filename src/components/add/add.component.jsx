import React, { Component } from 'react';
import './add.component.css';

class Add extends Component {
    render() {
        return (
            <div className="add">
              <input className="add__item add__item--input" placeholder="enter city" type="text"/>
              <div className="add__item add__item--btn">add</div>
              <div className="add__item add__item--btn">clear</div>
            </div>
        );
    }
}

export default Add;