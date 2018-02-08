import React from 'react';
import FCC from '../../FCC';

var Button = class Button extends FCC {
    constructor(props) {
        super(props);
    }

    getInitialState(props = this.props) {
        return {
            isMouseOver: false,
            isFocused: false
        }
    }

    onMouseEnter(e) {
        this.setState({
            isMouseOver: true,
        })
    }

    onMouseLeave(e) {
        this.setState({
            isMouseOver: false,
        })
    }

    onFocus(e) {
        this.setState({
            isFocused: true
        })
    }

    onBlur(e) {
        this.setState({
            isFocused: false
        })
    }

    renderLabel(props) {
        if(!props.value) return null;

        return (
            <FCC.Label { ...props } />
        )
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            value,
            isSelected,
            children,
            labelProps,
            theme,
            ...props
        } = this.getFCCProps();

        var {
            isMouseOver
        } = this.state;

        if (isMouseOver) FCC.utils.merge(theme, theme.mouseOver);
        if (isSelected) FCC.utils.merge(theme, theme.selected);

        var {
            "style": style,
            "Label": labelTheme
        } = theme;

        return (
            <div { ...props } style={style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onFocus={this.onFocus} onBlur={this.onBlur}>
                {this.renderLabel({ theme: labelTheme, value: value, ...labelProps })}
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default Button;