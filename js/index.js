/**
 * This returns a fail notice in a standard HTML format for a consistent look.
 * @author Kira Miller
 * @param {string} failMessage The specific message details. 
 * @returns {string} The HTML formatted failure notice.
 */
function getFailMessage(failMessage) {
	
	return ("<span class='fail'>FAIL: " + failMessage + "</span>");
	
}

/**
 * This returns a pass notice in a standard HTML format for a consistent look.
 * @param {string} passMessage The specific message details. This can be an empty string if no details.
 * @returns {string} The HTML formatted pass notice.
 */
function getPassMessage(passMessage) {
	
	return ("<span class='pass'>Pass" + ((passMessage === "") ? "" : (": " + passMessage)) + "</span>");
	
}

/**
 * This returns a reminder in a standard HTML format for a consistent look.
 * @param {string} reminderMessage The specific message details. 
 * @returns {string} The HTML formatted reminder.
 */
function getReminderMessage(reminderMessage) {
	
	return ("<span class='doubleCheck'>" + reminderMessage + "</span>");
	
}

/**
 * This returns a header in a standard HTML format for a consistent look.
 * @param {string} headerMessage The specific message details. 
 * @returns {string} The HTML formatted header.
 */
function getTitleMessage(headerMessage) {
	
	return ("<span class='testTitle'>" + headerMessage + "</span>");
	
}

/**
 * This returns a test label in a standard HTML format for a consistent look.
 * @param {string} labelMessage The specific message details. 
 * @returns {string} The HTML formatted label.
 */
function getSubtitleMessage(labelMessage) {
	
	return ("<span class='testSubtitle'>" + labelMessage + "</span>");
	
}

/**
 * Toggles hiding / showing the question test details. This is called when the user clicks on the question test title.
 * @param {string} idOfQuestion The id of the element to hide or show.
 */
function hideShowQuestionTestDetails(idOfQuestion) {

	let detailsContainer = document.getElementById("DetailsOfQuestion" + idOfQuestion);
	
	if (detailsContainer.style.display === "none") {
		
		detailsContainer.style.display = "block";
		
	} else {
		
		detailsContainer.style.display = "none";
		
	}
	
} 

/**
 * An enum which holds different option labels for testing.
 */
const TestExpectations = Object.freeze({
	
	// Existance:
	shouldExist: Symbol("shouldExist"),
	okIfExistOrNot: Symbol("okIfExistOrNot"),
	// Types:
	shouldBeABoolean: Symbol("shouldBeABoolean"),
	shouldBeAString: Symbol("shouldBeAString"),
	shouldBeANumber: Symbol("shouldBeANumber"),
	shouldBeABigInt: Symbol("shouldBeABigInt"),
	shouldBeAFunction: Symbol("shouldBeAFunction"),
	shouldBeAnArray: Symbol("shouldBeAnArray"),
	shouldBeAnObject: Symbol("shouldBeAnObject"),
	// Values:
	shouldBeNull: Symbol("shouldBeNull"),
	shouldNotBeNull: Symbol("shouldNotBeNull"),
	shouldBeEmpty: Symbol("shouldBeEmpty"),
	shouldNotBeEmpty: Symbol("shouldNotBeEmpty"),
	shouldBeTrue: Symbol("shouldBeTrue"),
	shouldBeFalse: Symbol("shouldBeFalse"),
	shouldBeNaNNotANumber: Symbol("shouldBeNaNNotANumber"),
	shouldBeAFloat: Symbol("shouldBeAFloat"),
	shouldBeOver16Digits: Symbol("shouldBeOver16Digits"),
	shouldBeAnInteger: Symbol("shouldBeAnInteger"),
	shouldBeNegative: Symbol("shouldBeNegative"),
	
});

/**
 * Verifies the object exists plus additional testing based on passed in testConfigurations. Then it returns the results in an HTML formatted string.
 * @param {object} objectToTest The item to test. It could be a primitive type, function, object, or array.
 * @param {TestExpectations} shouldObjectExist Indicates whether the item must exist to pass the test.
 * @param {array} testConfigurations An array of TestExpectations which specify other tests to perform on the object.
 * @returns {string} The string containing HTML formatted test results.
 */
