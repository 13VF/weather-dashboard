import React, { Component } from 'react';
import './dashboard.component.css';

import DashboardItem from './dashboard-item/dashboard-item.component';

class Dashboard extends Component {
    render() {
        let items = [
            {
                title: 'Moscow',
                temp: 13
            },
            {
                title: 'Moscow',
                temp: 13
            }
        ];

        return (
            <div className="dashboard">
                { items.map( (item, index) => (
                    <DashboardItem 
                        key={ index } 
                        title={ item.title } 
                        temp={ item.temp } 
                    />
                )) }
            </div>
        );
    }
}

export default Dashboard;