const day = 'monday'

let nextday;

switch (day)
{
    case 'monday':
        nextday='tuesday'
        break;
    case 'tuesday':
        nextday='wendsday'
        break
    default:
        console.log('nun of this')
        
    

}
console.log(`the next day after ${day} is ${nextday}`)
