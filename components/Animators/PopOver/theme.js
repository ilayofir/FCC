const theme = {
    "style": {
        position: 'absolute',
        transition: 'all 0.5s',
        top: '100%',
        left: 0,
        right: 'auto',
        bottom: 'auto',
        zIndex: 1
    },
    "opened": {
        "style": {
            background: 'red',
            transform: 'scale(1)',
            transformOrigin: 'left top 0px',
        }
    },
    "closed": {
        "style": {
            background: 'blue',
            transform: 'scale(0)',
            transformOrigin: 'left top 0px',
        }
    }
}

export default theme;