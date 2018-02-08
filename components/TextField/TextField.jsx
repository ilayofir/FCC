import React from 'react';
import FCC from '../../FCC';

var TextField = class TextField extends FCC {
    constructor(props) {
        super(props);
    }

    getInitialState(props = this.props) {
        return {
            value: "",
            isFocused: false
        }
    }

    onChange(cb, e) {
        this.setState({ value: e.target.value });
    }

    onTextInputBlur(e) {
        this.setState({ isFocused: false })
    }

    onTextInputFocus(e) {
        this.setState({ isFocused: true })
    }

    renderTextInput(props) {
        return (
            <FCC.TextInput { ...props } />
        )
    }

    renderDivider(props) {
        return (
            <FCC.Divider { ...props } />
        )
    }

    renderErrorText(props) {
        return (
            <FCC.ErrorText { ...props } />
        )
    }

    renderChildren(children) {
        return children || null;
    }

    render() {
        var {
            theme: {
                "style": style,
                "TextInput": textTheme,
                "ErrorText": errorTextTheme,
                "HintText": hintTextTheme,
                "Divider": dividerTheme
            },
            value = this.state.value,
            defaultValue,
            hintText,
            errorText,
            children,
            textInputProps = {},
            dividerProps = {},
            errorTextProps = {},
            ...props
        } = this.getFCCProps();

        var {
            isFocused
        } = this.state;

        return (
            <div { ...props } style={style}>
                {this.renderTextInput({ theme: textTheme, isFocused: isFocused, value: value, defaultValue: defaultValue, hintText: hintText, onChange: this.onChange, onFocus: this.onTextInputFocus, onBlur: this.onTextInputBlur, ...textInputProps })}
                {this.renderDivider({ theme: dividerTheme, isFocused: isFocused, areCurtainsRendered: true, ...dividerProps })}
                {this.renderErrorText({ theme: errorTextTheme, value: errorText, ...errorTextProps })}
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default TextField;