import React from 'react';
import DateTime from './DateTime'
import Moment from 'moment'
import 'moment/locale/ru';

function withLogger(Component) {
    return class extends React.Component {
        state = {
            date: ``
        }
    
        componentDidMount() {
            this.count()
        }
        count() {
            const resultDeffDays = Moment().diff(Moment(this.props.date), 'd')
            const resultDeffHours = Moment().diff(Moment(this.props.date), 'H')

            if(resultDeffDays > 1) {
                console.log(`${resultDeffDays} дней назад`)
                this.setState({date:`${resultDeffDays} дней назад`})
            } else if(resultDeffHours > 1) {
                console.log(`5 часов назад`)
                this.setState({date:`5 часов назад`})
            } else if(resultDeffHours < 1) {
                console.log(`12 минут назад`)
                this.setState({date: '12 минут назад'})
            }
        }
        render() {
            return <Component {...this.props} date={this.state.date} />
        }
    }
}

const DateTimePretty = withLogger(DateTime)
export default DateTimePretty