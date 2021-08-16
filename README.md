# ruleEngine_json
testing repo for simple jason-rules-engine

## how to test: 
- terminal: `node index.js` 
- open up postman, send in some of the example requests from the `testAPIrequest.md` file 

## to do: 
- Eventually move storage of rules to some CRUD editor and keep in s3 buckets for versioning 
- Need to create some logs, storage of the rule processing 
- Need to think through some examples of having more complex rules, and how the handling of the printing of the failed rules will be displayed
- Need to think through the hierarchy of the rules (e.g., what level things will be conducted at)
