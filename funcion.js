function merge2arrays(arreglo1, arreglo2){

	arreglo1.sort(function(a, b){return a - b});
	

	arreglo2.sort(function(a, b){return a - b}); 
	

	const all = [...arreglo1, ...arreglo2];

	all.sort(function(a, b){return a - b}); 

	 

	const result = all.reduce((acc,item)=>{
    		if(!acc.includes(item)){
      		acc.push(item);
    	}
    	return acc;
  	},[])

  console.log(result);
}
console.log("Resultado");
merge2arrays([1,2,3],[3,4,5]);
merge2arrays([-10,22,333,42],[-11,5,22,41,42,333]);
