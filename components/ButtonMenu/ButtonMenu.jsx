import React from 'react';
import ReactDom from 'react-dom';
import FCC from '../../FCC';
import Button from '../Button';

var BLUR_INTERVAL = 50;

var ButtonMenu = class ButtonMenu extends Button {
    constructor(props) {
        super(props);

        this.id = Math.random().toString();
    }

    getInitialState(props = this.props) {
        return {
            isMouseOver: false,
            isFocused: false,
            isSelected: props.isSelected || false
        }
    }

    componentDidMount(){
        // ReactDom.getElementByRef('button').addEventListener('click', this.onClick)
        // document.getElementsByClassName(this.id)[0].addEventListener('click', this.onClick)
        document.addEventListener('click', this.handleClickAway)
    }

    componentWillUnmount(){
        // ReactDom.getElementByRef('button').removeEventListener('click', this.onClick)
        // document.getElementsByClassName(this.id)[0].removeEventListener('click', this.onClick)
        document.removeEventListener('click', this.handleClickAway)
    }

    onClick(e){
        this.setState({isSelected: !this.state.isSelected});
        e.stopPropagation();
        e.preventDefault();
    }

    handleClickAway(e){
        this.setState({isSelected: false})
    }

    renderPopOver(menuElement, {isOpen}){
        if(!menuElement) return null;

        return (
            <FCC.Animators.PopOver isOpen={isOpen}>
                {menuElement}
            </FCC.Animators.PopOver>
        );
    }

    render() {
        var {
            value,
            isSelected = this.state.isSelected,
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
            "Label": labelTheme,
            "PopOver": popOverTheme
        } = theme;

        var childrenWithoutMenu = [].concat(children || []);
        let menuElement = null;
        let menuElementIndex = childrenWithoutMenu.findIndex(child => child.type === FCC.Menu);
        if(menuElementIndex > -1){
            menuElement = childrenWithoutMenu.splice(menuElementIndex, 1);
        }

        return (
            <div { ...props } ref="button" onClick={this.onClick} style={style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onFocus={this.onFocus} onBlur={this.onBlur}>
                {this.renderLabel({ theme: labelTheme, value: value, ...labelProps })}
                {this.renderPopOver(menuElement, {theme: popOverTheme, isOpen: isSelected})}
                {this.renderChildren(childrenWithoutMenu)}
            </div>
        )
    }
}

export default ButtonMenu;