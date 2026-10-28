// Impotrant for Interviews

//JS-Execution context (MEANS HOW JS RUNS FILES CONTAIN CODE
/* GIVE CODE TO JS ---> STEP1 ->[{}] GLOBAL EXECUTION CONTEXT (WE PUT GLOBAL EC IN 'THIS' VARIABLE) 'THIS VALUE' IS WINDOW OBJECT
IT OVERALL EXCUTED INTO SINGLE THREAD (JS IS SINGLE THREADED)

FUNCTIONAL EXECUTION CONTEXT
EVAL EXECUTION CONTEXT (IT IS PROPERTY OF GLOBAL CONTEXT)


HOW JS CODE EXECUTES:-   (CODEFILE [{}])------> MEMORY CREATION PHASE (SPACE ALLOCATED TO VARIABLES AND FUNCTION) ----> EXECUTION PHASE
LETS CONSIDER A CODE FILE AND UNDERSTAND CODE EXECUTION PROCESS IN JS

CODE FILE :-
   let val1 = 10
   let val2 = 5
   function addNum(num1, num2){
        let total = num1 + num2
        return total
    }
    let result1 = addNum(val1, val2)
    let result2 = addNum(10, 2)

STEPS OF CODE FILE EXECUTION:-
1. GLOBAL EXECUTION <- THIS
2. MEMORY PHASE
    val1-> UNDEFINED
    val2-> UNDEFINED
    addNUM-> DEFINATION
    result1-> undefined
    result2-> undefined

4. EXECUTION PHASE:-
    val1<-10
    val2<-5
    addNum ---> new variable environment + execution thread (this process creation each time function execution)---> sand box
                                        |
                                        |
                                        |
                               MEMORY PHASE AGAIN
                               val1 -> undefined
                               val2 -> undefined 
                               total -> undefined
                                        |
                                        |
                                EXECUTION CONTEXT AGAIN
                                num1 -> 10
                                num2 -> 5
                                total -> 15 (This total value return to its parent global execution context which is defined in starting)
                                NOW after this whole process sandbox will be deleted 
                                (this whole process return from sandbox creation for result2)



*/

//Call stack