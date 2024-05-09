function merge<T extends object , U extends object> (objA: T, objB: U): object {
    return Object.assign(objA, objB);
  }
  merge({name: 'Max'}, {age: 30})