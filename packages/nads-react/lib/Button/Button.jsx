import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.any
    };

    static defaultProps = {
        onClick: () => {},
        children: "Button"
    };

    render() {
        const { children, onClick } = this.props;
        return <button className="btn rounded fill">{children}</button>;
    }
}

export default Button;
