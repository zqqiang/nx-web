var React = require('react');

function Logo() {
    return (
        <div className="lockscreen-logo">
            Coming soon...
        </div>
    )
}

export default function NoMatch() {
    return (
        <div className="lockscreen">
            <div className="lockscreen-wrapper">
                <Logo />
            </div>
        </div>
    )
}
