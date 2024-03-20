const _id = (el) => document.getElementById(el);

var reactTpl = `import React from 'react'
import ReactDOM from 'react-dom'
function App() {
  const style = {
    padding: '40px',
    textAlign: 'center',
    background: 'lightskyblue',
  }
  return <div style={style}>Welcome to React!</div>
}

ReactDOM.render(
  <App />, 
  document.querySelector('#app')
)`;

var reactNativeTpl = `import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})`;

_id("root").innerHTML = "loading...";

createEditor("javascript", "console.log('Hello World')");

_id("select-playground").addEventListener("change", (e) => {
  switch (e.target.value) {
    case "javascript":
      createEditor("javascript", "console.log('Hello World')");
      break;
    case "html":
      createEditor("html", "<p>Hello World</p>");
      break;
    case "react":
      createEditor("react", reactTpl);
      break;
    case "react-native":
      createEditor("react-native", reactNativeTpl);
      break;
    case "python":
      createEditor("python", 'print("hello world")');
      break;
  }
});

function createEditor(preset, code) {
  let frame = document.createElement("iframe");
  frame.className = "iframe";
  frame.src =
    "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=";
  const hashString = encodeURIComponent(
    JSON.stringify({
      preset: preset,
      fullscreen: false,
      code: code !== null || code !== undefined ? code : false,
    })
  );
  frame.src = frame.src + hashString;
  _id("root").innerHTML = "";
  _id("root").appendChild(frame);
}
