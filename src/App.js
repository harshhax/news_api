// import './App.css';
// import News from './components/News';
// import { useState } from 'react';
// import LabTabs from './components/LabTabs';
// function App() {
//   const[category,setCategory]=useState("general")
//   return (
//     <div className="App">
      
//       <h1>NEWS APPLICATION</h1>
//       <button onClick={()=>{setCategory("general")}}>GENERAL</button>
//       <button onClick={()=>{setCategory("technology")}}>TECHNOLOGY</button>
//       <button onClick={()=>{setCategory("sports")}}>SPORTS</button>
//       <LabTabs/>
      
//       <News category={category}/>
//     </div>
//   );
// }

// export default App;

import './App.css';
import News from './components/News';
import { useState } from 'react';
import LabTabs from './components/LabTabs';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <LabTabs category={category} setCategory={setCategory} />
      <News category={category} />
    </div>
  );
}

export default App;
