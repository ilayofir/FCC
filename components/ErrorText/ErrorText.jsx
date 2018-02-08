import React from 'react';
import FCC from '../../FCC';

var ErrorText = class ErrorText extends FCC {
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
            <div { ...props } style={style}>
                {value}
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default ErrorText;