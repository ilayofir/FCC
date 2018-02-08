
// TODO: implement icons
// TODO: implement legend

import React from 'react';
import { chain as _chain, get as _get } from 'lodash';

class FCC extends React.Component {
    static createClass(component) {
        wrapFunctions.bind(component)(component);
        return React.createClass(component)
    }

    // adds components (or properties) to the class
    static require(components) {
        for (var key in components) {
            if (components.hasOwnProperty(key)) {
                FCC[key] = components[key];
            }
        }
    }

    // allows configurations of the default theme
    static setTheme(defaultTheme) {
        FCC.theme = FCC.utils.merge({}, FCC.theme, defaultTheme);
    }

    // allows configurations of the default config
    static setConfig(defaultConfig) {
        FCC.config = FCC.utils.merge({}, FCC.config, defaultConfig);
    }

    //
    static getTheme(component) {
        let themes = [];

        // add all parent classes themes recursivly (in case the class extends other FCC class/es)
        var parentClassName = component.__proto__ && component.__proto__.constructor.name;
        if (parentClassName && (parentClassName !== 'FCC') && (parentClassName !== 'ReactComponent') && (parentClassName !== 'Object')) {
            themes.push(FCC.getTheme(component.__proto__));
        }

        // add the default component's class theme
        if (component.constructor.hasOwnProperty('theme')) {
            themes.push(component.constructor.theme)
        };

        // add the default component's theme
        if (component.hasOwnProperty('theme')) {
            themes.push(component.theme)
        };

        // add the component's theme as defined in FCC.theme
        var classPath = FCC.getPath(FCC, component.constructor);
        if (classPath) {
            themes.push(FCC.theme[classPath])
        };

        return FCC.utils.merge({}, ...themes);
    }

    // get value within an object
    static getClass(root, path) {
        _get(root, path, null);
    }

    // get the path of a value within an object, as string (with dot notation)
    static getPath(root, value, currentPath = '') {

        for (var key in root) {
            if (root[key] == value) {
                return currentPath && (currentPath + '.' + key) || key
            }
            else if (typeof root[key] == "object") {
                let possiblePath = FCC.getPath(root[key], value, currentPath && (currentPath + '.' + key) || key);
                if (possiblePath) return possiblePath;
            }
        }

        return '';
    };

    constructor(props) {
        super(props);

        Object.defineProperty(this, "isMounted", {
            value: false,
            enumerable: false,
            configurable: true,
            writable: true
        })

        this.theme = FCC.getTheme(this);

        // set the default theme of the component
        // var classPath = FCC.getPath(FCC, component.constructor)
        // this.theme = FCC.utils.merge({}, this.constructor.theme, FCC.theme[classPath]);

        // wraps each component's function in an internal function which will call this.props[function name], if provided. 
        // this will enable any parent component to get a callback when these functions are called, prior to their execution.
        wrapFunctions.bind(this)(this.__proto__);

        if (this.props.getInitialState) {
            this.state = this.props.getInitialState(this._getInitialState);
        }
        else if (this._getInitialState) this.state = this._getInitialState.bind(this)(...arguments)
    }

    // gets the style of the component
    getFCCStyle(props = this.props) {
        return FCC.utils.merge({}, this.theme, props.theme, { style: props.style })
    }

    // gets the props of the component
    getFCCProps(props = this.props) {

        // get all the props that are not callbacks for the component's methods
        var FCCProps = {};
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (!((typeof props[key] === 'function') && (typeof this[key] === 'function'))) {
                    FCCProps[key] = props[key];
                }
            }
        }

        FCCProps.theme = this.getFCCStyle(props)

        return FCCProps
    }
}

function wrapFunctions(component) {
    var _this = this;

    // initialize default properties (i.e. initialize all lifecycle methods so they will be available through props later on)
    for (var key in FCC.config.defaultProperties) {
        if (FCC.config.defaultProperties.hasOwnProperty(key)) {
            if (!_this[key]) {
                Object.defineProperty(_this, key, {
                    value: FCC.config.defaultProperties[key],
                    enumerable: false,
                    configurable: true,
                    writable: true
                })
            }
        }
    }

    // get all component functions (without the constructor) and wrap them
    _chain(Object.getOwnPropertyNames(component)).without('constructor').value().forEach(key => {

        // ignore non function properties
        if (typeof component[key] !== 'function') return;

        // get a new function name
        let FCCKey = `_${key}`;

        // avoid writing on existing keys
        if (_this[FCCKey]) return;

        // switch the function to the new name
        Object.defineProperty(_this, FCCKey, {
            value: _this[key],
            enumerable: false,
            configurable: true,
            writable: true
        })

        // add a "wrapper" function instead which calls either the function supplied in the props, or the original function
        Object.defineProperty(_this, key, {
            value: function () {
                if (key === 'componentDidMount') _this.isMounted = true;
                if (key === 'componentWillUnmount') _this.isMounted = false;
                if (_this.props[key]) return _this.props[key](_this[FCCKey].bind(_this), ...arguments);
                if (_this[FCCKey]) return _this[FCCKey].bind(_this)(...arguments)
            },
            enumerable: Object.getOwnPropertyDescriptor(component, key).enumerable,
            configurable: true,
            writable: true
        })
    })

    // wrap parent class functions (ensures function wrapping when inheriting from a different component)
    var className = component.__proto__ && component.__proto__.constructor.name;
    if (className && (className !== 'FCC') && (className !== 'ReactComponent') && (className !== 'Object')) wrapFunctions.bind(_this)(component.__proto__)

}

export default FCC;