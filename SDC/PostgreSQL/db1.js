const faker = require('faker');
const start = Date.now()
const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')
const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
const pool = new Pool({
    user: 'mattshin64',
    host: 'localhost',
    database: 'related',
    port: '5432'
})
function createRegion (){
    let string = ''
    for(var i = 0; i <= 49; i++){
        string += i+1
        string += ','
        string += states[i] 
        string += '\n'
    }
    console.log('DONE WITH REGIONS')
    return string
}

function createPhoto (num){
    let string = ''
    for(var m = num; m <= num + 1999999; m++){
        for(var j = 1; j <= 5; j++){
            string += ((m-1) * 5 + j);
            string += ','
            string += `https://sdc-images-airbnb.s3-us-west-1.amazonaws.com/img_${faker.random.number({min: 1, max: 919})}.jpeg`
            string += ','
            string += m
            string += '\n'
        }
    }
    console.log('DONE!')
    return string
}

function createHome1 (num){
    let string = ''
    let number = Math.round(num/200000) + 1
    console.log(number, number + 9)
    for(var i = num; i <= num+1999999; i++){
        string += i
        string += ','
        string += faker.address.streetAddress()
        string += ','
        string += faker.lorem.words()
        string += ','
        string += faker.finance.amount(3, 5, 2)
        string += ','
        string += faker.random.number({min: 1, max: 500})
        string += ','
        string += faker.random.number({min: 60, max: 400})
        string += ','
        string += faker.random.number({min: 1, max: 8})
        string += ','
        string += faker.name.findName()
        string += ','
        string += faker.random.number({min: 0, max: 1})
        string += ','
        string += faker.random.number({min: number, max: number + 9})
        string += '\n' 
    }
    console.log('DONE WITH STRING')
    return string
}
//Writing Home CSV files
// fs.writeFile('./csv/home1.csv', createHome1(1), (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('DONE WITH home1')
//     fs.writeFile('./csv/home2.csv', createHome1(2000001), (err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('DONE WITH home2')
//         fs.writeFile('./csv/home3.csv', createHome1(4000001), (err)=>{
//             if(err){
//                 throw err;
//             }
//             console.log('DONE WITH home3')
//             fs.writeFile('./csv/home4.csv', createHome1(6000001), (err)=>{
//                 if(err){
//                     throw err;
//                 }
//                 console.log('DONE WITH home4')
//                 fs.writeFile('./csv/home5.csv', createHome1(8000001), (err)=>{
//                     if(err){
//                         throw err;
//                     }
//                     console.log('DONE WITH home5')
//                 });
//             });
//         });
//     });
// });
//Writing photos csv files
fs.writeFile('./csv/photo1.csv', createPhoto(1), (err)=>{
    if(err){
        throw err;
    }
    console.log('DONE WITH photo1')
    fs.writeFile('./csv/photo2.csv', createPhoto(2000001), (err)=>{
        if(err){
            throw err;
        }
        console.log('DONE WITH photo2')
        fs.writeFile('./csv/photo3.csv', createPhoto(4000001), (err)=>{
            if(err){
                throw err;
            }
            console.log('DONE WITH photo3')
            fs.writeFile('./csv/photo4.csv', createPhoto(6000001), (err)=>{
                if(err){
                    throw err;
                }
                console.log('DONE WITH photo4')
                fs.writeFile('./csv/photo5.csv', createPhoto(8000001), (err)=>{
                    if(err){
                        throw err;
                    }
                    console.log('DONE WITH photo5')
                });
            });
        });
    });
});

// fs.writeFile('./csv/region.csv', createRegion(), (err)=> {
//     if(err){
//         throw err;
//     }
//     console.log('DONE WITH WRITE')
//     pool.query("COPY regions(name) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/region.csv' DELIMITER ','", (err) => {
//         if(err){
//             console.log(err);
//             throw err;
//         } else {
//             console.log('DONE WITH REGIONS IN DB')
//             fs.writeFile('./csv/home1.csv', createHome(1), (err)=>{
//                 if(err){
//                     throw err;
//                 }
//                 pool.query("COPY homes(address,title,rating,rating_num,price,guests,owner,superhost,region_id) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/home1.csv' DELIMITER ','", (err)=>{
//                     if(err){
//                         throw(err)
//                     }
//                     fs.writeFile('./csv/home2.csv', createHome(5000001), (err)=>{
//                         if(err){
//                             throw(err);
//                         }
//                         pool.query("COPY homes(address,title,rating,rating_num,price,guests,owner,superhost,region_id) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/home2.csv' DELIMITER ','", (err)=>{
//                             if(err){
//                                 throw(err);
//                             }
//                             console.log(Date.now()- start)
//                             console.log('DONE WITH HOME')
//                             fs.writeFile('./csv/photo1.csv', createPhoto(1), (err) => {
//                                 if(err){
//                                     throw err;
//                                 }
//                                 pool.query("COPY photos(url, home_id) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/photo1.csv' DELIMITER ','", (err)=>{
//                                     if(err){
//                                         throw(err)
//                                     }
//                                     console.log("First photo batch:", Date.now()- start)
//                                     fs.writeFile('./csv/photo2.csv', createPhoto(2500001), (err)=>{
//                                         if(err){
//                                             throw err;
//                                         }
//                                         pool.query("COPY photos(url, home_id) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/photo2.csv' DELIMITER ','", (err)=>{
//                                             if(err){
//                                                 throw(err)
//                                             }
//                                             console.log("Second photo batch:",Date.now()- start)
//                                             fs.writeFile('./csv/photo3.csv', createPhoto(5000001), (err)=>{
//                                                 if(err){
//                                                     throw err;
//                                                 }
//                                                 pool.query("COPY photos(url, home_id) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/photo3.csv' DELIMITER ','", (err)=>{
//                                                     if(err){
//                                                         throw(err)
//                                                     }
//                                                     console.log("Third photo batch:",Date.now()- start)
//                                                     fs.writeFile('./csv/photo4.csv', createPhoto(7500001), (err)=>{
//                                                         if(err){
//                                                             throw err;
//                                                         }
//                                                         pool.query("COPY photos(url, home_id) FROM '/Users/mattshin64/Documents/GitHub/related-services/csv/photo4.csv' DELIMITER ','", (err)=>{
//                                                             if(err){
//                                                                 throw(err)
//                                                             }
//                                                             console.log("Final photo batch:",Date.now()- start)
//                                                             pool.end();
//                                                         })
//                                                     })
//                                                 })
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         }
//     })
// })
