//>>excludeStart("exclude", pragmas.exclude);
define([ "shoestring" ], function(){
//>>excludeEnd("exclude");

	shoestring.fn.is = function( sel ){
		var ret = false;
		this.each(function( i ){
			if( shoestring.inArray( this, shoestring( sel ) )  > -1 ){
				ret = true;
			}
		});
		return ret;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");