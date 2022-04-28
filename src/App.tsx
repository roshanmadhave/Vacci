// import React, { useState } from 'react';
// import Expenses from './Components/Expenses/Expenses';
// import ClassBasedComp from './Components/Playground/ClassBasedComp/ClassBasedComp';
// import MyStyledComponent from './Components/Playground/MyStyledComp/MyStyleComp';
// import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
// import Login from './Components/Login/Login';
// import UseStateDemo from './Components/Playground/Hooks/UseStateDemo';
// import UseEffectDemo from './Components/Playground/Hooks/UseEffectDemo';
// import UseReducerDemo from './Components/Playground/Hooks/UseReducerDemo';
// import ParentComp from './Components/Playground/ReactInternals/ParentComp';

// function App() {
//     // const [toggleComp, setToggleComp] = useState<boolean>(true);

//   return (
//     <div className="container">

//       {/* <UseReducerDemo /> */}


//       {/* <button onClick={() => (setToggleComp(!toggleComp))}>Toggle Comp</button>

//     { toggleComp && <UseEffectDemo />} */}

//     {/* <UseStateDemo /> */}

//     {/* <Login /> */}

//       {/* <ErrorBoundary>
//         <MyStyledComponent/>
//       </ErrorBoundary> */}
//     <hr />

//     {/* <ClassBasedComp> </ClassBasedComp> */}

//       {/* <Expenses /> */}
//       <ParentComp />
//     </div>
//   );
// }

// export default App;

// import Posts from "./Components/Posts/Posts";

// function App() {
//   return (
//     <div className="container">
//       <Posts />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Users from './Components/Users/Users';


const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;