import { useState } from 'react';
import MenuBar from './features/menuBar';
import MenuItems from './features/menuItems';
import menuData from './data.js';

function App() {
  // const [menuItem, setMenuItem] = useState(menuData);
  const [mealOfChoice, setMealOfChoice] = useState(menuData);

  const handleMenuItem = (itemChosen: string) => {
    itemChosen != 'All'
      ? setMealOfChoice(
          menuData.filter((item: any) => item.category === itemChosen)
        )
      : setMealOfChoice(menuData);
  };

  return (
    <div className='container mx-auto bg-sky-100 flex flex-col items-center	'>
      {/*make this centered */}
      <div className='divide-y divide-amber-500 divide-y-2'>
      <h1 className='text-4xl py-3 font-semibold'>Our Menu</h1>
      <hr className='w-1/2 mx-auto'></hr>

      </div>
      <MenuBar Meals={menuData} chooseMenuItem={handleMenuItem}></MenuBar>
      <MenuItems Item={mealOfChoice}></MenuItems>
    </div>
  );
}

export default App;
