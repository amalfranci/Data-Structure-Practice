const obj = {
    
    _value: 43,
    get value() {
        console.log('getting value')
     return this._value   
    }
}

console.log(obj.value)