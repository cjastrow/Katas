//Here is the FIRST kata -----------------------------------------

var kata1 = [
	{amount: 3,  x:'odd'},
	{amount: 4,  x:'even'},
	{amount: 9,  x:'odd'},
	{amount: 15, x:'odd'},
	{amount: 16, x:'even'},
	{amount: 24, x:'even'}
];

var isEven = function(number) {
	return number.x === 'even';
};

var evens = kata1.filter(isEven);

$("#btn1").click(function(){
	for(i = 0; i < evens.length; i ++){
		$("#output1").append(" ( " + evens[i].amount + " ) ");
	}
	$("#btn1").animate({opacity:'0'},500);
	setTimeout(function(){
		$("#btn1").css('display','none');
	},500);
});

//Here is the SECOND kata -----------------------------------------

var kata2 = [
	{amount: 3},
	{amount: 5},
	{amount: 9},
	{amount: 15},
	{amount: 30},
	{amount: 43}
];

var isDivisibleBy3 = function(number) {
	return number.amount % 3 == 0;
};

var divisibleBy3 = kata2.filter(isDivisibleBy3);

var isDivisibleBy5 = function(number) {
	return number.amount % 5 == 0;
};

var divisibleBy5 = kata2.filter(isDivisibleBy5);

var isDivisibleBy3and5 = function(number) {
	return number.amount % 3 == 0 && number.amount % 5 == 0;
};

var divisibleBy3and5 = kata2.filter(isDivisibleBy3and5);

$("#btn2").click(function(){
	for(i = 0; i < divisibleBy3.length; i ++){
		$("#output2").append(' (' + divisibleBy3[i].amount + ':Fizz) ');
	}
	$("#output2").append('<br />');
	for(i = 0; i < divisibleBy5.length; i ++){
		$("#output2").append(' (' + divisibleBy5[i].amount + ':Buzz)');
	}
	$("#output2").append('<br />');
	for(i = 0; i < divisibleBy3and5.length; i ++){
		$("#output2").append(' (' + divisibleBy3and5[i].amount + ':Fizz-Buzz)');
	}
	$("#btn2").animate({opacity:'0'},500);
	setTimeout(function(){
		$("#btn2").css('display','none');
	},500);
});

//Here is the THIRD kata -----------------------------------------

var kata3 = [
	{s:"This is one sentence", c:4},
	{s:"Here is another", c:3},
	{s:"This is the last one", c:5}
];

var wordCount = kata3.map((x) => x.c);

$("#btn3").click(function(){
	$("#output3").append('(' + wordCount + ')');
	$("#btn3").animate({opacity:'0'},500);
	setTimeout(function(){
		$("#btn3").css('display','none');
	},500);
});

//Here is the FORTH kata -----------------------------------------

var kata4 = [
	{name:"Item 1"},
	{name:"Item 2"},
	{name:"Item 3"}
];

var k4Length = kata4.length - 1;

$("#btn4").click(function(){
	$("#output4").append('( ' + kata4[k4Length].name + ' )');
	$("#btn4").animate({opacity:'0'},500);
	setTimeout(function(){
		$("#btn4").css('display','none');
	},500);
});

//Here is the FIFTH kata -----------------------------------------

var kata5 = [
	{myString:"the quick brown fox jumps over the lazy dog"}
];

var k5sort = kata5[0].myString.split('').sort().join('');

$("#btn5").click(function(){
	$("#output5").append('( ' + k5sort + ' )');
	$("#btn5").animate({opacity:'0'},500);
	setTimeout(function(){
		$("#btn5").css('display','none');
	},500);
});


//Here is the SIXTH kata -----------------------------------------

var kata6 = [
	{name:"paul"},{name:"ashley"},{name:"antonio"},{name:"jason"},{name:"chris"}
];

$("#btn6").click(function(){
	for(i = 0; i < kata6.length; i++){
		$("#output6").append('( ' + kata6[i].name.charAt(0).toUpperCase() + kata6[i].name.slice(1) + ' )');
	}

	$("#btn6").animate({opacity:'0'},500);
	setTimeout(function(){
		$("#btn6").css('display','none');
	},500);
});

