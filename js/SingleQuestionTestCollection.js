/** Class representing a collection of test data (stored in a log) and test functions for a single question. Once the end-testing method is called, the testing is closed.
 * @author Kira Miller
 */
class SingleQuestionTestCollection {
	
	/** 
	 * Constructor which sets up this class and starts formatting outputLog.
	 * @param {number} idOfQuestion The number identifying the question to test. 
	 * @param {string} titleOfQuestionTest The title of this group of tests. It will be formatted into a clickable title, colored to indicate failure or success. 
	 * @param {string} reminderMessage The optional message containing tasks to remind the reviewer to do. 
	 */
	constructor(idOfQuestion, titleOfQuestionTest, reminderMessage) {
		
		this.idOfQuestion = idOfQuestion;
		this.titleOfQuestionTest = titleOfQuestionTest;
		this.reminderMessage = reminderMessage;
		this.outputLog = "<div id='DetailsOfQuestion" + this.idOfQuestion + "' class='questionTestResultsContainer' style='display:none;'>";
		this.hasTestWrappedUp = false;
		
	}
	
	/** 
	 * Checks if the test had already ended and throws an error if so. This is used in the functions of this class to avoid odd formatting and results.
	 * @throws {Exception} The error message if this test has already wrapped up.
	 */
	checkIfTestWasAlreadyEnded() {
		
		if (this.hasTestWrappedUp) {
			
			throw new Error("This round of tests has already been wrapped up. Cannot call any new tests on it.");
			
		}
		
	}
	
	/** 
	 * Allows a custom log message to be added to the log, as long as this test collection hasn't been wrapped up.
	 * @param {string} logMessage The string to add to the log. 
	 */
	addToLog(logMessage) {

		this.checkIfTestWasAlreadyEnded();
		
		this.outputLog += logMessage;
		
	}
	
	/** 
	 * Tests to make sure the passed in array exists and is not empty. Stores the results in outputLog.
	 * @param {array} arrayToTest The array to test. 
	 * @param {string} arrayVariableName The variable name of the array, for logging purposes. 
	 */
	verifyArrayExistsAndIsNotEmpty(arrayToTest, arrayVariableName) {

		this.checkIfTestWasAlreadyEnded();
		
		try {

			this.outputLog += "<span class='testTitle'>Verify the array named <b>" + arrayVariableName + "</b> exists and is not empty:</span>";

			this.outputLog += verifyAndReturnResults(arrayToTest, TestExpectations.shouldExist, [TestExpectations.shouldBeAnArray, TestExpectations.shouldNotBeNull, TestExpectations.shouldNotBeEmpty]);

		} catch(exceptionThatHappened) {

			this.outputLog += getFailMessage("Exception thrown: <b>" + exceptionThatHappened + "</b>");
			console.error(exceptionThatHappened);
			
		}
		
	}

	/** 
	 * Tests to make sure the passed in function exists. Stores the results in outputLog.
	 REMOVED THIS AS IT WAS CAUSING ISSUES WITH FUNCTIONS WITHIN OBJECTS.
	 * @param {function} functionToTest The function to test. 
	 * @param {string} functionVariableName The variable name of the function, for logging purposes. 
	 */
	/*
	verifyFunctionExists(functionToTest, functionVariableName) {

		this.checkIfTestWasAlreadyEnded();

		try {

			this.outputLog += "<span class='testTitle'>Verify the function <b>" + functionVariableName + "</b> exists:</span>";

			this.outputLog += verifyAndReturnResults(functionToTest, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]);

		} catch(exceptionThatHappened) {

			this.outputLog += getFailMessage("Exception thrown: <b>" + exceptionThatHappened + "</b>");
			console.error(exceptionThatHappened);
			
		}
		
	}*/

	/** 
	 * A shortcut for the testFunctionBehavior.
	 * @param {function} functionToTest The function to test. 
	 * @param {Array} arrayOfParametersForFunctionTest The array of parameters to test in the function call. 
	 * @param {object} expectedOutput The output to compare the test results with. 
	 */
	/*testFunctionBehaviorWithParameterCheck(functionToTest, arrayOfParametersForFunctionTest, expectedOutput) {
		
		this.testFunctionBehavior(true, functionToTest, arrayOfParametersForFunctionTest, expectedOutput, "Verify the function returns the appropriate value:");
		
	}*/
	
	/** 
	 * A shortcut for the testFunctionBehavior.
	 * @param {string} customHeaderMessage A custom header message for this test's log.
	 * @param {function} functionToTest The function to test. 
	 * @param {Array} arrayOfParametersForFunctionTest The array of parameters to test in the function call. 
	 * @param {object} expectedOutput The output to compare the test results with. 
	 */
	testFunctionBehaviorWithParameterCheck(customHeaderMessage, functionToTest, arrayOfParametersForFunctionTest, expectedOutput) {
		
		this.testFunctionBehavior(true, functionToTest, arrayOfParametersForFunctionTest, expectedOutput, customHeaderMessage);
		
	}
	
