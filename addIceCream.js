
import { client, iceCreamCollection} from "./mongoConnect.js"

const addIceCream = async () => {
    const addType= {
      name: " waffle Comne ",
      price: 4,
      description: " Vanilla ice cream on a waffle cone",
    };
  
 try {
    await client.connect()
    const addedIceCream = await iceCreamCollection.insertOne(addType)
    console.log(addedIceCream)
  } catch(error) {
    console.log(error)
  } finally {
    await client.close()
  }
  
    // const addedFruit = await fruitCollection.insertOne(myFruit);
    // console.log(addedFruit);
  };
  
  addIceCream()