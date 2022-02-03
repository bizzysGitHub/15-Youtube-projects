
type AppProps = {
    Meals: {
        id: number;
        title: string;
        category: string;
        price: number;
        img: string;
        desc: string;
    }[],
    chooseMenuItem: (meal: string) => void,
}

// use [... new Set()] to remove duplicates 


const MenuBar = ({ Meals, chooseMenuItem }: AppProps): JSX.Element => {
    const categories = [
        'All',
        ...new Set(Meals.map((item) => item.category)),
    ];
    const handleClick = (itemCLicked: string) => {
        chooseMenuItem(itemCLicked)
        // alert(itemCLicked);
    }


    return (
        <div>
            {
                categories.map(item => <button type="button" className="text-amber-500 capitalize m-8 px-3 py-2 rounded-md border-2 border-solid bg-transparent border-amber-300 w-24 shadow-2xl
                hover:ring hover:ring-amber-300 hover:bg-amber-300 hover:text-zinc-50 hover:border-none focus:bg-amber-400 focus:text-zinc-50" onClick={() => handleClick(item)}> {item} </button>)
            }
        </div>
    );
};
export default MenuBar

/**
 * hover:transition hover:ease-in-out hover:outline hover:outline-offset-8 outline-amber-300 hover:duration-700
 */