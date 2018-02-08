const theme = {
    "style": {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    "TopBar": {
        "style": {
            width: 'auto',
            boxShadow: "0px 9px 33px -2px",
            zIndex: 1,
        }
    },
    "TopBarLabel": {
        "style": {
            fontSize: 30, 
            color: '#fff'
        }
    },
    "MenuAndContent": {
        "style": {
            flex: 1,
            display: 'flex'
        },
        "MenuWrapper": {
            "style": {
                boxShadow: '10px 0px 15px -10px',
                zIndex: 1
            },
            "Menu": {
                "style": {
                    minWidth: '200px', 
                    justifyContent: 'flex-start', 
                    alignItems: 'stretch',
                }
            }
        },
        "ComponentDisplay": {
            "style": {
                flex: 1
            }
        }
    },
}

export default theme;