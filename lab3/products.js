/*const products = [
  {
    id: 1,
    name: "marker",
    qty: 100,
    price: 15,
  },
  {
    id: 2,
    name: "pen",
    qty: 50,
    price: 10,
  },
];

let nextId = 3;

export const getAllProducts = () => {
  return products;
};

export const addProduct = (item) => {
  item.id = nextId;
  nextId++;
  products.push(item);
  return item;
};

export const deleteProduct = (pid) => {
  const item = products.findIndex((prd) => prd.id === pid);

  if (item === -1) return false;

  products.splice(item, 1);
  console.log("products remaining:", products);
  return true;
};

export const updateProduct = (pid,updateItem)=>{
    const Item = products.findLastIndex(prd)=> prd.id === pid);

    if (Item == -1) 
    {
        return false;
    }
    updateItem.Id = pid;
    products[Item] = updateItem;
    return updateItem;
};


export const getProductById = (pid) => {
  const index = products.findIndex((prd) => prd.id === pid);

  if (item == -1) {
    return false;
  }
  return products[index];
};*/


const products = [
  {
    id: 1,
    name: "marker",
    qty: 100,
    price: 15,
  },
  {
    id: 2,
    name: "pen",
    qty: 50,
    price: 10,
  },
];

let nextId = 3;

export const getAllProducts = () => {
  return products;
};

export const addProduct = (item) => {
  item.id = nextId;
  nextId++;
  products.push(item);
  return item;
};

export const deleteProduct = (pid) => {
  const item = products.findIndex((prd) => prd.id === pid);

  if (item === -1) return false;

  products.splice(item, 1);
  console.log("products remaining:", products);
  return true;
};
//create a function to update any product given pid call this function into prg6.js and verify its working by EchoAPI
export const updateProduct = (pid, updateItem)=>{
  const index = products.findIndex((prd) => prd.id ===pid);

  if (index==-1){
    return false;
  }
  updateItem.id= pid
  products(index)= updateItem;
  //Object.assign(products(item),updateItem);
  return true
}
export const getProductById = (pid) => {
  const index = products.findIndex((prd) => prd.id === pid);

  if (index === -1)
    return false;

  return products[index];
};