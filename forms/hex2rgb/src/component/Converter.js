import React from 'react'

export default class Converter extends React.Component {
    state = {
        background: 'white',
        convertColor: ''
    }
       
    handleChangeColor = (evt) => {
        let hex = evt.target.value
        if(hex === '') {
            this.setState({
                background: '',
                convertColor: ''
            }) 
        } else if(hex.length > 6) {
                       
            if(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
                let rgb = `rgb(${(parseInt(hex.replace(/\#/gi,''), 16) >> 16) & 255},
                ${(parseInt(hex.replace(/\#/gi,''), 16) >> 8) & 255},
                ${(parseInt(hex.replace(/\#/gi,''), 16)) & 255})`;

                this.setState({
                    background: hex,
                    convertColor: rgb
                })
            } else {
                this.setState({
                    background: 'red',
                    convertColor: 'Error'
                })
            }
        }
   }

    render() {
        return (
            <div className="App" style={{backgroundColor: this.state.background}}>
                <div className="block">
                    <input type="text" name="text" placeholder="#000000"
                        onChange={this.handleChangeColor} />
                </div>
                <div className="block">
                    <p>{this.state.convertColor}</p>
                </div>
            </div>
        )
    }
}