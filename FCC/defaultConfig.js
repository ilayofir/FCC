var defaultConfig = {
    addToWindow: true,
    defaultProperties: {
        // getInitialState: () => {}, 
        componentWillMount: () => undefined,
        render: () => undefined,
        componentDidMount: () => undefined,
        componentWillReceiveProps: () => undefined,
        shouldComponentUpdate: () => true,
        componentWillUpdate: () => undefined,
        componentDidUpdate: () => undefined,
        componentWillUnmount: () => undefined,
        componentDidCatch: () => undefined
    }
}

module.exports = defaultConfig