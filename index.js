require('colors')
const express = require('express');
// const bodyParser = require('body-parser');
const Engine = require('json-rules-engine').Engine;
const app = express();
const port = process.argv[2] || 3000;

const testRules = require('./rules/rules.js')
const ruledetailfunction = require('./rules/ruleRender.js')

// app.use(bodyParser.json());
app.listen(port);


// Opiton rules // allow undefined facts
let engineOptions = {
  allowUndefinedFacts: true,
};

// Setting up the rules engine 
let eng = new Engine([], engineOptions);

eng.addRule(testRules.k1Rule)
eng.addRule(testRules.biologicalSex)


var outputHolder = []

// whenever rule is evaluated and the conditions pass, 'rule pass message' will trigger
eng.on('success', function(event, almanac, ruleResult) {
    outputHolder.push(ruledetailfunction.renderDetails(event, ruleResult, almanac))
})

// whenever rule is evaluated and the conditions fail, 'rule fail message' will trigger
eng.on('failure', function(event, almanac, ruleResult) {
    outputHolder.push(ruledetailfunction.renderDetails(event, ruleResult, almanac))
})  


// default route 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// test route 
app.post('/', (req, res) => {


    async function runRules(){

        let fact = req.body;

        const {
            results,         // rule results for successful rules
            failureResults,  // rule results for failed rules
            events,          // array of successful rule events
            failureEvents,   // array of failed rule events
            almanac          // Almanac instance representing the run
          } = await eng.run(fact)

        console.log("userId: ", almanac.factValue('userid'))
        console.log("resultsPass: ", results)
        console.log("resultsFail: ", failureResults)
        console.log("eventsPass: ", events)
        console.log("eventsFail: ", failureEvents)
        console.log("almanac: ", almanac)

        
        var testfile = almanac.ruleResults
            .map(x => x.conditions)

        var testfile2 = testfile
            .map(x => x.all)

        console.log('quickTest1: ', almanac)
        console.log('quickTest2: ', testfile)
        console.log('quickTest3: ', testfile2)

        output = {'rulesPassed': events, 'rulesFailed': failureEvents} 

        console.log('holder: ', outputHolder)

        res.send(outputHolder).then(outputHolder = [])




    }

    runRules();


    
    // async function start () {    
    //   await Promise.all([
    //     eng
    //         .run(fact)
    //         .then(res.send({
    //             userID: fact.userid,
    //             simpleMessge: "rules executed",
    //         }))
    //         .catch(err => console.log(err.stack))
    //     ])
    // }
    // start()

   




});

