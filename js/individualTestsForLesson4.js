/**
 * Tests Lesson 4 - Question 1. Returns the results in an HTML formatted string.
 * @author Kira Miller
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q1() {
	
	const newTest = new SingleQuestionTestCollection(1, "Question 1: Testing the array <b>names</b> and function <b>printNames:</b>", "Also check code to make sure they used <b>forEach</b> in the function.");
	
	// First check names:
	newTest.verifyArrayExistsAndIsNotEmpty(names, "names");
	
	const question1TotalNumberOfItemsInArray = names.length;
	for (let i = 0; i < question1TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item names[" + i + "] is a non empty string:"));
		newTest.addToLog(verifyAndReturnResults(names[i], TestExpectations.shouldExist, [TestExpectations.shouldBeAString, TestExpectations.shouldNotBeNull, TestExpectations.shouldNotBeEmpty]));
	
	}

	newTest.addToLog(getTitleMessage("Test whether there are at least 2 names in the array:"));
	newTest.addToLog(compareAndReturnResults(true, question1TotalNumberOfItemsInArray > 1));

	// Now check the function printNames:
	
	newTest.addToLog(getTitleMessage("Verify function <b>printNames</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(printNames, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	console.log("===Begin Testing Lesson 4 Question 1===");
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a typical case: [\"Joe\",\"Jane\",\"Yuri\",\"Hank\"]:",
		printNames, 
		[["Joe","Jane","Yuri","Hank"]], 
		undefined // this function doesn't return anything. Check console log for the input names.
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out the passed in names."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single case: [\"Jake\"]:",
		printNames, 
		[["Jake"]], 
		undefined 
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out Jake."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty string case: [\"\"]:",
		printNames, 
		[[""]], 
		undefined 
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out an empty line."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 whitespace case: [\" \"]:",
		printNames, 
		[[" "]], 
		undefined
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out an empty line with 1 whitespace."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 3 whitespaces case: [\" &nbsp; \"]:",
		printNames, 
		[["   "]], 
		undefined
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out an empty line with 3 whitespaces."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty case: []:",
		printNames, 
		[[]], 
		undefined 
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it did not print anything."));
		
	return newTest.endTestingAndGetReport();
	
}
	
/**
 * Tests Lesson 4 - Question 2. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q2() {
	
	const newTest = new SingleQuestionTestCollection(2, "Question 2: Testing the function <b>logTreeType</b> and array <b>trees:</b>", "Check console logs to make sure it printed out the passed in types. Also check code to make sure they used <b>forEach</b> in the function.");
	
	// First check trees:
	newTest.verifyArrayExistsAndIsNotEmpty(trees, "trees");
	
	const question2TotalNumberOfItemsInArray = trees.length;
		
	newTest.addToLog(getTitleMessage("Verify the array trees has 3 items:"));
	newTest.addToLog(compareAndReturnResults(true, question2TotalNumberOfItemsInArray === 3));
	
	for (let i = 0; i < question2TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify trees[" + i + "] is a non null object:"));
		newTest.addToLog(verifyAndReturnResults(trees[i], TestExpectations.shouldExist, [TestExpectations.shouldBeAnObject, TestExpectations.shouldNotBeNull]));
		
		newTest.addToLog(getTitleMessage("Verify trees[" + i + "] contains the string property <b>type:</b>"));
		newTest.addToLog(verifyAndReturnResults(trees[i].type, TestExpectations.shouldExist, [TestExpectations.shouldBeAString, TestExpectations.shouldNotBeNull, TestExpectations.shouldNotBeEmpty]));
		
		newTest.addToLog(getTitleMessage("Verify trees[" + i + "] contains the string property <b>height:</b>"));
		newTest.addToLog(verifyAndReturnResults(trees[i].height, TestExpectations.shouldExist, [TestExpectations.shouldBeAString, TestExpectations.shouldNotBeNull, TestExpectations.shouldNotBeEmpty]));
		
	}

	// Now check the function logTreeType:
	
	newTest.addToLog(getTitleMessage("Verify function <b>logTreeType</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(logTreeType, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	console.log("===Begin Testing Lesson 4 Question 2===");
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a typical case where there are 3 entries in the library:",
		logTreeType, 
		[[
			{
				type: 'Willow',
				height: '35m'
			}, {
				type: 'Spruce',
				height: '120m'
			}, {
				type: 'Locust',
				height: '100m'
			}
		]], 
		undefined // Function doesn't return anything.
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out the three types."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a typical case where there are 4 entries, some with same types, in the library:",
		logTreeType, 
		[[
			{
				type: 'Apple',
				height: '35m'
			}, {
				type: 'Birch',
				height: '120m'
			}, {
				type: 'Pear',
				height: '100m'
			}, {
				type: 'Pear',
				height: '110m'
			}
		]], 
		undefined
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out the four types."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single case:",
		logTreeType, 
		[[
			{
				type: 'Pine',
				height: '35m'
			}
		]], 
		undefined 
	);
	newTest.addToLog(getReminderMessage("Check console logs to make sure it printed out Pine."));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a empty case:",
		logTreeType, 
		[[]], 
		undefined 
	);
	newTest.addToLog(getReminderMessage("Check console logs to not print anything."));
		
	return newTest.endTestingAndGetReport();
	
}
	
/**
 * Tests Lesson 4 - Question 3. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q3() {
	
	const newTest = new SingleQuestionTestCollection(3, "Question 3: Testing the array <b>myNumbers</b> and function <b>totalPoints</b>:", "Check code to make sure they used <b>forEach</b> in the function.");
	
	// First check myNumbers:
	newTest.verifyArrayExistsAndIsNotEmpty(myNumbers, "myNumbers");
	
	const question3TotalNumberOfItemsInArray = myNumbers.length;
	for (let i = 0; i < question3TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item myNumbers[" + i + "] is a number:"));
		newTest.addToLog(verifyAndReturnResults(myNumbers[i], TestExpectations.shouldExist, [TestExpectations.shouldBeANumber]));
		
	}

	// Now check the function totalPoints:
	
	newTest.addToLog(getTitleMessage("Verify function <b>totalPoints</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(totalPoints, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		totalPoints, 
		[[1,2,3,0,-20,300,0.54]], 
		286.54
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single number case:",
		totalPoints, 
		[[5]], 
		5
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty array case:",
		totalPoints, 
		[[]], 
		0
	);
		
	return newTest.endTestingAndGetReport();	
	
}

/**
 * Tests Lesson 4 - Question 4. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q4() {
	
	const newTest = new SingleQuestionTestCollection(4, "Question 4: Testing the array <b>myWords</b> and function <b>buildSentence</b>:", "Check code to make sure they used <b>forEach</b> in the function.");
	
	// First check myWords:
	newTest.verifyArrayExistsAndIsNotEmpty(myWords, "myWords");
	
	const question4TotalNumberOfItemsInArray = myWords.length;
	for (let i = 0; i < question4TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item myWords[" + i + "] is a non empty string:"));
		newTest.addToLog(verifyAndReturnResults(myWords[i], TestExpectations.shouldExist, [TestExpectations.shouldBeAString, TestExpectations.shouldNotBeNull, TestExpectations.shouldNotBeEmpty]));
		
	}

	// Now check the function buildSentence:
	
	newTest.addToLog(getTitleMessage("Verify function <b>buildSentence</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(buildSentence, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		buildSentence, 
		[["Hi,","I'm","feeling","super","!"]], 
		"Hi, I'm feeling super ! "
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single string:",
		buildSentence, 
		[["Hi"]], 
		"Hi "
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty string:",
		buildSentence, 
		[[""]], 
		" "
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a 1 whitespace case:",
		buildSentence, 
		[[" "]], 
		"  "
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 3 whitespaces case:",
		buildSentence, 
		[["   "]], 
		"    "
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array case:",
		buildSentence, 
		[[]], 
		""
	);
		
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 5. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q5() {
	
	const newTest = new SingleQuestionTestCollection(5, "Question 5: Testing the array <b>decimals</b> and function <b>logPercentages</b>:", "Check code to make sure they used <b>forEach</b> in the function.");
	
	// First check decimals:
	newTest.verifyArrayExistsAndIsNotEmpty(decimals, "decimals");
	
	const question5TotalNumberOfItemsInArray = decimals.length;
	for (let i = 0; i < question5TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item decimals[" + i + "] is a number with decimal:"));
		newTest.addToLog(verifyAndReturnResults(decimals[i], TestExpectations.shouldExist, [TestExpectations.shouldBeANumber, TestExpectations.shouldBeAFloat]));
		
	}

	// Now check the function logPercentages:
	
	newTest.addToLog(getTitleMessage("Verify function <b>logPercentages</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(logPercentages, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	console.log("===Begin Testing Lesson 4 Question 5===");
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		logPercentages, 
		[[0.5, 0.67, 1.23, 0, .40, -3, -33, 15]], 
		undefined // this one is not expected to return anything.
	);
	newTest.addToLog(getReminderMessage("Check log to make sure the percentages were printed on each line. Expected console log:<br/>50%<br/>67%<br/>123%<br/>0%<br/>40%<br/>-300%<br/>-3300%<br/>1500%"));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single inputs:",
		logPercentages, 
		[[0.24]], 
		undefined
	);
	newTest.addToLog(getReminderMessage("Check log to make sure the percentages were printed on each line. Expected console log:<br/>24%"));
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty inputs:",
		logPercentages, 
		[[]], 
		undefined 
	);
	newTest.addToLog(getReminderMessage("Check log to make sure nothing was printed in the console log for this test."));
		
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 6. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q6() {
	
	const newTest = new SingleQuestionTestCollection(6, "Question 6: Testing the array <b>startingNums</b> and function <b>addThreeToAll:</b>", "Check code to make sure they used <b>map</b> in the function.");
	
	// First check startingNums:
	newTest.verifyArrayExistsAndIsNotEmpty(startingNums, "startingNums");
	
	const question6TotalNumberOfItemsInArray = startingNums.length;
	for (let i = 0; i < question6TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item startingNums[" + i + "] is a number:"));
		newTest.addToLog(verifyAndReturnResults(startingNums[i], TestExpectations.shouldExist, [TestExpectations.shouldBeANumber]));
	}

	// Now check the function addThreeToAll:
	
	newTest.addToLog(getTitleMessage("Verify function <b>addThreeToAll</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(addThreeToAll, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		addThreeToAll, 
		[[0.5, 0.67, 1.23,  .40, -3, -33, 15]], 
		[ 3.5, 3.67, 4.23, 3.40, 0, -30, 18] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single input:",
		addThreeToAll, 
		[[4]], 
		[7] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty input:",
		addThreeToAll, 
		[[]], 
		[] 
	);
	
	return newTest.endTestingAndGetReport();
	
}
	
/**
 * Tests Lesson 4 - Question 7. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q7() {
	
	const newTest = new SingleQuestionTestCollection(7, "Question 7: Testing the array <b>baseNums</b> and function <b>squareAll:</b>", "Check code to make sure they used <b>map</b> in the function.");
	
	// First check baseNums:
	newTest.verifyArrayExistsAndIsNotEmpty(baseNums, "baseNums");
	
	const question7TotalNumberOfItemsInArray = baseNums.length;
	for (let i = 0; i < question7TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item baseNums[" + i + "] is a number:"));
		newTest.addToLog(verifyAndReturnResults(baseNums[i], TestExpectations.shouldExist, [TestExpectations.shouldBeANumber]));
	}

	// Now check the function squareAll:
	
	newTest.addToLog(getTitleMessage("Verify function <b>squareAll</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(squareAll, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		squareAll, 
		[[0,4,41,832,72,89,1,-2]], 
		[0, 16, 1681, 692224, 5184, 7921, 1, 4] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single input:",
		squareAll, 
		[[4]], 
		[16] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty input:",
		squareAll, 
		[[]], 
		[] 
	);
	
	return newTest.endTestingAndGetReport();
	
}
	
/**
 * Tests Lesson 4 - Question 8. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q8() {
	
	const newTest = new SingleQuestionTestCollection(8, "Question 8: Testing the function <b>allGreetings:</b>", "");
	
	newTest.addToLog(getTitleMessage("Verify function <b>allGreetings</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(allGreetings, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		allGreetings, 
		[["Abbot", "Barkley Bob", "Claire"]], 
		["Hello, Abbot, nice to meet you!", "Hello, Barkley Bob, nice to meet you!", "Hello, Claire, nice to meet you!"] // expected returned result
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single input:",
		allGreetings, 
		[["Charles"]], 
		["Hello, Charles, nice to meet you!"] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty input:",
		allGreetings, 
		[[]], 
		[] 
	);
		
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 9. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q9() {
	
	const newTest = new SingleQuestionTestCollection(9, "Question 9: Testing the array <b>users</b> and function <b>getUsernames:</b>", "Check code to make sure they used <b>map</b> in the function.");
	
	// First check users:
	newTest.verifyArrayExistsAndIsNotEmpty(users, "users");
	
	const question9TotalNumberOfItemsInArray = users.length;
	for (let i = 0; i < question9TotalNumberOfItemsInArray; i++) {
		
		newTest.addToLog(getTitleMessage("Verify array item users[" + i + "] is an object:"));
		newTest.addToLog(verifyAndReturnResults(users[i], TestExpectations.shouldExist, [TestExpectations.shouldBeAnObject, TestExpectations.shouldNotBeNull]));
		
		newTest.addToLog(getTitleMessage("Verify users[" + i + "] has property <b>username</b>:"));
		newTest.addToLog(compareAndReturnResults(true, users[i].hasOwnProperty("username")));
		
		newTest.addToLog(getTitleMessage("Verify users[" + i + "].username is a string:"));
		newTest.addToLog(compareAndReturnResults("string", (typeof users[i].username)));
		
		newTest.addToLog(getTitleMessage("Verify users[" + i + "] has property <b>isAdmin</b>:"));
		newTest.addToLog(compareAndReturnResults(true, users[i].hasOwnProperty("isAdmin")));
		
		newTest.addToLog(getTitleMessage("Verify users[" + i + "].isAdmin is a boolean:"));
		newTest.addToLog(compareAndReturnResults("boolean", (typeof users[i].isAdmin)));
	}

	// Now check the function getUsernames:
	
	newTest.addToLog(getTitleMessage("Verify function <b>getUsernames</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(getUsernames, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		getUsernames, 
		[[ // The parameter for testing:
			{
			  "username": "yuri.k",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "john.b",
			  "isAdmin": true
			},
			{
			  "username": "hugo.smith",
			  "isAdmin": false
			},
			{
			  "username": "someOtherGuy",
			  "isAdmin": true
			}
		]], 
		["yuri.k", "sasha.mar", "john.b", "hugo.smith", "someOtherGuy"] // Expected returned result from the function 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing only non-admin inputs:",
		getUsernames, 
		[[
			{
			  "username": "y",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "Im_just-a-Dude",
			  "isAdmin": false
			}
		]], 
		["y", "sasha.mar", "Im_just-a-Dude"] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing only admin inputs:",
		getUsernames, 
		[[
			{
			  "username": "t",
			  "isAdmin": true,
			},
			{
			  "username": "This_IS_the_admin",
			  "isAdmin": true
			}
		]], 
		["t", "This_IS_the_admin"] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing a single input:",
		getUsernames, 
		[[
			{
			  "username": "t",
			  "isAdmin": true,
			}
		]], 
		["t"] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no username input:",
		getUsernames, 
		[[
			{
			  "someName": "Todd",
			  "isAdmin": true,
			}
		]], 
		[undefined] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing an empty input:",
		getUsernames, 
		[[]], 
		[] 
	);
	
	return newTest.endTestingAndGetReport();
}
	
/**
 * Tests Lesson 4 - Question 10. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q10() {
	
	const newTest = new SingleQuestionTestCollection(10, "Question 10: Testing the function <b>pluck:</b>", "Check code to make sure they used <b>map</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>pluck</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(pluck, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		pluck, 
		[[ 
			{
			  "username": "yuri.k",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "john.b",
			  "isAdmin": true
			},
			{
			  "username": "hugo.smith",
			  "isAdmin": false
			},
			{
			  "username": "someOtherGuy",
			  "isAdmin": true
			}
		], 'isAdmin'], 
		[false, false, true, false, true] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing only non-admin inputs:",
		pluck, 
		[[ 
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": false
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		], 'isAdmin'], 
		[false, false, false]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing username pluck:",
		pluck, 
		[[ 
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": true
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		], 'username'], 
		["yuasdf", "sasasdfawefmar", "hugeeesmith"]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no known key pluck:",
		pluck, 
		[[ 
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": true
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		], 'thisKeyIsNotPresent'], 
		[undefined, undefined, undefined]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all admin cases:",
		pluck, 
		[[ 
			{
			  "username": "uuuuuuu",
			  "isAdmin": true,
			},
			{
			  "username": "xxxxxxxx",
			  "isAdmin": true
			}
		], 'isAdmin'], 
		[true, true] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing one admin case:",
		pluck, 
		[[ 
			{
			  "username": "xxxxxxxx",
			  "isAdmin": true
			}
		], 'isAdmin'], 
		[true] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing one non-admin case:",
		pluck, 
		[[ 
			{
			  "username": "xxxxxxxx",
			  "isAdmin": false
			}
		], 'isAdmin'], 
		[false] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty case:",
		pluck, 
		[[], 'isAdmin'], 
		[]
	);
	
	return newTest.endTestingAndGetReport();
	
}
	
/**
 * Tests Lesson 4 - Question 11. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q11() {
	
	const newTest = new SingleQuestionTestCollection(11, "Question 11: Testing the function <b>evenNumbers:</b>", "Check code to make sure they used <b>filter</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>evenNumbers</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(evenNumbers, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs including odd, even, 0, positive, and negative:",
		evenNumbers, 
		[[0, 4, 3, 33, 55, 58, 10034, 9, -103, -14]], 
		[0, 4, 58, 10034, -14] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all even inputs:",
		evenNumbers, 
		[[2, 4, 6, 8, 10]], 
		[2, 4, 6, 8, 10]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all odd inputs:",
		evenNumbers, 
		[[1, 3, 5, 7, 9]], 
		[]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 even input:",
		evenNumbers, 
		[[58]], 
		[58] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 odd input:",
		evenNumbers, 
		[[5]], 
		[] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty input array:",
		evenNumbers, 
		[[]], 
		[] 
	);
	
	return newTest.endTestingAndGetReport();
	
}
	
/**
 * Tests Lesson 4 - Question 12. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q12() {
	
	const newTest = new SingleQuestionTestCollection(12, "Question 12: Testing the function <b>greaterThan100:</b>", "Check code to make sure they used <b>filter</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>greaterThan100</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(greaterThan100, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs including 100, smaller, greater, 0, positive, and negative:",
		greaterThan100, 
		[[0, 4, 100, 3, 33, 55, 58, 10034, 9, -103, 320, 800]], 
		[10034, 320, 800] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all inputs > 100:",
		greaterThan100, 
		[[200, 400, 60000]], 
		[200, 400, 60000]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all inputs < 100:",
		greaterThan100, 
		[[1, 3, 5, 7, 9]], 
		[]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 input > 100:",
		greaterThan100, 
		[[120]], 
		[120] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 input < 100:",
		greaterThan100, 
		[[5]], 
		[] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array:",
		greaterThan100, 
		[[]], 
		[] 
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 13. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q13() {
	
	const newTest = new SingleQuestionTestCollection(13, "Question 13: Testing the function <b>nonAdminUsers:</b>", "Check code to make sure they used <b>filter</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>nonAdminUsers</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(nonAdminUsers, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		nonAdminUsers, 
		[[ 
			{
			  "username": "yuri.k",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "john.b",
			  "isAdmin": true
			},
			{
			  "username": "hugo.smith",
			  "isAdmin": false
			},
			{
			  "username": "someOtherGuy",
			  "isAdmin": true
			}
		]], 
		[ 
			{
			  "username": "yuri.k",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "hugo.smith",
			  "isAdmin": false
			}
		]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no admin case:",
		nonAdminUsers, 
		[[ 
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": false
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		]], 
		[ 
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": false
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all admin case:",
		nonAdminUsers, 
		[[
			{
			  "username": "uuuuuuu",
			  "isAdmin": true,
			},
			{
			  "username": "xxxxxxxx",
			  "isAdmin": true
			}
		]], 
		[] 
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array case:",
		nonAdminUsers, 
		[[]], 
		[]
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 14. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q14() {
	
	const newTest = new SingleQuestionTestCollection(14, "Question 14: Testing the function <b>countAdminUsers:</b>", "Check code to make sure they used <b>filter</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>countAdminUsers</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(countAdminUsers, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		countAdminUsers, 
		[[ 
			{
			  "username": "yuri.k",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "john.b",
			  "isAdmin": true
			},
			{
			  "username": "hugo.smith",
			  "isAdmin": false
			},
			{
			  "username": "someOtherGuy",
			  "isAdmin": true
			}
		]], 
		2
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no admin case:",
		countAdminUsers, 
		[[
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": false
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		]], 
		0
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing all admin case:",
		countAdminUsers, 
		[[ 
			{
			  "username": "uuuuuuu",
			  "isAdmin": true,
			},
			{
			  "username": "xxxxxxxx",
			  "isAdmin": true
			}
		]], 
		2
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 admin case:",
		countAdminUsers, 
		[[ 
			{
			  "username": "uuuuuuu",
			  "isAdmin": true,
			}
		]], 
		1
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array:",
		countAdminUsers, 
		[[]], 
		0
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 15. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q15() {
	
	const newTest = new SingleQuestionTestCollection(15, "Question 15: Testing the function <b>shorterThanX:</b>", "Check code to make sure they used <b>filter</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>shorterThanX</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(shorterThanX, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		shorterThanX, 
		[["Four score and seven years ago", "our forefathers brought forth on this continent a new nation", "concieved in liberty", "and dedicated to the proposition that all men are created equal", "Now we are engaged in a great civil war", "testing whether that nation", "or any so conceived and so dedicated", "can long endure."], 30], 
		[ 'concieved in liberty', 'testing whether that nation', 'can long endure.' ]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no valid option case:",
		shorterThanX, 
		[["watermelon","mango","apple","orange"], 3], 
		[]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing length = 0 case:",
		shorterThanX, 
		[["watermelon","mango","apple","orange"], 0], 
		[]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing length = -1 case:",
		shorterThanX, 
		[["watermelon","mango","apple","orange"], -1], 
		[]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty string case:",
		shorterThanX, 
		[[""], 1], 
		[""]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array case:",
		shorterThanX, 
		[[],0], 
		[]
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 16. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q16() {
	
	const newTest = new SingleQuestionTestCollection(16, "Question 16: Testing the function <b>onlyStrings:</b>", "Check code to make sure they used <b>filter</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>onlyStrings</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(onlyStrings, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		onlyStrings, 
		[[ 1, "2", "hi", 4.56, true, null, undefined, { "unknown": "yay" }, [ "joy" ]]], 
		[ "2", "hi" ]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no strings case:",
		onlyStrings, 
		[[ 1, 4.56, true, null, undefined, { "unknown": "yay" }, [ "joy" ]]], 
		[]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 string case:",
		onlyStrings, 
		[[ "watermelon" ]], 
		[ "watermelon" ]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty string case:",
		onlyStrings, 
		[[""]], 
		[""]
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array case:",
		onlyStrings, 
		[[]], 
		[]
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 17. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q17() {
	
	const newTest = new SingleQuestionTestCollection(17, "Question 17: Testing the function <b>firstOdd:</b>", "Check code to make sure they used <b>find</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>firstOdd</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(firstOdd, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		firstOdd, 
		[[4,41,832,72,89,120,431,505,-70,0,-33]], 
		41
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no odd inputs:",
		firstOdd, 
		[[ 4, 8, 10]], 
		undefined
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 odd input:",
		firstOdd, 
		[[ 3 ]], 
		3
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array case:",
		firstOdd, 
		[[]], 
		undefined
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 18. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q18() {
	
	const newTest = new SingleQuestionTestCollection(18, "Question 18: Testing the function <b>getAdministrator:</b>", "Check code to make sure they used <b>find</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>getAdministrator</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(getAdministrator, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		getAdministrator, 
		[[ 
			{
			  "username": "yuri.k",
			  "isAdmin": false,
			},
			{
			  "username": "sasha.mar",
			  "isAdmin": false
			},
			{
			  "username": "john.b",
			  "isAdmin": true
			},
			{
			  "username": "hugo.smith",
			  "isAdmin": false
			},
			{
			  "username": "someOtherGuy",
			  "isAdmin": true
			}
		]], 
		{
			"username": "john.b",
			"isAdmin": true,
		}
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no admin inputs:",
		getAdministrator, 
		[[ 
			{
			  "username": "yuasdf",
			  "isAdmin": false,
			},
			{
			  "username": "sasasdfawefmar",
			  "isAdmin": false
			},
			{
			  "username": "hugeeesmith",
			  "isAdmin": false
			}
		]], 
		undefined
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 admin input:",
		getAdministrator, 
		[[ 
			{
			  "username": "uuuuuuu",
			  "isAdmin": true,
			}
		]], 
		{
			"username": "uuuuuuu",
			"isAdmin": true,
		}
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array inputs:",
		getAdministrator, 
		[[]], 
		undefined
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 19. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q19() {
	
	const newTest = new SingleQuestionTestCollection(19, "Question 19: Testing the function <b>divisibleByTen:</b>", "Check code to make sure they used <b>find</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>divisibleByTen</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(divisibleByTen, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		divisibleByTen, 
		[[4,-10,41,832,72,89,120,431,505,-70,0,-33]], 
		-10
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no divisible by 10 inputs:",
		divisibleByTen, 
		[[ 4, 8, 11, -3 ]], 
		undefined
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 valid input:",
		divisibleByTen, 
		[[ 100 ]], 
		100
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing 1 invalid input:",
		divisibleByTen, 
		[[ 4 ]], 
		undefined
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array:",
		divisibleByTen, 
		[[]], 
		undefined
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 20. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q20() {
	
	const newTest = new SingleQuestionTestCollection(20, "Question 20: Testing the function <b>divisibleByX:</b>", "Check code to make sure they used <b>find</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>divisibleByX</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(divisibleByX, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		divisibleByX, 
		[[ 10053, -4, -10, 0, -33 ], 2], 
		-4
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no divisible by x case:",
		divisibleByX, 
		[[ 4, 11, -34 ], 3], 
		undefined
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing only one option case:",
		divisibleByX, 
		[[ 6 ], 6], 
		6
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array:",
		divisibleByX, 
		[[]], 
		undefined
	);
	
	return newTest.endTestingAndGetReport();
	
}

/**
 * Tests Lesson 4 - Question 21. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4Q21() {
	
	const newTest = new SingleQuestionTestCollection(21, "Question 21: Testing the function <b>startsWithLetter:</b>", "Check code to make sure they used <b>find</b> in the function.");
	
	newTest.addToLog(getTitleMessage("Verify function <b>startsWithLetter</b> exists:"));
	newTest.addToLog(verifyAndReturnResults(startsWithLetter, TestExpectations.shouldExist, [TestExpectations.shouldBeAFunction, TestExpectations.shouldNotBeNull]));
	
	newTest.testFunctionBehaviorWithParameterCheck(
		"Testing a variety of inputs:",
		startsWithLetter, 
		[["Just Dance", "The fox was too lazy", "Everything is awesome", "Party like it's 999"], "T"], 
		"The fox was too lazy"
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing no option case:",
		startsWithLetter, 
		[["That fox can dance", "Everything is awesome", "Party like it's 999"], "Z"], 
		undefined
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing only one option case:",
		startsWithLetter, 
		[["Party like it's 999"], "P"], 
		"Party like it's 999"
	);
	
	newTest.testFunctionBehaviorWithoutParameterCheck(
		"Testing empty array:",
		startsWithLetter, 
		[[]], 
		undefined
	);
	
	return newTest.endTestingAndGetReport();

}

/**
 * Does all the testing for Lesson 4. Returns the results in an HTML formatted string.
 * @returns {string} The string containing HTML formatted test results.
 */
