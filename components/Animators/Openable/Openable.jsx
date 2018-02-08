import React from 'react';
import FCC from '../../../FCC';

var Openable = class Openable extends FCC {
    constructor(props) {
        super(props);
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            isOpen,
            children,
            theme,
            ...props
        } = this.getFCCProps();

        if (this.props.isOpen) FCC.utils.merge(theme, theme.opened);
        else FCC.utils.merge(theme, theme.closed);

        var {
            "style": style
        } = theme;

        return (
            <div { ...props } style={ style }>
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default Openable;