let k1Rule = {
    name: 'Test k1Rule',
    conditions: {
            all: [{
                fact: 'fact1-dummyFact1',
                operator: 'greaterThanInclusive',
                value: 40
            }, {
                fact: 'fact2-dummyFact2',
                operator: 'greaterThanInclusive',
                value: 5
            }]
    },
    
    event: {
        type: 'fouledOut',
        params: {
            ruleName: 'Test k1Rule', 
            humanMessage: 'Test k1Rule has succesfully ran, this is the first message', 
            message1: 'Player has fouled out!',
            message2: 'Remove them from the game'
        }
    }
}

let biologicalSex = {
    name: 'biologicalSex',
    conditions: {
            all: [{
                fact: 'Fc0HxLzij9vqkDqsNdFMJ', // Which biological sex were you assigned at birth
                operator: 'equal',
                value: 'cko83ue2h0007bqozaabuv5en' //male 
            }]
    },
    
    event: {
        type: 'biologicalSex',
        params: {
            ruleName: 'biologicalSex', 
            humanMessage: 'male'
        }
    }
}


module.exports = {
    k1Rule,
    biologicalSex
}