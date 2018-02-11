import React from 'react';
import FCC from '../../FCC';
import Button from '../Button';

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
        document.addEventListener('click', this.handleClickAway)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClickAway)
    }

    handleClickAway(e){

        // TODO: use the react internal instance props insteas of class
        if(!FCC.isEventOnChildOfClass(e, this.id)) this.setState({isSelected: false})
    }

    onPopOverClick(e){
        e.stopPropagation();
        e.preventDefault();
    }

    onClick(e){
        this.setState({isSelected: !this.state.isSelected});
        e.stopPropagation();
        e.preventDefault();
    }

    renderPopOver(children, props){
        if(!children) return null;

        return (
            <FCC.Animators.PopOver onClick={this.onPopOverClick} {...props}>
                {children}
            </FCC.Animators.PopOver>
        );
    }

    render() {
        var {
            value,
            isSelected = this.state.isSelected,
            className,
            children,
            labelProps,
            popOverProps,
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

        // var childrenWithoutMenu = [].concat(children || []);
        // let menuElement = null;
        // let menuElementIndex = childrenWithoutMenu.findIndex(child => child.type === FCC.Menu);
        // if(menuElementIndex > -1){
        //     menuElement = childrenWithoutMenu.splice(menuElementIndex, 1);
        // }

        className = this.id + ' ' + className;

        return (
            <div { ...props } className={className} onClick={this.onClick} style={style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onFocus={this.onFocus} onBlur={this.onBlur}>
                {this.renderLabel({ theme: labelTheme, value: value, ...labelProps })}
                {this.renderPopOver(children, {theme: popOverTheme, isOpen: isSelected, ...popOverProps})}
            </div>
        )
    }
}

export default ButtonMenu;