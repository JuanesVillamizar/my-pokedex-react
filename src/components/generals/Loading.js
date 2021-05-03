import React, {Component} from 'react';
import {Spinner} from 'reactstrap';

class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type: props.type ? 'grow' : '',
            state: this.getColors(),
            idTime: null,
        }
    }

    getColors() {
        const colors = ['success', 'primary', 'warning', 'danger', 'dark', 'secondary', 'info'];
        return colors[Math.floor(Math.random() * (colors.length - 1))];
    }

    componentDidMount() {
        this.changeStateLoading();
    }

    changeStateLoading = () => {
        let idTime = setTimeout(() => {
            //console.log(idTime);
            this.props.statusLoading(false);
        }, 10000);
        this.setState({idTime});
    }

    componentWillUnmount(){
        clearTimeout(this.state.idTime);
    }

    // _handleChange() {
    //     this.setState({...this.state, state: this.getColors()})
    // }

    render(){
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    { this.props.type === '' ? <Spinner color={this.state.state} /> : <Spinner type={this.props.type} color={this.state.state} />}
                </div>
            </div>
        );
    }
}

export default Loading;