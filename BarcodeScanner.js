import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { BarCodeScanner, Permissions } from 'expo';
import _ from 'lodash'

export default class BarcodeScanner extends Component {
    
    constructor(props) {
        super(props)

        //this._handleBarCodeRead = this._handleBarCodeRead.bind(this)
        this._handleBarCodeRead = _.debounce(this._handleBarCodeRead.bind(this), 500, {leading:true, trailing:false});
    }

    state = {
        hasCameraPermission : null
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        
        if (status === 'granted') {
            this.setState({ hasCameraPermission : true })
        } else {
            this.setState({ hasCameraPermission : false })
        }
    }

    _handleBarCodeRead = (data) => {
        const { addPerson } = this.props.navigation.state.params

        let dataArray = data.data.split('~')

        let person = {
            id : dataArray[0],
            firstName : dataArray[1],
            lastName : dataArray[2],
            imageUrl : dataArray[3]
        }

        addPerson(person)

        this.props.navigation.goBack()
    }

    render() { 
       const { hasCameraPermission } = this.state

       if (hasCameraPermission ===  null) {
           return (<Text>Requesting for camera permission</Text>)
       } else if ( hasCameraPermission === false) {
           return (<Text>No access to camera</Text>)
       } else {
           return (
            <View style={{ flex : 1 }}>
                <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead}
                    style={{ height : 200, width : 200 }}
                />
            </View>
           )
       }
    }

}