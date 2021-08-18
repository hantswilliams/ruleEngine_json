// additional succes and fail messages

function renderDetails (event, ruleResult, almanac) {

    // const userid = almanac.factValue('userid')

    // if rule succeeded, render success message
    if (ruleResult.result) {

        const detailPass = ruleResult.conditions.all.filter(condition => condition.result)
            .map(condition => {
            switch (condition.operator) {
              case 'equal':
                return `the operator was ${condition.operator} with a fact of: ${condition.fact} and value of ${condition.factResult}`
              case 'greaterThanInclusive':
                return `the operator was ${condition.operator} with a fact of: ${condition.fact} had a value of ${condition.factResult}`
              default:
                return ``
            }
            }).join(' and ')

        const operatorValue = ruleResult.conditions.all.filter(condition => condition.result)
            .map(condition => {
                return `${condition.operator}`
            })

        const conditionfactValue = ruleResult.conditions.all.filter(condition => condition.result)
            .map(condition => {
                return `${condition.fact}`
            })

        const conditionfactResults = ruleResult.conditions.all.filter(condition => condition.result)
            .map(condition => {
                return `${condition.factResult}`
            })

        simpleLogPass = {
            'ruleResult': ruleResult.result,
            'ruleName': ruleResult.name,
            'ruleOutputMessage': event.params.humanMessage,
            'inputeData': detailPass, 
            'operatorValues': operatorValue,
            'conditionfactNames': conditionfactValue,
            'conditionfactInputs': conditionfactResults
          }   
        

        console.log('rulePassMessage: '.green, simpleLogPass)
        return simpleLogPass

    }

    // if rule failed, iterate over each failed condition to determine why the student didn't qualify for athletics honor roll
    const detailFail = ruleResult.conditions.all.filter(condition => !condition.result)
      .map(condition => {
        switch (condition.operator) {
          case 'equal':
            return `the operator was ${condition.operator} with a fact of: ${condition.fact} and value of ${condition.factResult}`
          case 'greaterThanInclusive':
            return `the operator was ${condition.operator} with a fact of: ${condition.fact} had a value of ${condition.factResult}`
          default:
            return ``
        }
      }).join(' and ')

      const operatorValue = ruleResult.conditions.all.filter(condition => condition.result)
      .map(condition => {
          return `${condition.operator}`
      })

      const conditionfactValue = ruleResult.conditions.all.filter(condition => condition.result)
      .map(condition => {
          return `${condition.fact}`
      })

      const conditionfactResults = ruleResult.conditions.all.filter(condition => condition.result)
      .map(condition => {
          return `${condition.factResult}`
      })

      simpleLogFail = {
        'ruleResult': ruleResult.result,
        'ruleName': ruleResult.name,
        'ruleOutputMessage': event.params.humanMessage,
        'inputeData': detailFail,
        'operatorValues': operatorValue,
        'conditionfactNames': conditionfactValue,
        'conditionfactInputs': conditionfactResults
    }  

    console.log('ruleFailMessage'.red, simpleLogFail)
    return simpleLogFail

  }

  module.exports = { renderDetails };