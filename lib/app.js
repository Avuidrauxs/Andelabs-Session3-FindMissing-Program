
module.exports = {
		findMissing :function (a,b){
					  if(a.length === b.length) return 0;
					  
					  if(a.length < b.length) return b.diff(a)[0];
					  
					  return a.diff(b)[0];
					}

};

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};