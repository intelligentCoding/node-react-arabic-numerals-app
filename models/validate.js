const HttpError = require('./http-error');
const validate = (req, res, next) => {
    const { value, type } = req.params;

    //check if the type is valid
    const validType = ['arabic', 'roman'];
    if(!validType.includes(type)) {
        throw new HttpError('Invalid type.', 400);
    }
    let error = '';
  
    if(type === 'arabic') {
        validateRomanNumeral(value);
    }
    
    if(type === 'roman') {
        validateArabicNumeral(value);
    }
    next();
}

const validateRomanNumeral = (value) => {
    const romanArray = ["I", "IV", "V", "IX", "X","XL","L","XC","C","CD","D","CM","M"];
    if(!romanArray.includes(value) || Number(value)) {
        throw new HttpError('Invalid Roman Numeral entered', 400);
    }
}

const validateArabicNumeral = (value) => {
    if(value > 4999 || value < 0 || isNaN(value)) {
        throw new HttpError('Invalid Arabic Numeral entered', 400);
    }
}


module.exports = validate;
