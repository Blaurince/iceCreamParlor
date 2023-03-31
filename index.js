
import { client, fruitCollection} from "./mongoConnect.js"

const addFruit = async () => {
    const myFruit = {
      name: "watermelon",
      taste: "Sour",
      price: 4,
      stock: 5,
    };
  
 try {
    await client.connect()
    const addedFruit = await fruitCollection.insertOne(myFruit)
    console.log(addedFruit)
  } catch(error) {
    console.log(error)
  } finally {
    await client.close()
  }
  
    // const addedFruit = await fruitCollection.insertOne(myFruit);
    // console.log(addedFruit);
  };
  
  addFruit()