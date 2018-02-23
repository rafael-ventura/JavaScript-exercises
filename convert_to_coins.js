// function which convert a value ("amount") into coins ( choosed by you );
function convert_to_coins(amount) {
	var coins = [25 ,10 ,5 ,1 ];
	var index = 0;
	while ( amount > 0 ) {
		while ( amount < coins[ index ] {
			index++;
		}
		amount = amount - coins[ index ] ;
		console.log(coins[index]);
	}
}
