Feature: Calculator Automation Test

Scenario Outline: Arithmetic Operationss
Given user is in login page
When user enters first input value "<n1>"
When user click on operation "<sign>"
When user enters second input value "<n2>"
Then the result should be "<result>"

Examples:

|n1|sign|n2|result|
|423|*|525|222075|
|4000|/|200|20|
|-234234|+|345345|111111|
|234823|-|-23094823|23329646|