function verifyAndReturnResults(objectToTest, shouldObjectExist, testConfigurations) {
	
	let testOutput = "";
	let objectExists = false;
	
	// Test if it exists (and compare if it must exist or ok not to)
	testOutput += getSubtitleMessage("Does it exist?");
	objectExists = (objectToTest === 'undefined') ? false : true;

	if (shouldObjectExist === TestExpectations.shouldExist) {

		if (objectExists) {

			testOutput += getPassMessage("");

		} else {

			testOutput += getFailMessage("it doesn't exist when it should.");

		}

	} else if (shouldObjectExist === TestExpectations.okIfExistOrNot) {

		if (objectExists) {

			testOutput += getPassMessage("Yes, it exists.");

		} else {

			testOutput += getPassMessage("Student didn't do this one.");

		}

	}
	
	// Only do the next tests if the object to test exists:
	if (objectExists) {

		for (let i = 0; i < testConfigurations.length; i++) {

			switch (testConfigurations[i]) {
					
				case TestExpectations.shouldBeABoolean:
					testOutput += getSubtitleMessage("Is it a boolean?");
					if (typeof objectToTest === "boolean") {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not a boolean when it should have been.");
					}
					break;

				case TestExpectations.shouldBeAString:
					testOutput += getSubtitleMessage("Is it a string?");
					if (typeof objectToTest === "string") {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not a string when it should have been.");
					}
					break;

				case TestExpectations.shouldBeANumber:
					testOutput += getSubtitleMessage("Is it a number?");
					if (typeof objectToTest === "number") {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not a number type when it should have been.");
					}
					break;
					
				case TestExpectations.shouldBeABigInt:
					testOutput += getSubtitleMessage("Is it a big int?");
					if (typeof objectToTest === "bigint") {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not a bigint type when it should have been.");
					}
					break;
					
				case TestExpectations.shouldBeAFunction:
					testOutput += getSubtitleMessage("Is it a function?");
					if (typeof objectToTest === "function") {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not a function type when it should have been.");
					}
					break;
					
				case TestExpectations.shouldBeAnArray:
					testOutput += getSubtitleMessage("Is it an array?");
					if (Array.isArray(objectToTest)) {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not an array type when it should have been.");
					}
					break;
					
				case TestExpectations.shouldBeAnObject:
					testOutput += getSubtitleMessage("Is it an object?");
					if (typeof objectToTest === 'object' && !(Array.isArray(objectToTest))) {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not an object type when it should have been.");
					}
					break;
									
				case TestExpectations.shouldBeNull:
					testOutput += getSubtitleMessage("Is it null?");
					if (objectToTest === "null") {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("it is not null when it should have been.");
					}
					break;
					
				case TestExpectations.shouldNotBeNull:
					testOutput += getSubtitleMessage("Is its value not equal to null?");
					if (objectToTest === "null") {
						testOutput += getFailMessage("it is null when it should not have been.");
					} else {
						testOutput += getPassMessage("");
					}
					break;
					
				case TestExpectations.shouldBeEmpty:
					testOutput += getSubtitleMessage("Is it empty?");
					if (typeof objectToTest === "string") {
						if (objectToTest.length === 0) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the string is not empty when it should have been.");
						}
					} else if (Array.isArray(objectToTest)) {
						if (objectToTest.length === 0) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the array is not empty when it should have been.");
						}
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + ". Cannot check to see if it is empty.");
					} 
					break;
					
				case TestExpectations.shouldNotBeEmpty:
					testOutput += getSubtitleMessage("Is it not empty?");
					if (typeof objectToTest === "string") {
						if (objectToTest.length > 0) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the string is empty when it should not have been.");
						}
					}  else if (Array.isArray(objectToTest)) {
						if (objectToTest.length > 0) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the array is empty when it should not have been.");
						}
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + ". Cannot check to see if it is empty or not.");
					}
					break;
					
				case TestExpectations.shouldBeTrue:
					testOutput += getSubtitleMessage("Is it equal to true?");
					if (objectToTest === true) {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + " and is not equal to true.");
					}
					break;
					
				case TestExpectations.shouldBeFalse:
					testOutput += getSubtitleMessage("Is it equal to false?");
					if (objectToTest === false) {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + " and is not equal to false.");
					}
					break;
					
				case TestExpectations.shouldBeNaNNotANumber:
					testOutput += getSubtitleMessage("Is it a number with value NaN?");
					if (typeof objectToTest === "number") {
						if (Number.isNaN(objectToTest)) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the number does not have a NaN value when it should have.");
						}
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + ". Cannot check to see if it has a NaN value or not.");
					}
					break;
					
				case TestExpectations.shouldBeAFloat:
					testOutput += getSubtitleMessage("Is it a floating point type number?");
					if (typeof objectToTest === "number") {
						if (!Number.isInteger(objectToTest)) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the number is an integer when it should not have been.");
						}
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + ". Cannot check to see if it is a floating type number or not.");
					}
					break;
					
				case TestExpectations.shouldBeOver16Digits:
					testOutput += getSubtitleMessage("Is it more than 16 digits long?");
					if ((objectToTest.toString().length >= 16 && objectToTest > 0) || (objectToTest.toString().length >= 17 && objectToTest < 0)) {
						testOutput += getPassMessage("");
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + " and is less than 16 digits long.");
					}
					break;
					
				case TestExpectations.shouldBeAnInteger:
					testOutput += getSubtitleMessage("Is it an integer type of number?");
					if (typeof objectToTest === "number") {
						if (Number.isInteger(objectToTest)) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the number is not an integer when it should have been.");
						}
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + ". Cannot check to see if it is an integer number or not.");
					}
					break;
					
				case TestExpectations.shouldBeNegative:					
					testOutput += getSubtitleMessage("Is the number negative?");					
					if (typeof objectToTest === "number") {						
						if (objectToTest < 0) {
							testOutput += getPassMessage("");
						} else {
							testOutput += getFailMessage("the number is either 0 or a positive number when it should not have been.");
						}
					} else {
						testOutput += getFailMessage("test item is a " + (typeof objectToTest) + ". Cannot check to see if it is a negative number or not.");
					}
					break;
					
				default:					
					console.log("ERROR: Unknown test configuration.");
					throw new Error("Unknown test configuration.");
					break;
					
			}
			
		}
		
	}
	
	return testOutput;
};

