import React from 'react';
import FCC from '../../FCC';

var Label = class Label extends FCC {
    constructor(props) {
        super(props);
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            value = '',
            children,
            theme: {
                "style": style
            },
            ...props
        } = this.getFCCProps();

        return (
            <span { ...props } style={style}>
                {value}
                {this.renderChildren(children)}
            </span>
        )
    }
}

export default Label;