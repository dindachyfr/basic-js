let data={
    id: 1,
    name:'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'.biz,
    address:{
        street: 'Kulas Light',
        suite:'Apt.556',
        city:'Gwenborough',
        zipcode:'92998-3874'
},
phone:'1-0383-284872-28824',
website: "hildegard.org"}

let newData = {...data, name:'Dinda', email:'dindachyfr@gmail.com', hobbies:['rebahan', 'nonton warintil', 'main kucing']}
//console.log(newData)

const {address} = data;
const {street, city} = address;
//console.log({street, city});