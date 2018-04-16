import React, { Component } from 'react';
import './dashboard-item.component.css';

class DashboardItem extends Component {
    render() {
        let { title, temp } = { ...this.props };

        return (
            <div className="dashboard__item">
                <div className="dashboard__item-line dashboard__item-line--title">
                    { title }
                </div>
                <div className="dashboard__item-line">
                    { temp }
                </div>
            </div>
        );
    }
}

export default DashboardItem;