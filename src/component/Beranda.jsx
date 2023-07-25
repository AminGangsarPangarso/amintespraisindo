import Menus from "../assets/style/images/menu.png"
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Beranda() {
  return (
    <div className="flex justify-center items-center w-full h-screen mb-60 ">
     
    <Card
      className="max-w-sm mb-80"
      href="#"
    >
     <div className="flex justify-center items-center text-center flex-row ">
      <ul className=" flex text-center w-full gap-8">
        <li className="text-center">
          <img src={Menus} alt="" className="w-10 h-10"/>
          <Link className="text-center"> </Link>
        </li>
        <li >
          <img src={Menus} alt="" className="w-10 h-10"/>
          <Link className="text-center"> </Link>
        </li>
        <li >
          <img src={Menus} alt="" className="w-10 h-10"/>
          <Link className="text-center"> </Link>
        </li>
        <li >
          <img src={Menus} alt="" className="w-10 h-10"/>
          <Link className="text-center"> </Link>
        </li>
       
      </ul>
     </div>
    </Card>
    </div>
  )
}


