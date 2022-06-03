import { Post } from './components/Post';
import { Header } from './components/Header';
import './globalStyle.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="wilson santos"
        content="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem perferendis optio nisi reiciendis aperiam sunt eveniet, laudantium quas facere. Minus odio nemo veritatis incidunt omnis esse debitis. Id, iusto expedita."
      />
    </div>
  )
}
