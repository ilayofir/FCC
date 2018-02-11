import React from 'react';
import FCC from '../../../FCC';
import Openable from '../Openable';

var PopOver = class PopOver extends Openable {
    constructor(props) {
        super(props);

        this.id = Math.random().toString();
    }

    componentDidMount(){
        this.positionPopover()
        // document.addEventListener('scroll', this.handleParentScroll)
    }

    positionPopover(){
        if(this.isMounted) requestAnimationFrame(data => {
            if(!this.props.isFixed) return;

            this.positionPopover();

            let elements = document.getElementsByClassName(this.id);
            if(!elements.length) return;

            let popOver = elements[0];
            let popOverParent = popOver.parentElement;

            // initialize anchorOrigin
            let anchorOrigin = this.props.anchorOrigin || popOver.style.transformOrigin;
            if( typeof anchorOrigin !== 'string') anchorOrigin = 'right bottom';
            if(anchorOrigin.indexOf('0px') === -1) anchorOrigin + ' 0px';

            // initialize anchor
            let anchor = this.props.anchor;
            if( typeof anchor !== 'string') anchor = '';
            if((anchor.indexOf('top') === -1) && anchor.indexOf('bottom') === -1) anchor += ' bottom';
            if((anchor.indexOf('left') === -1) && anchor.indexOf('right') === -1) anchor += ' left';

            // initialize positions
            let top = popOverParent.offsetTop;
            let left = popOverParent.offsetLeft;
            let right = 0;
            let bottom = 0;
            
            let popOverRoot = popOverParent;
            while (popOverRoot.parentElement && (popOverRoot.style.position !== "fixed")) {
                popOverRoot = popOverRoot.parentElement;
                top -= popOverParent.scrollTop;
                left -= popOverParent.scrollLeft;
            }
            
            // body is the root. use the bounding box to position the element.
            if(!popOverRoot.parentElement){
                let parentBox = popOverParent.getBoundingClientRect();

                top = parentBox.top;
                left = parentBox.left;
                right = popOverRoot.clientWidth - parentBox.right;
                bottom = popOverRoot.clientHeight - parentBox.bottom;
            }

            // the root is a fixed element. use the element's positions
            else{
                // let top = popOverParent.offsetTop;
                // let left = popOverParent.offsetLeft;
                
                // top += popOverParent.scrollHeight;
                // left += popOverParent.scrollWidth;
                
                // while (popOverParent.parentElement) {
                //     popOverParent = popOverParent.parentElement;
                //     top -= popOverParent.scrollTop;
                //     left -= popOverParent.scrollLeft;
                // }
    
                // let right = document.body.clientWidth - left;
                // let bottom = document.body.clientHeight - top;
                right = popOverRoot.clientWidth;
                bottom = popOverRoot.clientHeight;
            }

            // set the popover position, and match the anchor origin position to the anchor position
            if(anchor.indexOf('top') > -1){
                if(anchorOrigin.indexOf('bottom') > -1) top -= popOver.clientHeight;
                popOver.style.top = top + "px";
            }
            else popOver.style.top = 'auto';
            if(anchor.indexOf('left') > -1){
                if(anchorOrigin.indexOf('right') > -1) left -= popOver.clientWidth;
                popOver.style.left = left + "px";
            }
            else popOver.style.left = 'auto';
            if(anchor.indexOf('right') > -1){
                if(anchorOrigin.indexOf('left') > -1) right -= popOver.clientWidth;
                popOver.style.right = right + "px";
            }
            else popOver.style.right = 'auto';
            if(anchor.indexOf('bottom') > -1){
                if(anchorOrigin.indexOf('top') > -1) bottom -= popOver.clientHeight;
                popOver.style.bottom = bottom + "px";
            }
            else popOver.style.bottom = 'auto';

            popOver.style.transformOrigin = anchorOrigin;
        })
    }

    componentWillUnmount(){
        // document.removeEventListener('scroll', this.handleParentScroll)
    }

    handleParentScroll(e){
        
        // var hostNode = this._reactInternalInstance._hostParent && this._reactInternalInstance._hostParent._hostNode;
        // if(!hostNode) return console.warn("not a react node");

        // this._reactInternalInstance._renderedComponent._hostNode.offsetLeft = hostNode .offsetLeft;
        // this._reactInternalInstance._renderedComponent._hostNode.offsetTop = hostNode .offsetTop + this._reactInternalInstance._renderedComponent._hostNode.offsetHeight;
    }

    render() {
        var {
            isOpen,
            isFixed,
            className,
            anchor,
            children,
            theme,
            ...props
        } = this.getFCCProps();

        if (this.props.isOpen) FCC.utils.merge(theme, theme.opened);
        else FCC.utils.merge(theme, theme.closed);

        if (this.props.isFixed) FCC.utils.merge(theme, theme.fixed);

        var {
            "style": style
        } = theme;

        className = this.id + ' ' + className;

        return (
            <div { ...props } className={className} style={ style }>
                {this.renderChildren(children)}
            </div>
        )
    }
}

export default PopOver;