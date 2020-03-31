import React, { Component } from "react";
import styles from "./_container.scss";

export default class Container extends Component {
    render() {
        const { story } = this.props;

        return (
            <div role="main" className={styles.section}>
                <div className={styles.container}>{story()}</div>
            </div>
        );
    }
}
