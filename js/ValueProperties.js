/** Class representing a string, array, object, function, or other primitive and its value, type, length, and value in string format for display on an HTML page. 
 * @author Kira Miller
 */
class ValueProperties {
	
	/** 
	 * Constructor which sets up this class and calculates a passed in variable's actual stored value, value as a string for HTML display, type, and length.
	 * @param {object} valueParameter The item to store its properties. 
	 */
	constructor(valueParameter) {

		this.storedValue = valueParameter;
		this.type = 'null'; // assume null for now 
		this.valueString = getHtmlFormattedValueBasedOnType(this.type, 'null'); 
		this.length = 0;

		if (valueParameter === null) {
			
			// leave defaults as is
			
		} else if (valueParameter === undefined) {
			
			this.type = 'undefined'; 
			this.valueString = getHtmlFormattedValueBasedOnType(this.type, 'undefined');
			
		} else if (typeof valueParameter === 'string') {
			
			this.type = 'string';
			
			if (valueParameter === '') {
				
				// Special handling for empty strings:
				this.valueString = getHtmlFormattedValueBasedOnType(this.type, 'empty string');
				
			} else if (valueParameter.trim() === '') {
				
				// Special handling for whitespace strings:
				this.valueString = getHtmlFormattedValueBasedOnType(this.type, 'string with ' + valueParameter.length + ' whitespaces');
				
			} else {
				
				this.valueString = getHtmlFormattedValueBasedOnType(this.type, String(valueParameter));
			
			}
			
		} else if (Array.isArray(valueParameter)) {
			
			// Special handling for arrays:
			this.storedValue = valueParameter.slice();
			this.type = 'array';
			this.length = valueParameter.length;
			
			if (this.length < 1){
				
				this.valueString = getHtmlFormattedValueBasedOnType(this.type, '[]');
				
			} else {
				
				this.valueString = '[';
				
				for (let i = 0; i < this.length; i++) {
					
					const subItemValue = new ValueProperties(valueParameter[i]);
					
					this.valueString += getHtmlFormattedValueBasedOnType(subItemValue.type, subItemValue.valueString);
					
					// If it is not the last item:
					if (i !== this.length - 1) {
						this.valueString += ",";
					}
				}
				
				this.valueString += ']';
				
			}
			
		} else if (typeof valueParameter === 'object') {
		
			// Handling for objects (excluding arrays and null) use JSON.stringify to give a better representation of its structure:
			this.type = typeof valueParameter;
			
			this.valueString = getHtmlFormattedValueBasedOnType(this.type, JSON.stringify(valueParameter, null, 2));
			
			this.storedValue = Object.keys(valueParameter).slice(0, 2).reduce((result, key) => {
                    result[key] = valueParameter[key];
                    return result;
                }, {});
			
		} else {
			
			// Handling for other types (numbers, booleans, functions, etc.):
			this.type = typeof valueParameter;
			this.valueString = getHtmlFormattedValueBasedOnType(this.type, String(valueParameter));
			this.length = valueParameter.length;
			
		}
		
	}

}
