export const validateNumber = (e) => {
    const { value: inputValue } = e.target;
    
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      return inputValue;
    }
}