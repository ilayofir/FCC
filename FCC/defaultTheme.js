var colorSchema = {
    backgroundColor1: '#d6f7fe',
    backgroundColor2: '#2f41a2',
    backgroundColor3: '#5c6afa',
    backgroundColor4: '#ffffff',
    backgroundColor5: '#e8e8e8',
    color1: '#494949',
    color2: '#adadad',
}

var defaultTheme = {
    "ComponentDisplay": {
        "style": {
            background: colorSchema.backgroundColor5
        }
    },
    "Input": {
        "style": {
            padding: 3,
            fontSize: 14,
            color: colorSchema.color1
        }
    },
    "TextInput": {
        "style": {
            paddingTop: '15px'
        }
    },
    "HintText": {
        "style": {
            padding: 3,
            fontSize: 14,
            color: colorSchema.color2
        },
        "inputHasFocusOrValue": {
            "style": {
                // bottom: '15px',
                // transform: 'scale(0.75)',
                // transformOrigin: 'left top 0px',
                color: colorSchema.backgroundColor3
            },
        },
        // "deAnimated": {
        //   bottom: 0,
        //   transform: 'scale(1)',
        //   transformOrigin: 'left top 0px',
        // }
    },
    "Label": {
        "style": {
            padding: '5px 5px 5px 5px',
            color: colorSchema.color1
        }
    },
    "ErrorText": {
        "style": {
            padding: 3,
            fontSize: 12,
            color: colorSchema.color1,
        }
    },
    "TextField": {
        "style": {
            width: 200,
            background: colorSchema.backgroundColor4,
        }
    },
    "Divider": {
        "style": {
            background: colorSchema.color2
        },
        "Animators.Curtains": {
            "style": {
                position: 'absolute',
                width: "100%",
                height: "100%",
            },
            "LeftCurtain": {
                "style": {
                    height: 1,
                    maxHeight: 1,
                    minHeight: 1,
                    background: colorSchema.backgroundColor3
                },
            },
            "RightCurtain": {
                "style": {
                    height: 1,
                    maxHeight: 1,
                    minHeight: 1,
                    background: colorSchema.backgroundColor3
                }
            }
        }
    },
    "Animators.Curtains": {
        "LeftCurtain": {
            "closed": {
                "style": {
                    left: 0,
                    right: '100%'
                }
            },
            "open": {
                "style": {
                    left: 0,
                    right: '50%'
                }
            }
        },
        "RightCurtain": {
            "closed": {
                "style": {
                    left: '100%',
                    right: 0
                }
            },
            "open": {
                "style": {
                    left: '50%',
                    right: 0
                }
            }
        },
        "reversed": {
            "LeftCurtain": {
                "closed": {
                    "style": {
                        left: '50%',
                        right: '50%'
                    }
                },
                "open": {
                    "style": {
                        left: 0,
                        right: '50%'
                    }
                }
            },
            "RightCurtain": {
                "closed": {
                    "style": {
                        left: '50%',
                        right: '50%'
                    }
                },
                "open": {
                    "style": {
                        left: '50%',
                        right: 0
                    }
                }
            }
        }
    },
    "TopBar": {
        "style": {
            padding: 5,
            background: colorSchema.backgroundColor2
        },
    },
    "Menu": {
        "style": {
            background: colorSchema.backgroundColor4
        },
    },
    "Button": {
        "style": {
            padding: 5,
            background: colorSchema.backgroundColor4
        },
        "mouseOver": {
            "style": {
                background: colorSchema.backgroundColor1
            },
        },
        "selected": {
            "style": {
                background: colorSchema.backgroundColor3
            },
        }
    },
}

module.exports = defaultTheme