/**
 * This returns an HTML formatted string of the value to display on the page. Depending on the type of the value, a style class is assigned to the value's container to give it a distinct look from the other types of values. 
 * @param {string} type The specific type of this value. 
 * @param {string} value The string representation of the value for display on a webpage. 
 * @returns {string} The HTML formatted value.
 */
function getHtmlFormattedValueBasedOnType(type, value) {

	switch(type) {

		case 'null':
			return "<span class='nullTypeOfText'>" + value + "</span>";

		case 'undefined':
			return "<span class='undefinedTypeOfText'>" + value + "</span>";

		case 'boolean':
			return "<span class='booleanTypeOfText'>" + value + "</span>";

		case 'string':
			return "<span class='stringTypeOfText'>" + value + "</span>";

		case 'number':
			return "<span class='numberTypeOfText'>" + value + "</span>";

		case 'array':
			return "<span class='arrayTypeOfText'>" + value + "</span>";

		case 'object':
			return "<span class='objectTypeOfText'>" + value + "</span>";

		case 'function':
			return "<span class='functionTypeOfText'>" + value + "</span>";

		case 'bigInt':
			return "<span class='bigIntTypeOfText'>" + value + "</span>";

		case 'symbol':
			return "<span class='symbolTypeOfText'>" + value + "</span>";

		default:
			// don't format if unknown
			return value;
			
	}

}

/**
 * Compares the expected results with the actual results and returns a report in an HTML formatted string.
 * @param {object} expected The expected results to compare with the actual results. This could be a primitive type, object, or array.
 * @param {object} actual The actual results to compare with the expected results. This could be a primitive type, object, or array.
 * @returns {string} The string containing the HTML formatted report on the results comparison.
 */
