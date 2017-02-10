var findMinMax = require('../src/library.js').findMinMax;

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [9, 100] for [10, 88, 100, 9]', function () {
        expect(findMinMax([10, 88, 100, 9])).toEqual([9, 100]);
      });

      it('should return [44, 500] for [190, 500, 60, 87, 44]', function () {
        expect(findMinMax([190, 500, 60, 87, 44])).toEqual([44, 500]);
      });

      it('should return [0, 7] for [5, 0, 7, 6]', function () {
        expect(findMinMax([5, 0, 7, 6])).toEqual([0, 7]);
      });

      it('should return [23, 1000] for [88, 99, 67, 97, 23, 45, 778, 1000]', function () {
        expect(findMinMax([88, 99, 67, 97, 23, 45, 778, 1000])).toEqual([23, 1000]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [100] for [100, 100, 100]', function () {
        expect(findMinMax([100, 100, 100])).toEqual([100]);
      });

      it('should return [66] for [66, 66, 66, 66, 66, 66]', function () {
        expect(findMinMax([66, 66, 66, 66, 66, 66])).toEqual([66]);
      });

      it('should return [1] for [1, 1, 1, 1, 1, 1, 1, 1]', function () {
        expect(findMinMax([1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
      });

      it('should return [25] for [25, 25, 25, 25, 25, 25]', function () {
        expect(findMinMax([25, 25, 25, 25, 25, 25])).toEqual([25]);
      });

    });

  });

})();