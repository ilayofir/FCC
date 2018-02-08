import React from 'react';
import FCC from '../../FCC';

var Divider = class Divider extends FCC {
    constructor(props) {
        super(props);
    }

    renderCurtains(props) {
        return (
            <FCC.Animators.Curtains { ...props } />
        )
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            isFocused,
            areCurtainsRendered,
            children,
            curtainsProps,
            theme: {
                "style": style,
                "Animators.Curtains": curtainsTheme
            },
            ...props
        } = this.getFCCProps();

        return (
            <div { ...props } style={style}>
                {areCurtainsRendered ? this.renderCurtains({ theme: curtainsTheme, isOpen: isFocused, isReversed: true, ...curtainsProps }) : null}
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default Divider;