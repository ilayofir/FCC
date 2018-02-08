import React from 'react';
import FCC from '../../FCC';

var legend = class legend extends FCC {
    constructor(props) {
        super(props);
    }

    getInitialState() {
        return {
            componentToDisplay: null
        }
    }

    onComponentToDisplayClick(component, e) {
        this.setState({ componentToDisplay: component })
    }

    addItem(items, item, options) {
        if (!options.isFirstItem) items.push(<FCC.Divider key={items.length} />);
        items.push(item);
        options.isFirstItem = false;
    }

    renderItem(component, componentPath) {
        var isSelected = component === this.state.componentToDisplay;
        return <FCC.Button key={componentPath} value={componentPath} isSelected={isSelected} style={{ width: 'auto' }} onClick={this.onComponentToDisplayClick.bind(this, component)} />
    }

    renderItems(root, rootKey, theme) {
        let items = [];

        var options = {
            isFirstItem: true
        };
        for (let key in root) {
            if (root.hasOwnProperty(key)) {
                if (root[key] === FCC.Legend || root[key] === FCC.ComponentDisplay) continue;
                if (typeof root[key] !== 'function' && typeof root[key] !== 'object') continue;

                var path = `${rootKey ? `${rootKey}.` : ''}${key}`;

                if (FCC.isPrototypeOf(root[key])) {
                    this.addItem(items, this.renderItem(root[key], path), options);
                }
                else {
                    let innerItems = this.renderItems(root[key], path, theme);
                    if (innerItems.length) {
                        this.addItem(items, (
                            <FCC.Menu key={path} theme={theme}>
                                {innerItems}
                            </FCC.Menu>
                        ), options);
                    }
                }
            }
        }

        return items;
    }

    render() {
        var {
            children,
            theme: {
                "style": style,
                "TopBar": topBarTheme,
                "TopBarLabel": topBarLabelTheme,
                "MenuAndContent": menuAndContentTheme
            },
            ...props
        } = this.getFCCProps();

        var {
            componentToDisplay
        } = this.state;

        var menuItems = this.renderItems(FCC, 'FCC', menuAndContentTheme.MenuWrapper.Menu);

        return (
            <div { ...props } style={style}>
                <FCC.TopBar theme={topBarTheme}>
                    <FCC.Label value='Components' theme={topBarLabelTheme} />
                </FCC.TopBar>
                <div style={menuAndContentTheme.style}>
                    <div style={menuAndContentTheme.MenuWrapper.style}>
                        <FCC.Divider />
                        <FCC.Menu theme={menuAndContentTheme.MenuWrapper.Menu}>
                            {menuItems}
                        </FCC.Menu>
                        <FCC.Divider />
                    </div>
                    <FCC.ComponentDisplay theme={menuAndContentTheme.ComponentDisplay} component={componentToDisplay} />
                </div>
            </div>
        )
    }
}

export default legend;