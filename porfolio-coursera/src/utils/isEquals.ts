/**
 * Utility functions for comparing values
 */

/**
 * Compares two values of any type
 * @throws {Error} If either value is a function
 * @param {T} a The first value to compare
 * @param {T} b The second value to compare
 * @returns {boolean} Whether the two values are equal
 */
export function isEquals<T>(a: T, b: T): boolean {
  if (isFunction(a) || isFunction(b)) {
    throw new Error("You can't compare functions");
  }

  if (a instanceof Object || b instanceof Object) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return a === b;
}

/**
 * Checks if a value is a function
 * @param {T} fn The value to check
 * @returns {boolean} Whether the value is a function
 */
export function isFunction(fn: unknown): boolean {
  return typeof fn === "function";
}