	/** 
	 * A shortcut for the testFunctionBehavior.
	 * @param {function} functionToTest The function to test. 
	 * @param {Array} arrayOfParametersForFunctionTest The array of parameters to test in the function call. 
	 * @param {object} expectedOutput The output to compare the test results with. 
	 */
	/*testFunctionBehaviorWithoutParameterCheck(functionToTest, arrayOfParametersForFunctionTest, expectedOutput) {
		
		this.testFunctionBehavior(false, functionToTest, arrayOfParametersForFunctionTest, expectedOutput, "Verify the function returns the appropriate value:");
		
	}
	*/
	/** 
	 * A shortcut for the testFunctionBehavior.
	 * @param {string} customHeaderMessage A custom header message for this test's log. 
	 * @param {function} functionToTest The function to test. 
	 * @param {Array} arrayOfParametersForFunctionTest The array of parameters to test in the function call. 
	 * @param {object} expectedOutput The output to compare the test results with. 
	 */
	testFunctionBehaviorWithoutParameterCheck(customHeaderMessage, functionToTest, arrayOfParametersForFunctionTest, expectedOutput) {
		
		this.testFunctionBehavior(false, functionToTest, arrayOfParametersForFunctionTest, expectedOutput, customHeaderMessage);
		
	}
	
	/** 
	 * This accepts a function and tests it's behavior with the passed in parameters and compares it against the passed in expected output, recording the output into outputLog.
	 * @param {boolean} shouldVerifyParameterIntegrity Indicates whether do verify parameters remain unchanged after going through the function or to ignore. 
	 * @param {function} functionToTest The function to test. 
	 * @param {array} arrayOfParametersForFunctionTest The array of parameters to test in the function call. 
	 * @param {object} expectedOutput The output to compare the test results with. 
	 * @param {string} customHeaderMessage A custom header message for this test's log.
	 */
	testFunctionBehavior(shouldVerifyParameterIntegrity, functionToTest, arrayOfParametersForFunctionTest, expectedOutput, customHeaderMessage) {

		this.checkIfTestWasAlreadyEnded();

		try {

			this.outputLog += "<span class='testTitle'>" + customHeaderMessage + "</span>";

			const numberOfParameters = arrayOfParametersForFunctionTest.length;
			const copyOfArrayOfParametersForFunctionTest = arrayOfParametersForFunctionTest.slice(); // make a copy for checking if original was modified
			let actualOutput = undefined;
			let inputParameterString = "";

			// Acquire actual output:
			switch (numberOfParameters) {
					
				case 0:
					actualOutput = functionToTest();
					inputParameterString = functionToTest.name + "();";
					break;
					
				case 1:
					actualOutput = functionToTest(arrayOfParametersForFunctionTest[0]);
				
					inputParameterString = functionToTest.name + "(" + ((new ValueProperties(arrayOfParametersForFunctionTest[0])).valueString) + ");";
					
					break;
					
				case 2:
					actualOutput = functionToTest(arrayOfParametersForFunctionTest[0], arrayOfParametersForFunctionTest[1]);
					
					inputParameterString = functionToTest.name + "(" + ((new ValueProperties(arrayOfParametersForFunctionTest[0])).valueString) + ", " + ((new ValueProperties(arrayOfParametersForFunctionTest[1])).valueString) + ");";
					
					break;
					
				case 3:
					actualOutput = functionToTest(arrayOfParametersForFunctionTest[0], arrayOfParametersForFunctionTest[1], arrayOfParametersForFunctionTest[2]);
					
					inputParameterString = functionToTest.name + "(" + ((new ValueProperties(arrayOfParametersForFunctionTest[0])).valueString) + ", " + ((new ValueProperties(arrayOfParametersForFunctionTest[1])).valueString) + ", " + ((new ValueProperties(arrayOfParametersForFunctionTest[2])).valueString) + ");";
					
					break;
					
				default:
					this.outputLog += getFailMessage("This many parameters is not supported by this testing system.");
					return;
					
			}
			
			// Log input
			this.outputLog += getSubtitleMessage("Input: <span class='codeQuote'>" + inputParameterString + "</span>");

			// Compare results:
			this.outputLog += compareAndReturnResults(expectedOutput, actualOutput);

			// If there are parameters, and it's marked to verify the parameters were not changed:
			if (numberOfParameters > 0 && shouldVerifyParameterIntegrity) {

				this.outputLog += "<span class='testTitle'>Verify the function <b>" + functionToTest.name + "</b> didn't change the items in its parameters:</span>";

				this.outputLog += compareAndReturnResults(copyOfArrayOfParametersForFunctionTest, arrayOfParametersForFunctionTest);
			}
			
		} catch(exceptionThatHappened) {

			this.outputLog += getFailMessage("Exception thrown: <b>" + exceptionThatHappened + "</b>");
			console.error(exceptionThatHappened);
			
		}
		
	}

	/** 
	 * Wraps up formatting the results, then returns the HTML formatted report. Once this is called, no more tests on this instantiated object can be done.
	 * @returns {string} The string containing the HTML formatted report on the test results.
	 */
	endTestingAndGetReport() {

		this.checkIfTestWasAlreadyEnded();

		// Add the reminder if it exists:
		if (this.reminderMessage !== "") {
			this.outputLog += getReminderMessage(this.reminderMessage);
		}

		// Close the container:
		this.outputLog += "</div>";

		// Format the header and color it based on any failures from the test results:
		let formattedTitle = "<span onclick='hideShowQuestionTestDetails(" + this.idOfQuestion + ")' class='questionTestResultsTitle ";

		if (this.outputLog.includes("class='fail")) {
			formattedTitle += "failColor";
		} else {
			formattedTitle += "passColor";
		}

		formattedTitle += "'>" + this.titleOfQuestionTest + "</span>";

		// Add header to beginning of output log:
		this.outputLog = formattedTitle + this.outputLog;

		this.hasTestWrappedUp = true;

		return this.outputLog;
		
	}
	
}