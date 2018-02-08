import React from 'react';
import FCC from '../../FCC';

var TopBar = class TopBar extends FCC {
    constructor(props) {
        super(props);
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            children,
            theme: {
                "style": style
            },
            ...props
        } = this.getFCCProps();

        return (
            <div { ...props } style={style}>
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default TopBar;