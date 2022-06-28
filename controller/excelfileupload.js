// const xlsxFile = require('read-excel-file/node');
const Product = require('../model/product');
var excelToJson = require('convert-excel-to-json');
module.exports.upload= async function(req,res){
    const filePath = 'C:/Users/saurav/Desktop/node-project/Product_data.xlsx';
 
// xlsxFile('C:/Users/saurav/Desktop/node-project/Product_data.xlsx').then((rows) => {
//     // for (i in rows){
//     //     for (j in rows[i]){
//     //         Product.create({
//     //             name : row[i],
//     //             amount : row[j]
//     //         })
//     //     }
//     // }
//     //console.log(rows);
//     for(let i in rows){
//         for(j in rows[i]){
//             console.log(rows[i]);
//         }
//     }
    

// })

const excelData = excelToJson({
    sourceFile: filePath,
    //sheets:[{
    // Excel Sheet Name
    name: 'product_data',
    // Header Row -> be skipped and will not be present at our result object.
    header:{
    rows: 1
    },
    columnToKey: {
        A : 'name',
        B : 'amount',
        
    }
    // Mapping columns to keys
    // columnToKey: {
    //     A: '_id',
    //     B: 'name',
    //     C: 'address',
    // }
  //  }]
    });

console.log(excelData);
//let data = await Product.insertMany(excelData.Sheet1) ;
//console.log(data);
// console.log(excelData.Sheet1);
// const arr = excelData.Sheet1;
// jsonObject = arr.map(JSON.stringify);
// uniqueSet = new Set(jsonObject);
//  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
//  console.log(uniqueArray);
//  uniqueArray.forEach((value)=>{
//     Product.create(value);
//  })
const sheet = excelData.Sheet1;
const data = await  Product.find({});
  if(data.length>0){
    sheet.forEach(async (value)=>{
     console.log(value.name);
     const one = await Product.findOne({name : value.name});
     if(one){
     await  Product.findOneAndUpdate({name : value.name},{amount : value.amount});
     }else{
        Product.create({
            name : value.name,
            amount : value.amount
        })
     }
    })
    return res.status(201).json({"message" : "all are up to date"});
  }
  else{
     sheet.forEach(async (value)=>{
        const dateentryone =await  Product.findOne({name : value.name});
        if(dateentryone){
            console.log("item already exists");
        }
       await  Product.create({
            name : value.name,
            amount : value.amount
        })
     })
 return res.status(200).json({"message" : "product is created"});  }
}