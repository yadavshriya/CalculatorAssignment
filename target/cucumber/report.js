$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Arithmetic.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator Automation Test",
  "description": "",
  "id": "calculator-automation-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Arithmetic Operationss",
  "description": "",
  "id": "calculator-automation-test;arithmetic-operationss",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters first input value \"\u003cn1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on operation \"\u003csign\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters second input value \"\u003cn2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should be \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "calculator-automation-test;arithmetic-operationss;",
  "rows": [
    {
      "cells": [
        "n1",
        "sign",
        "n2",
        "result"
      ],
      "line": 12,
      "id": "calculator-automation-test;arithmetic-operationss;;1"
    },
    {
      "cells": [
        "423",
        "*",
        "525",
        "222075"
      ],
      "line": 13,
      "id": "calculator-automation-test;arithmetic-operationss;;2"
    },
    {
      "cells": [
        "4000",
        "/",
        "200",
        "20"
      ],
      "line": 14,
      "id": "calculator-automation-test;arithmetic-operationss;;3"
    },
    {
      "cells": [
        "-234234",
        "+",
        "345345",
        "111111"
      ],
      "line": 15,
      "id": "calculator-automation-test;arithmetic-operationss;;4"
    },
    {
      "cells": [
        "234823",
        "-",
        "-23094823",
        "23329646"
      ],
      "line": 16,
      "id": "calculator-automation-test;arithmetic-operationss;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Arithmetic Operationss",
  "description": "",
  "id": "calculator-automation-test;arithmetic-operationss;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters first input value \"423\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on operation \"*\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters second input value \"525\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should be \"222075\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 4483152565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "423",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_first_input_value(String)"
});
formatter.result({
  "duration": 236912242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_click_on_operation(String)"
});
formatter.result({
  "duration": 67415174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "525",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_second_input_value(String)"
});
formatter.result({
  "duration": 154544031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222075",
      "offset": 22
    }
  ],
  "location": "StepDefinition.the_result_should_be(StringBuilder)"
});
formatter.result({
  "duration": 671013970,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Arithmetic Operationss",
  "description": "",
  "id": "calculator-automation-test;arithmetic-operationss;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters first input value \"4000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on operation \"/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters second input value \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should be \"20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 3083420382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_first_input_value(String)"
});
formatter.result({
  "duration": 231976683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_click_on_operation(String)"
});
formatter.result({
  "duration": 68853764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_second_input_value(String)"
});
formatter.result({
  "duration": 181207925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 22
    }
  ],
  "location": "StepDefinition.the_result_should_be(StringBuilder)"
});
formatter.result({
  "duration": 650166014,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Arithmetic Operationss",
  "description": "",
  "id": "calculator-automation-test;arithmetic-operationss;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters first input value \"-234234\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on operation \"+\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters second input value \"345345\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should be \"111111\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 3068468682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-234234",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_first_input_value(String)"
});
formatter.result({
  "duration": 416153262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_click_on_operation(String)"
});
formatter.result({
  "duration": 67494600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345345",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_second_input_value(String)"
});
formatter.result({
  "duration": 280577739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111111",
      "offset": 22
    }
  ],
  "location": "StepDefinition.the_result_should_be(StringBuilder)"
});
formatter.result({
  "duration": 646215245,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Arithmetic Operationss",
  "description": "",
  "id": "calculator-automation-test;arithmetic-operationss;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters first input value \"234823\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on operation \"-\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters second input value \"-23094823\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should be \"23329646\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 3004814190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234823",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_first_input_value(String)"
});
formatter.result({
  "duration": 358685511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_click_on_operation(String)"
});
formatter.result({
  "duration": 66947989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-23094823",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_second_input_value(String)"
});
formatter.result({
  "duration": 444886245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23329646",
      "offset": 22
    }
  ],
  "location": "StepDefinition.the_result_should_be(StringBuilder)"
});
formatter.result({
  "duration": 666061008,
  "status": "passed"
});
});