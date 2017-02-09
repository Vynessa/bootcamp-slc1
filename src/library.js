module.exports = {
	fizzBuzz: function (num){
		if (num % 3 === 0 && num % 5 === 0){
			return "FizzBuzz";
		}

		else if (num % 3 === 0){
			return "Fizz";
		}

		else if (num % 5 === 0){
			return "Buzz";
		}

		else {
			return num;
		}

	},

	findMinMax: function (arr){
	   var max = arr[0];
	   var min = arr[0];
	   
	   for (var i = 0; i < arr.length; i++)
	   {
	      if (arr[i] > max)
	      {
	        max = arr[i];
	      }
	       
	      if (arr[i] < min)
	      {
	        min = arr[i];
	      }
	    }
	   
	   if (min === max)
	   {
	     return [max];
	   }
	   else
	   {
	     return [min, max];
	   }
	},

	aritGeo: function () {
	  var isArit = true;
	  var isGeo = true;
	  
	  var diff = arr[1] - arr[0];
	  var ratio = arr[1]/arr[0];  

	  if (arr.length === 0)
	  {
	    return 0;
	  }
	  
	  for (var i = 1; i <= arr.length; i++)
	  {
	    if (arr[i] - arr[i-1] !== diff)
	    {
	      isArit = false;
	    }
	    
	    if (isArit)
	    {
	      return "Arithmetic";
	    }
	      
	    if (arr[i]/arr[i-1] !== ratio)
	    {
	      isGeo = false;
	    }
	      
	    if (isGeo)
	    {
	      return "Geometric";
	    }
	    
	    return -1;
	  }
	}
	
};

