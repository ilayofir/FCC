import React from 'react';
import FCC from '../../FCC';

var TextInput = class TextInput extends FCC {
    constructor(props) {
        super(props);
    }

    getInitialState(props = this.props) {
        return {
            value: ""
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value })
    }

    renderHintText(props) {
        return (
            <FCC.HintText { ...props } />
        )
    }

    renderInput(props) {
        return (
            <FCC.Input { ...props } />
        )
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            value = this.state.value,
            isFocused,
            defaultValue,
            hintText,
            onFocus,
            onBlur,
            children,
            inputProps = {},
            hintTextProps = {},
            inputHasFocusOrValue = isFocused || value || (value === undefined && defaultValue),
            theme: {
                "HintText": hintTextTheme,
                "Input": inputTheme,
                "style": style
            },
            ...props
        } = this.getFCCProps();

        return (
            <div { ...props } style={style}>
                {this.renderHintText({ theme: hintTextTheme, inputHasFocusOrValue: inputHasFocusOrValue, value: hintText, ...hintTextProps })}
                {this.renderInput({ theme: inputTheme, value: value, defaultValue: defaultValue, onChange: this.onChange, onFocus, onBlur, ...inputProps })}
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default TextInput;