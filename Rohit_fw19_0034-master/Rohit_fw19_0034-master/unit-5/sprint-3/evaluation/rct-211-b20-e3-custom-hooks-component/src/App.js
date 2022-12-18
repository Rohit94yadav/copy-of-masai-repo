
import './App.css';
import Button from './Components/Button';
import Image from './Components/Image';
import Todos1 from './Components/Todos1';
import Todos2 from './Components/Todos2';

function App() {
  return (
    <>
    <div>
     <Todos1 />
     <Todos2 />
    </div>
    <div >
      <h1>Image</h1>
     <Image src = {"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} alt ={"tree"} />
     <h1>Button</h1>
     <Button />
    </div>
    </>
  );
}

export default App;
