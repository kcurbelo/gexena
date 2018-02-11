$(document).ready(function() {


	$( "#mobile-icon" ).click(function() {
		$( "#mobile-icon" ).hide( );
		$( "#mobile-exit-cont" ).show( );
		$( "nav" ).show( "slow" );
	});
	$( "#mobile-exit-icon" ).click(function() {
		$( "#mobile-icon" ).show( );
		$( "#mobile-exit-cont" ).hide( );
		$( "nav" ).hide( "slow" );
	});	


});