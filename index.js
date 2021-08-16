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


// Setting up the rules engine 
let eng = new Engine();
eng.addRule(testRules.k1Rule)

// whenever rule is evaluated and the conditions pass, 'rule pass message' will trigger
eng.on('success', function(event, almanac, ruleResult) {
    ruledetailfunction.renderDetails(ruleResult, almanac)
  })

// whenever rule is evaluated and the conditions fail, 'rule fail message' will trigger
eng.on('failure', function(event, almanac, ruleResult) {
    ruledetailfunction.renderDetails(ruleResult, almanac)
  })  

// default route 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// test route 
app.post('/', (req, res) => {

    let fact = req.body;
    eng
        .run(fact)
        .then(res.send({
            messge: "Rules executed"
        }))
        .catch(err => console.log(err.stack));

});

