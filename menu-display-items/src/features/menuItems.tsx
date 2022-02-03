type AppProps = {
  Item: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
};

const MenuItem = ({ Item }: AppProps): JSX.Element => {
  return (
    <div className="flex flex-wrap">
      {Item.map((item) => {
        return (
          // card container
          <div
            className="flex flex-row basis-1/2 h-60 p-2"
            key={item.id}
          >
            {/* image container  */}
            <div className="box-border basis-2/5 mx-3 border-4 rounded-sm border-solid border-amber-500">
              {/* image */}
              <img
                src={item.img}
                className=" h-full w-full"
              />
            </div>
            {/* menu Content Container  */}
            <div className="menuContentContainer basis-3/5">
              <div className="titleContainer flex flex-row justify-between font-bold">
                <div className="menuItemName capitalize">
                  <h2>{item.title}</h2>
                </div>
                <div className="menuItemPrice antialiased text-amber-500">
                  <h2>${item.price}</h2>
                </div>
              </div>
              <hr className="border border-solid border-zinc-400"></hr>
              <div className="detailsContainer mt-5">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
