const theme = {
    "style": {
        position: 'absolute',
        transition: 'transform 0.5s',
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
            transformOrigin: 'top right 0px',
        }
    },
    "closed": {
        "style": {
            background: 'blue',
            transform: 'scale(0)',
            transformOrigin: 'top right 0px',
        }
    },
    "fixed": {
        "style": {
            position: 'fixed',
        }
    }
}

export default theme;