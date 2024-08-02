import Addusers from "./Componet/AddUsers";
import DisplayUsers from "./Componet/DisplayUsers";
import './globals.scss';

import { Providers } from "./redux/providers";
export default function Home() {
  return (
    <Providers>
       <main  className='container'>
      <Addusers/>
      <DisplayUsers/>
    </main>
    </Providers>
   
  );
}
