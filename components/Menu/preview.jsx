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
                <FCC.ButtonMenu value={"Item 0"} popOverProps={{isFixed: true, anchor: 'bottom right'}}>
                    <FCC.ButtonMenu value={"Item 1"}  popOverProps={{isFixed: true, anchor: 'top left'}}>
                        <FCC.Button>
                            Item 4
                        </FCC.Button>
                        <FCC.Button>
                            Item 5
                        </FCC.Button>
                        <FCC.Button>
                            Item 6
                        </FCC.Button>
                    </FCC.ButtonMenu>
                    <FCC.Button>
                        Item 2
                    </FCC.Button>
                    <FCC.Button>
                        Item 3
                    </FCC.Button>
                </FCC.ButtonMenu>
            </div>
        )
    }
}

export default preview;