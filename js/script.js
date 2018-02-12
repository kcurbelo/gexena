$(document).ready(function() {

	// Shows mobile navigation
	$( "#mobile-icon" ).click(function() {
		$( "#mobile-icon" ).hide( );
		$( "#mobile-exit-cont" ).show( );
		$( "nav" ).show( "slow" );
	});
	// Hides mobile navigation
	$( "#mobile-exit-icon" ).click(function() {
		$( "#mobile-icon" ).show( );
		$( "#mobile-exit-cont" ).hide( );
		$( "nav" ).hide( "slow" );
	});	

});