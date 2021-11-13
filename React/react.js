// =========================================================
//  Importation des bibliothèques React et React-DOM
// =========================================================
import React from "react";
import ReactDOM from 'react-dom';


// =========================================================
//  Composant React le plus court
// =========================================================
ReactDOM.render(
    <h1>Bonjour, monde !</h1>,
    document.getElementById('root')
  );


// =========================================================
//  Composant React
// =========================================================
function MyComponent() {
    return (<div>Hello React 👋</div>);
}

// // C'est la même chose
// const MyComponent2 = () => div />;


// On utilise ReactDOM.render(<Composant />, DivContenantReact) pour "envoyé" le composant.
ReactDOM.render(<MyComponent />, document.getElementById("root1"))
