const user ={id:1, name:'Groib Aamir', job:'actor'};
//JavaScript Object Notation (JSON)

 const srtingified =JSON.stringify(user);

//  console.log(srtingified);

const shop={
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city:'ranbir',
        country:'BD'
    },
    products:['laptoop,mic,monitor','keyborad'],
    revenue: 45000,
    isOpen:true,
    isNew:false
}
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj =JSON.parse(shopJson);
console.log(shopObj);