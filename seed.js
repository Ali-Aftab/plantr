const {db, Gardener, Plot, Vegetable} = require('./models');

db.sync({force: true}).then(
    Vegetable.bulkCreate([{name: 'filadelfo', color: 'white', planted_on: '1992-07-04'}])
    console.log('work')
)
.then(()=>{
    console.log('database sync')
    db.close()
}).catch(err =>{
    console.log('disaster!')
    console.log(err)
})
