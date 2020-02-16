"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const flatten = (arr, depth = 1) => {
  if (depth === 0) {
    return arr;
  }

  const result = arr.reduce((acc, item) => {
    if (item instanceof Array) {
      return [...acc, ...flatten(item, depth - 1)];
    }

    return [...acc, item];
  }, []);
  return result;
};

var _default = flatten;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFELEVBQU0sS0FBSyxHQUFHLENBQWQsS0FBb0I7QUFDbEMsTUFBSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLFdBQU8sR0FBUDtBQUNEOztBQUNELFFBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBQyxHQUFELEVBQU0sSUFBTixLQUFlO0FBQ3ZDLFFBQUksSUFBSSxZQUFZLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU8sQ0FBQyxHQUFHLEdBQUosRUFBUyxHQUFHLE9BQU8sQ0FBQyxJQUFELEVBQU8sS0FBSyxHQUFHLENBQWYsQ0FBbkIsQ0FBUDtBQUNEOztBQUNELFdBQU8sQ0FBQyxHQUFHLEdBQUosRUFBUyxJQUFULENBQVA7QUFDRCxHQUxjLEVBS1osRUFMWSxDQUFmO0FBTUEsU0FBTyxNQUFQO0FBQ0QsQ0FYRDs7ZUFhZSxPIiwiZmlsZSI6ImluZGV4LWNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmxhdHRlbiA9IChhcnIsIGRlcHRoID0gMSkgPT4ge1xyXG4gIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcbiAgY29uc3QgcmVzdWx0ID0gYXJyLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiBbLi4uYWNjLCAuLi5mbGF0dGVuKGl0ZW0sIGRlcHRoIC0gMSldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW1dO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbjtcclxuXHJcbiJdfQ==