import React from 'react';
import FCC from '../../FCC';

var ComponentDisplay = class ComponentDisplay extends FCC {
    constructor(props) {
        super(props);
    }

    renderChildren(children) {
        return children || null;
    }

    renderComponent(FCCComponent) {
        if (!FCCComponent) return null;

        if (FCCComponent.preview) {
            return (
                <FCCComponent.preview />
            )
        }

        return (
            <FCCComponent />
        )
    }

    render() {
        var {
            component,
            children,
            theme: {
                "style": style
            },
            ...props
        } = this.getFCCProps();

        return (
            <div { ...props } style={style}>
                {this.renderComponent(component)}
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default ComponentDisplay;