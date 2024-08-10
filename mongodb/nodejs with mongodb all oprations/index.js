const dbconnect = require ('./mongodb');
async function main(){

    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}

console.log(main())