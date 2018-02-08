import React from 'react';
import FCC from '../../FCC';

var HintText = class HintText extends FCC {
    constructor(props) {
        super(props);
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            value = '',
            inputHasFocusOrValue,
            inputHasFocus,
            inputHasValue,
            children,
            theme,
            ...props
        } = this.getFCCProps();

        if (inputHasFocusOrValue) FCC.utils.merge(theme, theme.inputHasFocusOrValue);
        if (inputHasFocus) FCC.utils.merge(theme, theme.inputHasFocus);
        if (inputHasValue) FCC.utils.merge(theme, theme.inputHasValue);

        var {
            "style": style
        } = theme

        return (
            <span { ...props } style={style} >
                {value}
                {this.renderChildren(children)}
            </span>
        )
    }
}

export default HintText;