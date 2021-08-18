// additional succes and fail messages

function renderDetails (event, ruleResult, almanac) {

    // const userid = almanac.factValue('userid')

    // if rule succeeded, render success message
    if (ruleResult.result) {

        const detailPass = ruleResult.conditions.all.filter(condition => condition.result)
            .map(condition => {
            switch (condition.operator) {
              case 'equal':
                return `${condition.fact} had a value of ${condition.factResult}`
              case 'greaterThanInclusive':
                return `${condition.fact} had a value of ${condition.factResult}`
              default:
                return ``
            }
            }).join(' and ')

        simpleLogPass = {
            // 'userid': userid, 
            'ruleResult': ruleResult.result,
            'ruleName': ruleResult.name,
            'ruleOutputMessage': event.params.humanMessage,
            'inputeData': detailPass, 
            // 'outputResultRaw': ruleResult
          }   
        

        console.log('rulePassMessage: '.green, simpleLogPass)
        return simpleLogPass

    }

    // if rule failed, iterate over each failed condition to determine why the student didn't qualify for athletics honor roll
    const detailFail = ruleResult.conditions.all.filter(condition => !condition.result)
      .map(condition => {
        switch (condition.operator) {
          case 'equal':
            return `${condition.fact} had a value of ${condition.factResult}`
          case 'greaterThanInclusive':
            return `${condition.fact} had a value of ${condition.factResult}`
          default:
            return ``
        }
      }).join(' and ')

      simpleLogFail = {
        // 'userid': userid, 
        'ruleResult': ruleResult.result,
        'ruleName': ruleResult.name,
        'ruleOutputMessage': event.params.humanMessage,
        'inputeData': detailFail,
        // 'outputResultRaw': ruleResult
    }  

    console.log('ruleFailMessage'.red, simpleLogFail)
    return simpleLogFail

  }

  module.exports = { renderDetails };