function testLesson4() {
	
	let testOutput = "<h1>Basic Tests of Lesson 4</h1>";
	testOutput += getReminderMessage("Make sure to check student's code for accuracy.");

	try {
		
		testOutput += testLesson4Q1();
		testOutput += testLesson4Q2();
		testOutput += testLesson4Q3();
		testOutput += testLesson4Q4();
		testOutput += testLesson4Q5();
		testOutput += testLesson4Q6();
		testOutput += testLesson4Q7();
		testOutput += testLesson4Q8();
		testOutput += testLesson4Q9();
		testOutput += testLesson4Q10();
		testOutput += testLesson4Q11();
		testOutput += testLesson4Q12();
		testOutput += testLesson4Q13();
		testOutput += testLesson4Q14();
		testOutput += testLesson4Q15();
		testOutput += testLesson4Q16();
		testOutput += testLesson4Q17();
		testOutput += testLesson4Q18();
		testOutput += testLesson4Q19();
		testOutput += testLesson4Q20();
		testOutput += testLesson4Q21();
	
	} catch(exceptionThatHappened) {
		
		testOutput += getFailMessage("Exception thrown: <b>" + exceptionThatHappened + "</b>");
		console.error(exceptionThatHappened);
		
	}
	
	return testOutput;
	
}

// Start testing:
document.getElementById("testLesson4").innerHTML = testLesson4();
