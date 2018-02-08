import React from 'react';
import FCC from '../../FCC';

var preview = class preview extends FCC {
    constructor(props) {
        super(props);
    }

    getInitialState(props = this.props) {
        return {
            value: "",
            isFocused: false
        }
    }

    render() {
        var {
            theme: {
                "style": style
            },
            ...props
        } = this.getFCCProps();

        var {
            isFocused
        } = this.state;

        return (
            <div { ...props } style={style}>
                <span>1 example</span>
                <FCC.Menu>
                    <FCC.ButtonMenu>
                        Item 1
                        <FCC.Menu>
                            <FCC.Button>
                                Item 4
                            </FCC.Button>
                            <FCC.Button>
                                Item 5
                            </FCC.Button>
                            <FCC.Button>
                                Item 6
                            </FCC.Button>
                        </FCC.Menu>
                    </FCC.ButtonMenu>
                    <FCC.Button>
                        Item 2
                    </FCC.Button>
                    <FCC.Button>
                        Item 3
                    </FCC.Button>
                </FCC.Menu>
            </div>
        )
    }
}

export default preview;