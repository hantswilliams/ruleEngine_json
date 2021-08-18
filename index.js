require('colors')
const express = require('express');
const bodyParser = require('body-parser');
const Engine = require('json-rules-engine').Engine;
const app = express();
const port = process.argv[2] || 3000;

const testRules = require('./rules/rules.js')
const ruledetailfunction = require('./rules/ruleRender.js')

app.use(bodyParser.json());
app.listen(port);


// Opiton rules // allow undefined facts
let engineOptions = {
  allowUndefinedFacts: true,
};

// Setting up the rules engine 
let eng = new Engine([], engineOptions);

eng.addRule(testRules.k1Rule)
eng.addRule(testRules.biologicalSex)

var outputDetails = []

// whenever rule is evaluated and the conditions pass, 'rule pass message' will trigger
eng.on('success', function(event, almanac, ruleResult) {
    outputDetails.push(ruledetailfunction.renderDetails(event, ruleResult, almanac))
})

// whenever rule is evaluated and the conditions fail, 'rule fail message' will trigger
eng.on('failure', function(event, almanac, ruleResult) {
    outputDetails.push(ruledetailfunction.renderDetails(event, ruleResult, almanac))
})  












// default route 
app.get('/', (req, res) => {
    res.send('Hello from JSON-rules-engine!');
});

// test route 
app.post('/', (req, res) => {

    let fact = req.body;
    
    async function start () {  

        await Promise.all([
            eng
                .run(fact)
                .catch(err => console.log(err.stack))
            ])
            .then(outputDetails = [])

        res.send({
            userID: fact.userid,
            simpleMessge: "rules executed",
            outputDetails: outputDetails,
        })

    }

    start()

});

