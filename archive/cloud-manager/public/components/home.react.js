var React = require('react');
import { browserHistory } from 'react-router'

function Logo() {
    return (
        <div className="lockscreen-logo">
            <a href="javascript:void(0);"><b>Home</b>Page</a>
        </div>
    )
}

function Alumni() {
    return (
        <div className="text-center">
         <a href="javascript:void(0);" onClick={() => {browserHistory.push('/Alumni')}} >Nankai University Vancouver Alumni</a>
       </div>
    )
}

function Profile({ profile }) {
    return (
        <div className="text-center">
            <a href="javascript:void(0);" onClick={() => {browserHistory.push('/Profile/' + profile)}} >{profile} User Profile</a>
        </div>
    )
}

function Footer({ info }) {
    return (
        <div className="lockscreen-footer text-center">
         Copyright &copy; 2016-2017 <b><a href="javascript:void(0);" className="text-black">ZhaoqingQiang Studio</a></b><br />
         All rights reserved<br />
         Login user count: {info}
       </div>
    )
}

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.onLoadLoginUsers()
    }
    render() {
        return (
            <div className="lockscreen">
                <div className="lockscreen-wrapper">
                    <Logo />
                    <Alumni />
                    <Profile profile="BillQiang" />
                    <Profile profile="EllaFan" />
                    <Footer info={this.props.loginUsersCount} />
                </div>
            </div>
        )
    }
}

export default Home