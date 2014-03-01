		$(document).ready(function(){
			
			
			var random, lastrandom, lastsquare;
			var class1, class2, class3;
			var a,b,classMachine;
			var k = 0;
			var j = 1;
			var game = [
					['', '', ''],
					['', '', ''],
					['', '', '']
					];

		$('.square').click(function(){
			/*if(!$(this).hasClass(lastsquare)){
				
				if( $(this).hasClass('00') && game[0][0] == "" || 
					$(this).hasClass('01') && game[0][1] == "" || 
					$(this).hasClass('02') && game[0][2] == "" ||
					$(this).hasClass('10') && game[1][0] == "" || 
					$(this).hasClass('11') && game[1][1] == "" || 
					$(this).hasClass('12') && game[1][2] == "" ||
					$(this).hasClass('20') && game[2][0] == "" || 
					$(this).hasClass('21') && game[2][1] == "" || 
					$(this).hasClass('22') && game[2][2] == ""){ 
					
					
					if(lastrandom == "") {
						random = 'X';
						lastrandom = random;
					} else {
						if(lastrandom == 'X') {
							random = 'O';
							lastrandom = random;
						}else {
							random = 'X';
							lastrandom = random;
						}
					}

				}else{
					
					$(this).addClass('notempty');

				}
			}else{
					
					$(this).addClass('notempty');
				}*/
				
				
				if($(this).hasClass('00') && game[0][0] == ""){
					game[0][0] = 'x';
					$(this).html('x');
					lastsquare = '00';
				} 
				else if($(this).hasClass('01') && game[0][1] ==""){
					game[0][1] = 'x';
					$(this).html('x');
					lastsquare = '01';
				}
				else if($(this).hasClass('02') && game[0][2] ==""){
					game[0][2] = 'x';
					$(this).html('x');
					lastsquare = '02'; 
				} 	
				else if($(this).hasClass('10') && game[1][0] ==""){
					game[1][0] = 'x';
					$(this).html('x');
					lastsquare = '10'; 
				} 	
				else if($(this).hasClass('11') && game[1][1] ==""){
					game[1][1] = 'x';
					$(this).html('x');
					lastsquare = '11'; 
				}
				else if($(this).hasClass('12') && game[1][2] ==""){
					game[1][2] = 'x';
					$(this).html('x');
					lastsquare = '12'; 
				}

				else if($(this).hasClass('20') && game[2][0] ==""){
					game[2][0] = 'x';
					$(this).html('x');
					lastsquare = '20'; 
				} 	
				else if($(this).hasClass('21') && game[2][1] ==""){
					game[2][1] = 'x';
					$(this).html('x');
					lastsquare = '21'; 
				}
				else if($(this).hasClass('22') && game[2][2] ==""){
					game[2][2] = 'x';
					$(this).html('x');
					lastsquare = '22'; 
				}

				if(game[0][0] == "" || 
					   game[0][1] == "" || 
					   game[0][2] == "" ||
					   game[1][0] == "" || 
					   game[1][1] == "" || 
					   game[1][2] == "" ||
					   game[2][0] == "" || 
					   game[2][1] == "" || 
					   game[2][2] == ""){
				 	while(k == 0){
				 		 a = Math.floor(Math.random() * 3);
				 		 b = Math.floor(Math.random() * 3);
				 		 classMachine = '.' + a + '' + b;
				 		if(game[a][b] == "") {
				 			game[a][b] = 'O';
				 			$(classMachine).html('O');
				 			break;
				 		}
				 	}
			 	}

				
				for(var i = 0; i < 3; i++)
				{
					if(game[i][0] == game[i][1] && game[i][0] == game[i][2] && game[i][0] != "") {

						class1 = '.' + i + "" + 0;
						class2 = '.' + i + "" + 1;
						class3 = '.' + i + "" + 2;
						
						$(class1).addClass('green');
						$(class2).addClass('green');
						$(class3).addClass('green');

						alert('O jogador ' + game[i][0] + ' ganhou !');
						location.reload();
						break;
					}
				}

				
				for(var i = 0; i < 3; i++) 
				{
					if(game[0][i] == game[1][i] && game[0][i] == game[2][i] && game[0][i] != "") {

						class1 = '.' + 0 + "" + i;
						class2 = '.' + 1 + "" + i;
						class3 = '.' + 2 + "" + i;
						
						$(class1).addClass('green');
						$(class2).addClass('green');
						$(class3).addClass('green');

						alert('O jogador ' + game[0][i] + ' ganhou !');
						location.reload();
						break;
					}
				}

				
				if(game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] != "") {
						
					$('.00').addClass('green');
					$('.11').addClass('green');
					$('.22').addClass('green');

					alert('O jogador ' + game[0][0] + ' ganhou !');
					location.reload();
				}
				else if(game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] != "") {

					$('.02').addClass('green');
					$('.11').addClass('green');
					$('.20').addClass('green');

					alert('O jogador ' + game[0][2] + ' ganhou !');
					location.reload();
				}

				else if(game[0][0] != "" &&
				   game[0][1] != "" && 
				   game[0][2] != "" &&
				   game[1][0] != "" && 
				   game[1][1] != "" && 
				   game[1][2] != "" &&
				   game[2][0] != "" && 
				   game[2][1] != "" && 
				   game[2][2] != "" 
				   ){

				   	

				   		$('.00').addClass('red');
						$('.01').addClass('red');
						$('.02').addClass('red');
						$('.10').addClass('red');
						$('.11').addClass('red');
						$('.12').addClass('red');
						$('.20').addClass('red');
						$('.21').addClass('red');
						$('.22').addClass('red');
						alert('DEU VELHA!');
						location.reload();
						
			 	}
				

			});

			
			setInterval(function(){
				if(j > 15) {
					alert('GAME OVER!');
					location.reload(true);
				}
				$('.time').html('');
				$('.time').html(j);
				j++;
			},1000);
		});
