import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "TextBox5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "21%",
        "height": "50px",
        "fontSize": "35px",
        "position": "relative",
        "top": null,
        "left": null,
        "marginTop": "40px",
        "marginLeft": "150px",
        "fontFamily": "Roboto"
      },
      "custom": {
        "text": "Webfolio  X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50vw",
        "alignItems": "center",
        "flexDirection": "row-reverse",
        "justifyContent": "flex-start",
        "height": "50px",
        "borderStyle": "none",
        "marginLeft": "100px",
        "alignSelf": "auto",
        "position": "absolute",
        "left": 400,
        "top": 35,
        "fontFamily": "Poppins",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "callbacks": {}
    },
    "TextBox7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70px",
        "order": 2
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "order": 3,
        "width": "60px"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/shopping%20cart.webp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "order": 1,
        "width": "65px",
        "marginRight": "5px"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80px",
        "borderStyle": "none",
        "fontFamily": "Poppins",
        "fontSize": "15px"
      },
      "custom": {
        "values": [
          "Pages"
        ]
      },
      "callbacks": {}
    },
    "Div1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": null,
        "backgroundColor": "#fff9f9",
        "overflow": "hidden",
        "marginTop": "30px",
        "height": "10px",
        "borderBottomWidth": "2px",
        "borderBottomColor": "#bfbaba",
        "borderBottomStyle": "solid",
        "width": "78%",
        "borderTopStyle": "none",
        "textAlign": "left",
        "float": "left",
        "clear": "none",
        "marginLeft": "100px",
        "borderRightStyle": "none",
        "borderLeftStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": null,
        "width": "60%",
        "height": "10%",
        "alignSelf": "auto",
        "textAlign": "center",
        "marginLeft": "300px",
        "fontSize": "3em",
        "marginTop": "500px",
        "fontFamily": "Poppins"
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "65%",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "flexDirection": "column",
        "alignItems": "stretch",
        "width": "80vw",
        "marginLeft": "150px",
        "borderColor": "#e0dbdb"
      },
      "callbacks": {}
    },
    "TextBox17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "alignSelf": "flex-start",
        "height": "30px",
        "order": 1,
        "width": "200px",
        "position": "relative",
        "marginTop": "150px",
        "marginLeft": "70px",
        "fontFamily": "Poppins"
      },
      "custom": {
        "text": "App  X  ----  Web Desgin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "550px",
        "height": "50px",
        "order": 2,
        "borderStyle": "none",
        "fontSize": "1.7em",
        "marginLeft": "70px",
        "fontFamily": "Poppins",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Website desgin for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "420px",
        "height": "100px",
        "order": 3,
        "borderStyle": "none",
        "marginLeft": "70px",
        "color": "#676767",
        "fontFamily": "Poppins",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "140px",
        "height": "40px",
        "order": 5,
        "borderStyle": "none",
        "fontSize": "1.4em",
        "marginLeft": "70px",
        "borderBottomStyle": "none",
        "fontFamily": "Poppins",
        "marginTop": "40px"
      },
      "custom": {
        "text": "View project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "525px",
        "width": "580px",
        "order": 5,
        "alignSelf": "flex-end",
        "marginBottom": "",
        "position": "absolute",
        "marginTop": "2px",
        "marginRight": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-07%20at%2010.00.32%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex4": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "marginTop": "100px",
        "width": "80vw",
        "height": "65%",
        "borderStyle": "solid",
        "flexDirection": "column",
        "alignItems": "stretch",
        "justifyContent": "flex-start",
        "marginLeft": "150px",
        "borderWidth": "2px",
        "borderColor": "#e9e8e8",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "TextBox20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "alignSelf": "flex-start",
        "height": "30px",
        "order": 1,
        "width": "210px",
        "position": "relative",
        "marginTop": "150px",
        "marginLeft": "70px",
        "fontSize": ""
      },
      "custom": {
        "text": "Technology --- Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "450px",
        "height": "50px",
        "order": 2,
        "borderStyle": "none",
        "fontSize": "1.6em",
        "marginLeft": "70px",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Brand refresh for Technology App"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "420px",
        "height": "100px",
        "order": 3,
        "borderStyle": "none",
        "marginLeft": "70px",
        "color": "#676767",
        "textAlign": "justify",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "160px",
        "height": "40px",
        "order": 5,
        "borderStyle": "none",
        "fontSize": "1.6em",
        "marginLeft": "70px",
        "borderBottomStyle": "none",
        "borderBottomWidth": "3px",
        "marginBottom": "",
        "paddingBottom": "",
        "paddingTop": "",
        "marginTop": "40px"
      },
      "custom": {
        "text": "View project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "525px",
        "width": "580px",
        "order": 5,
        "alignSelf": "flex-end",
        "marginBottom": "",
        "position": "absolute",
        "marginTop": "2px",
        "marginRight": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-07%20at%2010.54.40%20PM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "marginTop": "100px",
        "width": "80vw",
        "height": "60%",
        "borderStyle": "solid",
        "flexDirection": "column",
        "marginLeft": "150px",
        "borderColor": "#e9e9e9",
        "borderWidth": "2px",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "TextBox23": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "alignSelf": "flex-start",
        "height": "30px",
        "order": 1,
        "width": "240px",
        "position": "relative",
        "marginTop": "150px",
        "marginLeft": "70px"
      },
      "custom": {
        "text": "Consulting X ---- Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "450px",
        "height": "50px",
        "order": 2,
        "borderStyle": "none",
        "fontSize": "1.6em",
        "marginLeft": "70px",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Website redesign for Consulting X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "420px",
        "height": "100px",
        "order": 3,
        "borderStyle": "none",
        "marginLeft": "70px",
        "color": "#676767",
        "textAlign": "justify",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "160px",
        "height": "40px",
        "order": 5,
        "borderStyle": "none",
        "fontSize": "1.6em",
        "marginLeft": "70px",
        "borderBottomStyle": "none",
        "borderBottomWidth": "3px",
        "marginBottom": "",
        "paddingBottom": "",
        "paddingTop": "",
        "alignSelf": "auto",
        "marginTop": "25px"
      },
      "custom": {
        "text": "View project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "485px",
        "width": "580px",
        "order": 5,
        "alignSelf": "flex-end",
        "marginBottom": "",
        "position": "absolute",
        "marginTop": "2px",
        "marginRight": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-07%20at%2011.06.17%20PM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "485px",
        "width": "580px",
        "order": 5,
        "alignSelf": "flex-end",
        "marginBottom": "",
        "position": "absolute",
        "marginTop": "2px",
        "marginRight": ""
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-07%20at%2011.32.38%20PM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "160px",
        "height": "40px",
        "order": 5,
        "borderStyle": "none",
        "fontSize": "1.6em",
        "marginLeft": "70px",
        "borderBottomStyle": "none",
        "borderBottomWidth": "3px",
        "marginBottom": "",
        "paddingBottom": "",
        "paddingTop": "",
        "alignSelf": "auto",
        "marginTop": "40px"
      },
      "custom": {
        "text": "View project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "400px",
        "height": "100px",
        "order": 3,
        "borderStyle": "none",
        "marginLeft": "70px",
        "color": "#676767",
        "textAlign": "justify",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "450px",
        "height": "50px",
        "order": 2,
        "borderStyle": "none",
        "fontSize": "1.6em",
        "marginLeft": "70px",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Illustration design for  Education X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "alignSelf": "flex-start",
        "height": "30px",
        "order": 1,
        "width": "230px",
        "position": "relative",
        "marginTop": "150px",
        "marginLeft": "70px"
      },
      "custom": {
        "text": "Education X ---- Illustration"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex8": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "marginTop": "100px",
        "width": "80vw",
        "height": "60%",
        "borderStyle": "solid",
        "flexDirection": "column",
        "marginLeft": "150px",
        "borderColor": "#e9e9e9",
        "borderWidth": "2px",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "Link5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "280px",
        "height": "70px",
        "position": "relative",
        "marginTop": "80px",
        "marginLeft": "600px",
        "fontSize": "2em",
        "color": "#000000",
        "fontFamily": "Poppins"
      },
      "custom": {
        "text": "Browse Portfolio",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "150px",
        "width": "85vw",
        "height": "90vh",
        "borderStyle": "none",
        "flexDirection": "column",
        "borderTopWidth": "1px",
        "borderTopStyle": "solid",
        "borderTopColor": "#96949480",
        "paddingTop": "50px",
        "marginTop": "100px",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "TextBox34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "40%",
        "height": "110px",
        "fontSize": "3em",
        "marginTop": "300px",
        "marginLeft": "20px",
        "alignSelf": "flex-start",
        "position": "absolute"
      },
      "custom": {
        "text": "Who’s behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "40%",
        "height": "70px",
        "fontSize": "1.3em",
        "marginTop": "450px",
        "marginLeft": "20px",
        "position": "absolute",
        "color": "#999999",
        "textAlign": "left"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "30px",
        "marginLeft": "20px",
        "marginTop": "550px",
        "fontSize": "1.5em",
        "position": "absolute"
      },
      "custom": {
        "text": "About me",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-end",
        "width": "50vw",
        "height": "px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-07%20at%2011.50.59%20PM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "220px",
        "width": "80vw",
        "borderStyle": "none",
        "height": "70px",
        "marginLeft": "150px",
        "justifyContent": "space-between",
        "alignItems": "flex-start",
        "alignContent": "flex-start",
        "alignSelf": "auto",
        "borderTopWidth": "1px",
        "borderTopStyle": "solid",
        "borderTopColor": "#9e9e9e",
        "paddingTop": "50px",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "TextBox36": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "100px",
        "width": "320px",
        "fontSize": "3em",
        "marginLeft": "100px"
      },
      "custom": {
        "text": "My work skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "300px",
        "height": "50px",
        "fontSize": "1.9em",
        "alignSelf": "auto",
        "marginTop": "10px"
      },
      "custom": {
        "text": "Browse Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "150px",
        "borderStyle": "none",
        "width": "80vw",
        "marginLeft": "150px",
        "height": "80vh",
        "alignItems": "flex-start",
        "flexDirection": "row",
        "alignContent": "stretch",
        "justifyContent": "space-between",
        "flexWrap": "wrap",
        "overflow": "hidden",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "Div2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "370px",
        "height": "300px",
        "borderStyle": "none",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "2px",
        "float": "none"
      },
      "callbacks": {}
    },
    "Div3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "370px",
        "height": "300px",
        "borderStyle": "none",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "2px"
      },
      "callbacks": {}
    },
    "Div4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "370px",
        "height": "300px",
        "borderStyle": "none",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "2px"
      },
      "callbacks": {}
    },
    "Div5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "370px",
        "height": "300px",
        "borderStyle": "none",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "2px"
      },
      "callbacks": {}
    },
    "Div6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "370px",
        "height": "300px",
        "borderStyle": "none",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "2px"
      },
      "callbacks": {}
    },
    "Div7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "370px",
        "height": "300px",
        "borderStyle": "none",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "2px"
      },
      "callbacks": {}
    },
    "Flex14": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70%",
        "marginTop": "15px",
        "height": "90%",
        "marginLeft": "5px",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Image9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100px",
        "height": "100px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%2012.29.51%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "2em",
        "alignSelf": "flex-start",
        "marginTop": "15px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "borderBottomStyle": "none",
        "borderBottomColor": "#a09e9e",
        "color": "#909090",
        "width": "20em"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "color": "#909090",
        "width": "20em"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "2em",
        "alignSelf": "flex-start",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100px",
        "height": "100px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%2012.32.55%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70%",
        "marginTop": "15px",
        "height": "90%",
        "marginLeft": "5px",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Image11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "100px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%2012.35.16%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "2em",
        "alignSelf": "flex-start",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "color": "#909090",
        "width": "20em"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70%",
        "marginTop": "15px",
        "height": "90%",
        "marginLeft": "5px",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "borderBottomStyle": "none",
        "borderBottomColor": "#a09e9e",
        "color": "#909090",
        "width": "20em"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "2em",
        "alignSelf": "flex-start",
        "marginTop": "15px"
      },
      "custom": {
        "text": "User Research"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "100px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%2012.37.39%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70%",
        "marginTop": "15px",
        "height": "90%",
        "marginLeft": "5px",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "borderBottomStyle": "none",
        "borderBottomColor": "#a09e9e",
        "color": "#909090",
        "width": "20em"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "2em",
        "alignSelf": "flex-start",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Brand Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100px",
        "height": "100px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%2012.38.37%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex23": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70%",
        "marginTop": "15px",
        "height": "90%",
        "marginLeft": "5px",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Image14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "150px",
        "height": "100px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%2012.39.34%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "2em",
        "alignSelf": "flex-start",
        "marginTop": "15px",
        "width": "8.5em"
      },
      "custom": {
        "text": "Motion Graphics"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "borderBottomStyle": "none",
        "borderBottomColor": "#a09e9e",
        "color": "#909090",
        "width": "20em"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex24": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "70%",
        "marginTop": "15px",
        "height": "90%",
        "marginLeft": "5px",
        "flexDirection": "column",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "60px",
        "width": "350px",
        "fontSize": "3em",
        "marginLeft": "100px"
      },
      "custom": {
        "text": "Article & News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "50px",
        "width": "80vw",
        "borderStyle": "none",
        "height": "50px",
        "marginLeft": "150px",
        "justifyContent": "space-between",
        "alignItems": "flex-start",
        "alignContent": "flex-start",
        "alignSelf": "auto",
        "borderTopWidth": "1px",
        "borderTopStyle": "solid",
        "borderTopColor": "#e1e1e1",
        "paddingTop": "50px",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "Link7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.7em"
      },
      "custom": {
        "text": "Browse more article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex27": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "100px",
        "marginTop": "100px",
        "width": "90vw",
        "borderStyle": "none",
        "height": "50%",
        "overflow": "hidden",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "1px",
        "borderBottomColor": "#b7b7b7",
        "paddingBottom": "20px",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "borderStyle": "none",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "alignSelf": "center"
      },
      "callbacks": {}
    },
    "Image16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "60%",
        "borderStyle": "none",
        "marginLeft": "80px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%208.58.29%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "1.2em",
        "color": "#595959"
      },
      "custom": {
        "text": "Design  ----  September  1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "2em",
        "marginTop": "20px",
        "width": "16em"
      },
      "custom": {
        "text": "What did I learn from doing  50+ design sprints"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "2em",
        "marginTop": "20px"
      },
      "custom": {
        "text": "5 free hot typographies to download in 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "1.2em",
        "color": "#595959"
      },
      "custom": {
        "text": "Typography ---- September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "60%",
        "borderStyle": "none",
        "marginLeft": "80px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%209.03.39%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "35%",
        "borderStyle": "none",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "alignSelf": "center"
      },
      "callbacks": {}
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "100px",
        "marginTop": "100px",
        "width": "90vw",
        "borderStyle": "none",
        "height": "50%",
        "overflow": "hidden",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "",
        "borderBottomColor": "#d1d1d1",
        "paddingBottom": "100px",
        "fontFamily": "Poppins",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    },
    "Flex31": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "150px",
        "marginTop": "150px",
        "borderStyle": "none",
        "width": "85vw",
        "height": "60vh",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "1px",
        "borderBottomColor": "#c0bcbc"
      },
      "callbacks": {}
    },
    "Flex32": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "borderStyle": "none",
        "borderColor": "#ea2323",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignContent": "flex-start",
        "fontFamily": "Poppins"
      },
      "callbacks": {}
    },
    "Image18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "20%",
        "alignSelf": "center",
        "marginTop": "40px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-08%20at%209.08.58%20AM.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "3.5em",
        "alignSelf": "flex-start",
        "marginTop": "",
        "width": "85vw"
      },
      "custom": {
        "text": "Interested in working together?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "3.5em",
        "borderBottomStyle": "solid",
        "marginBottom": "100px",
        "borderBottomWidth": "4px"
      },
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "3.5em",
        "position": "absolute",
        "marginLeft": "350px",
        "marginBottom": "13px",
        "marginTop": "",
        "bottom": null
      },
      "custom": {
        "text": "today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "alignSelf": "flex-start",
        "marginTop": "300px",
        "fontSize": "1.5em",
        "color": "#686565",
        "width": "70%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla arcu porttitor molestie sed mauris sollicitudin id ornare egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex33": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "150px",
        "marginTop": "100px",
        "borderStyle": "none",
        "borderColor": "#d50ff6",
        "width": "85vw",
        "height": "85vh",
        "justifyContent": "space-between",
        "borderWidth": "",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "callbacks": {}
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "borderColor": "#f80909",
        "width": "33%",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "fontFamily": "Poppins",
        "fontSize": "0.7em"
      },
      "callbacks": {}
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "borderColor": "#f1ff02",
        "borderStyle": "none",
        "alignItems": "flex-start",
        "width": "33%",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "fontFamily": "Poppins",
        "fontSize": "0.7em"
      },
      "callbacks": {}
    },
    "TextBox63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "200px",
        "fontSize": "3em"
      },
      "custom": {
        "text": "Webfolio  X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "90%",
        "textAlign": "justify",
        "fontSize": "1.1em",
        "marginTop": "30px",
        "color": "#878787"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet tragon consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "30px",
        "fontSize": "2em"
      },
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "1.8em",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#d9d9d9",
        "borderRadius": "2px",
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "20px",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "1px"
      },
      "custom": {
        "value": "",
        "placeholder": "Enter your email"
      },
      "callbacks": {}
    },
    "Flex38": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "borderWidth": "4px",
        "borderColor": "#066eea",
        "width": "32%"
      },
      "callbacks": {}
    },
    "Flex39": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "33%",
        "justifyContent": "flex-start",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "fontFamily": "Poppins",
        "fontSize": "0.7em"
      },
      "callbacks": {}
    },
    "Flex40": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "33%",
        "flexDirection": "column",
        "fontFamily": "Poppins",
        "fontSize": "0.7em"
      },
      "callbacks": {}
    },
    "Flex41": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "33%",
        "flexDirection": "column",
        "fontFamily": "Poppins",
        "marginTop": "10px",
        "fontSize": "0.7em"
      },
      "callbacks": {}
    },
    "TextBox68": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "2em",
        "marginTop": "200px"
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginTop": "15px",
        "marginBottom": "15px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginBottom": "15px"
      },
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginBottom": "15px"
      },
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginBottom": "15px"
      },
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginBottom": "15px"
      },
      "custom": {
        "text": "About V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em"
      },
      "custom": {
        "text": "About V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginTop": "205px",
        "marginBottom": "15px",
        "alignSelf": "flex-start"
      },
      "custom": {
        "text": "Blog V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginBottom": "15px"
      },
      "custom": {
        "text": "Blog V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em"
      },
      "custom": {
        "text": "Blog V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginBottom": "",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "1.5em",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "marginTop": "195px",
        "fontSize": "1.5em"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "1.5em",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "1.5em",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Past Client"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "1.5em",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "fontSize": "1.5em",
        "marginTop": "15px"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.5em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Stay Here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "200px",
        "fontSize": "1.8em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.5em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.5em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "404 Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.5em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Password Protected"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.5em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.5em",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "15px",
        "fontSize": "1.9em",
        "marginLeft": "50px",
        "borderBottomStyle": "solid"
      },
      "custom": {
        "text": "More Templates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex42": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "borderStyle": "none",
        "height": "45%",
        "alignItems": "flex-start",
        "marginTop": "200px"
      },
      "callbacks": {}
    },
    "TextBox107": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "40%",
        "marginLeft": "150px",
        "fontFamily": "Poppins",
        "color": "#827d7d",
        "marginTop": "230px",
        "position": "absolute"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "fontFamily": "Poppins",
        "fontSize": "3.8em",
        "position": "relative",
        "marginLeft": "150px"
      },
      "custom": {
        "text": "I'm Sam, and I design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex43": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "65%",
        "marginLeft": "150px",
        "height": "250px",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox110": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "fontSize": "3.9em",
        "fontFamily": "Poppins",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "5px",
        "height": "50px",
        "marginLeft": "",
        "paddingBottom": "30px"
      },
      "custom": {
        "text": "user interfaces"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "fontSize": "3.8em",
        "fontFamily": "Poppins",
        "marginLeft": "10px"
      },
      "custom": {
        "text": "for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {
    "478": {
      "TextBox5": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "fontSize": "1.2rem",
          "height": "20px",
          "width": "20vw",
          "marginLeft": "10px"
        }
      },
      "Flex2": {
        "styles": {
          "boxShadow": "",
          "marginLeft": "10px"
        }
      },
      "Div1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image3": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image5": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image6": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image7": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Flex13": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Link7": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "767": {
      "Div1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "991": {
      "Div1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    }
  }
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
