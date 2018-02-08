import React from 'react';
import FCC from '../../FCC';

var preview = class preview extends FCC {
    constructor(props) {
        super(props);
    }

    getInitialState(props = this.props) {
        return {
            value: "",
            isFocused: false
        }
    }

    render() {
        var {
            theme: {
                "style": style
            },
            ...props
        } = this.getFCCProps();

        var {
            isFocused
        } = this.state;

        return (
            <div { ...props } style={style}>
                <span>1 example</span>
                <FCC.TextField></FCC.TextField>
                <span>2 example</span>
                <FCC.TextField hintText="hintText"></FCC.TextField>
            </div>
        )
    }
}

export default preview;