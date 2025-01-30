const {MongoClient} = require("mongodb")

const url = "mongodb+srv://devikanthgandla28:BffkWnN15YlkmHml@namastenode.ctawv.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // const data = {

    //     fistName: "Deepika",
    //     lastName: "padukone",
    //     city: "Mumbai",
    //     // country: "India",
    //     phoneNumber: "6471869300",
    // }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);
  
    // the following code examples can be pasted here...
    // Read
   const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  
    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());