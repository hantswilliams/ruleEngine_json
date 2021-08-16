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
            message: 'Test k1Rule has succesfully ran, this is the first message', 
            message1: 'Player has fouled out!',
            message2: 'Remove them from the game'
        }
    }
}


module.exports = {
    k1Rule,
}