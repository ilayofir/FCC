// TODO: support number and password input

import React from 'react';
import FCC from '../../FCC';

var Input = class Input extends FCC {
    constructor(props) {
        super(props);
    }

    render() {
        var {
            theme: {
                "style": style
            },
            ...props
        } = this.getFCCProps();

        return (
            <input type='text' { ...props } style={style} />
        )
    }
}

export default Input;