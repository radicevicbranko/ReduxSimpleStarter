import React, { Component } from 'react';

import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherTable extends Component {
    getTableRow(obj) {
        const city = obj.city;
        const temps = obj.list.map(weather => weather.main.temp);
        const pressure = obj.list.map(weather => weather.main.pressure);
        const humidity = obj.list.map(weather => weather.main.humidity);

        return (
            <tr key={city.name}>
                <td>{city.name}</td>
                <td>
                    <Chart data={temps} color="red" units="k"></Chart>
                </td>
                <td>
                    <Chart data={pressure} color="orange" units="hPa"></Chart>
                </td>
                <td>
                    <Chart data={humidity} color="green" units="%"></Chart>
                </td>
            </tr>
        );
    }

    render() {
        if (!this.props.weatherData)
            return <div></div>;


        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City name
                    </th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weatherData.map(this.getTableRow)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weatherData }) {
    return { weatherData };
}

export default connect(mapStateToProps)(WeatherTable);