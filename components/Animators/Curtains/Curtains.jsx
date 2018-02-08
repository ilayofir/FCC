import React from 'react';
import FCC from '../../../FCC';

var Curtains = class Curtains extends FCC {
  constructor(props) {
    super(props);
  }

  getInitialState(){
    return {}
  }

  renderRightCurtain(props){
    return (
      <FCC.Animators.Curtain { ...props }/>
    )
  }

  renderLeftCurtain(props){
    return (
      <FCC.Animators.Curtain { ...props }/>
    )
  }

  renderChildren(children){
    return children || null;
  }

  render () {
    var { 
      isOpen,
      isReversed,
      rightCurtainProps = {}, 
      leftCurtainProps = {}, 
      children, 
      theme,
      ...props 
    } = this.getFCCProps();

    if(isReversed) FCC.utils.merge(theme, theme.reversed);

    var { 
      "style": style,
      "LeftCurtain": leftCurtainTheme,
      "RightCurtain": rightCurtainTheme
    } = theme;

    return (
      <div { ...props } style={ style }>
        { this.renderLeftCurtain({ theme: leftCurtainTheme, isOpen: isOpen, ...leftCurtainProps }) }
        { this.renderRightCurtain({ theme: rightCurtainTheme, isOpen: isOpen, ...rightCurtainProps }) }
        { this.renderChildren(children) }
      </div>  
    )
  }
}

export default Curtains;