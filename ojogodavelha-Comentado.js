		$(document).ready(function(){
			
			//declarando as variaveis
			var random, lastrandom, lastsquare;
			var class1, class2, class3;
			var game = [
					['', '', ''],
					['', '', ''],
					['', '', '']
					];

			$('.square').click(function(){
				//quando um square é clicado entra aqui
				

				/*
				verifica se é diferente do ultimo clicado pois,
				existe um random que gera X ou 0 a acada click, se o jogador clicar no mesmo ele nao gera o proximo random. sempre será um x e um 0.
				*/
			if(!$(this).hasClass(lastsquare)){
				/*caso seja diferente o square clicado ele verifica qual a classe do mesmo clicado e se o mesmo está vazio, para nao gerar o random errado. mesma logica acima.*/
				if( $(this).hasClass('00') && game[0][0] == "" || 
					$(this).hasClass('01') && game[0][1] == "" || 
					$(this).hasClass('02') && game[0][2] == "" ||
					$(this).hasClass('10') && game[1][0] == "" || 
					$(this).hasClass('11') && game[1][1] == "" || 
					$(this).hasClass('12') && game[1][2] == "" ||
					$(this).hasClass('20') && game[2][0] == "" || 
					$(this).hasClass('21') && game[2][1] == "" || 
					$(this).hasClass('22') && game[2][2] == ""){ 
					
					/*se tudo estiver correto,  gera o random ou X ou 0.*/
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
					//add a classe  de erro caso o square esteja preenchido
					$(this).addClass('notempty');

				}
			}else{
					//add a classe  de erro caso o square seja o mesmo do //ultimo clique.
					$(this).addClass('notempty');
				}
				
				/*verifica a classe do square clicado e se o mesmo está vazio, caso o mesmo esteja vazio gravo no array ou X ou 0 , escrevo na tela o caracter para visualização dos usuarios e gravo a classe do ultimo square clicado.*/
				if($(this).hasClass('00') && game[0][0] == ""){
					game[0][0] = random;
					$(this).html(random);
					lastsquare = '00';
				} 
				else if($(this).hasClass('01') && game[0][1] ==""){
					game[0][1] = random;
					$(this).html(random);
					lastsquare = '01';
				}
				else if($(this).hasClass('02') && game[0][2] ==""){
					game[0][2] = random;
					$(this).html(random);
					lastsquare = '02'; 
				} 	
				else if($(this).hasClass('10') && game[1][0] ==""){
					game[1][0] = random;
					$(this).html(random);
					lastsquare = '10'; 
				} 	
				else if($(this).hasClass('11') && game[1][1] ==""){
					game[1][1] = random;
					$(this).html(random);
					lastsquare = '11'; 
				}
				else if($(this).hasClass('12') && game[1][2] ==""){
					game[1][2] = random;
					$(this).html(random);
					lastsquare = '12'; 
				}

				else if($(this).hasClass('20') && game[2][0] ==""){
					game[2][0] = random;
					$(this).html(random);
					lastsquare = '20'; 
				} 	
				else if($(this).hasClass('21') && game[2][1] ==""){
					game[2][1] = random;
					$(this).html(random);
					lastsquare = '21'; 
				}
				else if($(this).hasClass('22') && game[2][2] ==""){
					game[2][2] = random;
					$(this).html(random);
					lastsquare = '22'; 
				}

				/*Verifico se as linhas são iguais para determinar o vencedor*/	
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
						location.reload(true);
						break;
					}
				}

				/*verifico se as colunas sao iguas para determinar o vencedor*/
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
						location.reload(true);
						break;
					}
				}

				/*verifico se as diagonais são iguais para determinar o vencedor*/
				if(game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] != "") {
						
					$('.00').addClass('green');
					$('.11').addClass('green');
					$('.22').addClass('green');

					alert('O jogador ' + game[0][0] + ' ganhou !');
					location.reload(true);
				}
				else if(game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] != "") {

					$('.02').addClass('green');
					$('.11').addClass('green');
					$('.20').addClass('green');

					alert('O jogador ' + game[0][2] + ' ganhou !');
					location.reload(true);
				}
			 
			});

			/*O jogador tem um limite de 15 segundos, caso seja excedido o jogo da game over.*/
			var j = 1;
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
