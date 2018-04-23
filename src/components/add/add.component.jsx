import React, { Component } from 'react';
import { connect } from 'react-redux';
import './add.component.css';

import { fetchCity } from '../../actions/cities';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    hanldeInputKeydown(event) {
        if(event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.addCity();
        }
    }

    addCity() {
        this.props.onCityAdd(this.state.inputValue);
        this.clearInput();
    }

    clearInput() {
        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <div className="add">
              <input className="add__item add__item--input" 
                placeholder="enter city" 
                type="text"
                value={ this.state.inputValue }
                onChange={ (event) => this.handleInputChange(event) }
                onKeyDown={ (event) => this.hanldeInputKeydown(event) }
                tabIndex="0"
              />
              <div className="add__item add__item--btn"
                onClick={ () => this.addCity() }
              >
                add
              </div>
              <div className="add__item add__item--btn"
                onClick={ () => this.clearInput() }
              >
                clear
              </div>
            </div>
        );
    }
}

const ConnectedAdd = connect(
    () => ({}),
    (dispatch) => ({
        onCityAdd: (id) => {
            dispatch(fetchCity(id))
        }
    })
)(Add);

export default ConnectedAdd;