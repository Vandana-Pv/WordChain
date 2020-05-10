const fruits = [
    'apple',
    'apricot',
    'avocado',
    'banana',
    'berries',
    'blueberries',
    'cherries',
    'cantaloupe',
    'cucumbers',
    'dates',
    'dragon fruit',
    'eggfruit',
    'finger lime',
    'grapefruit',
    'grapes',
    'guava',
    'hackberry',
    'jackfruit',
    'kiwi',
    'lime',
    'mango',
    'melon',
    'olives',
    'orange',
    'papaya',
    'raspberries',
    'stawberry',
    'tomato',
    'watermelon',
]
 
// const fruitname = Alexa.getSlotValue(requestEnvelope, 'fruitsname');
const fruitname = 'banana'
var input = fruitname;

var n = input.length
console.log(n);

var res = input.charAt(n-1);
console.log('-----',res)

for(i=0;i<fruits.length;i++){
    var f1 = fruits[i];
    var r1 = f1.charAt(0);
    if(r1 === res){
        console.log('}}}}}',f1);
    }
}
