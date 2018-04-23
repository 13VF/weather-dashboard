import React, { Component } from 'react';
import { convertKToC } from '../../../utils/weather';
import './dashboard-item.component.css';

class DashboardItem extends Component {
    render() {
        let { title, temp, iconId } = { ...this.props };

        return (
            <div className="dashboard__item">
                <div className="dashboard__item-line dashboard__item-line--title">
                    { title }
                </div>
                <div className="dashboard__item-line">
                    { convertKToC(temp) + ' °C' }
                </div>
                <div className="dashboard__item-line dashboard__item-line--delete"
                    onClick={ () => this.props.onDelete() }>
                    delete
                </div>
                <div className="dashboard__item-line">
                    <img src={ `http://openweathermap.org/img/w/${iconId}.png` } alt="weather icon"/>
                </div>
            </div>
        );
    }
}

export default DashboardItem;