function compareAndReturnResults(expected, actual) {
	
	let logToReturn = "";
	let expectedResults = new ValueProperties(expected);
	let actualResults = new ValueProperties(actual);
	
	logToReturn += getSubtitleMessage("Actual Results: Type: <span class='codeQuote'>" + actualResults.type + "</span> Value: <span class='codeQuote'>" + actualResults.valueString + "</span>");
	
	logToReturn += getSubtitleMessage("Expected Results: Type: <span class='codeQuote'>" + expectedResults.type + "</span> Value: <span class='codeQuote'>" + expectedResults.valueString + "</span>");
	
	// For debugging:
	/*
			console.log("____________________");
			console.log(expected);
			console.log(actual);
			console.log(actualResults.type);
			console.log(actualResults.valueString);
			console.log(actualResults.storedValue);
			console.log(expectedResults.type);
			console.log(expectedResults.valueString);
			console.log(expectedResults.storedValue);
	*/
	
	 // A helper, inner function to compare arrays or objects deeply:
    function deepCompareOfArraysOrObjects(a, b) {
		
        if (Array.isArray(a) && Array.isArray(b)) {
			
            if (a.length !== b.length) {
				
				return false;
				
			}

            for (let i = 0; i < a.length; i++) {
				
                if (!deepCompareOfArraysOrObjects(a[i], b[i])) {
					
					return false;
					
				}
				
            }
			
            return true;
			
        }

        if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
			
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);

            if (keysA.length !== keysB.length) {
				
				return false;
				
			}
			
            for (let key of keysA) {
				
                if (!keysB.includes(key) || !deepCompareOfArraysOrObjects(a[key], b[key])) {
					
					return false;
					
				}
				
            }
			
            return true;
        }

        // It gets here if it is neither an array or object. Then, do a simple comparison:
        return a === b;
		
    }
	
    if (expectedResults.type === actualResults.type) {
		
		if (expectedResults.type === 'null' || 
			actualResults.type === 'null' || 
			expectedResults.type === 'undefined' || 
			actualResults.type === 'undefined') {
			
            if (expectedResults.storedValue === actualResults.storedValue) {
				
            	logToReturn += getPassMessage("");
				
            } else {
				
				logToReturn += getFailMessage("Actual result is different than expected.");
				
            }
			
		} else if (expectedResults.type === 'array') {
			
			if (expectedResults.length !== actualResults.length) {
				
				logToReturn += getFailMessage("Actual array's length (" + actualResults.length + ") is different than expected (" + expectedResults.length + ").");
				
			} else {
				
				let hasDifferedAtSomePoint = false;
				
				for (let i = 0; i < expectedResults.length; i++) {
					
					if (!deepCompareOfArraysOrObjects(expectedResults.storedValue[i], actualResults.storedValue[i])) {
						
						hasDifferedAtSomePoint = true;
						
					}
					
				}
				
				if (hasDifferedAtSomePoint) {
					
					logToReturn += getFailMessage("Actual result is different than expected.");
					
				} else {
					
            		logToReturn += getPassMessage("");
					
				}
				
			}
			
        } else if (expectedResults.type === 'object') {
			
			if (deepCompareOfArraysOrObjects(expectedResults.storedValue, actualResults.storedValue)) {
				
				logToReturn += getPassMessage("");
				
            } else {
				
				logToReturn += getFailMessage("Actual result is different than expected.");
				
            }
			
        } else if (expectedResults.type === 'function') {
			
            // Function comparison (based on function reference)
            if (expectedResults.storedValue.toString() === actualResults.storedValue.toString()) {
				
            	logToReturn += getPassMessage("Both functions have identical code.");
				
            } else {
				
				logToReturn += getFailMessage("Actual function is different than expected.");
				
            }
			
        } else {
			
            // Primitive type comparison (string, number, boolean, etc.)
            if (expectedResults.storedValue === actualResults.storedValue) {
				
            	logToReturn += getPassMessage("");
				
            } else {
				
				logToReturn += getFailMessage("Actual primitive is different than expected.");
				
            }
			
        }
		
    } else {
		
		logToReturn += getFailMessage("Type of results differ from expected.");
		
    }
	
	return logToReturn;
	
}
