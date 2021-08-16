# Example 1 

## Passing Rule 
curl -s -X POST http://127.0.0.1:3000/ -d '{ "fact1-dummyFact1": 45, "fact2-dummyFact2": 15, "userid": "232asd34sf" }' -H 'Content-type: application/json'

## Failing Rule
curl -s -X POST http://127.0.0.1:3000/ -d '{ "fact1-dummyFact1": 30, "fact2-dummyFact2": 15, "userid": "232asd34sf" }' -H 'Content-type: application/json'

## Additional facts that have not been mapped: 
curl -s -X POST http://127.0.0.1:3000/ -d '{ "fact1-dummyFact1": 50, "fact2-dummyFact2": 15, "userid": "232asd34sf", "futureFact1": "unknown", "futureFact2": "unknown" }' -H 'Content-type: application/json'