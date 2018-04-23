import * as _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dashboard.component.css';

import { removeCity } from '../../actions/cities';

import DashboardItem from './dashboard-item/dashboard-item.component';

class Dashboard extends Component {
    render() {
        const { cities } = this.props;
        let citiesToRender = _.values(cities);

        const renderDashboard = () => {
            if(citiesToRender.length === 0) {
                return (
                    <div>Dashboard is empty!</div>
                );
            } else {
                return citiesToRender.map( (item, index) => (
                    <DashboardItem 
                        key={ index } 
                        title={ item.title } 
                        temp={ item.temp }
                        iconId={ item.iconId }
                        onDelete={ () => this.props.onCityDelete(item.title) }
                    />
                ));
            }
        };

        return (
            <div className="dashboard">
                { renderDashboard() }
            </div>
        );
    }
}

const ConnectedDashboard = connect(
    (state) => ({
        cities: state.cities.cities
    }),
    (dispatch) => ({
        onCityDelete: (id) => {
            dispatch(removeCity(id))
        }
    })
)(Dashboard);

export default ConnectedDashboard;