function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getMatrix(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr[i] = [];
    for (var j = 0; j < size; j++) {
      arr[i].push(rand(0, 100));
    }
  }
  return arr;
}

var matrix = getMatrix(10);
console.table(matrix);

var endArr = [],
	endArr2 = [],
	endArr3 = [];

var endSize = 10;
var S = 0;



//!!!Ломаю голову над тем, как сделать только с 1 циклом 1-ну из задач.!!!//



//Идем по периметру против часовой стрелки
for(i = 0; i < endSize; i++){
	endArr[endArr.length] = matrix[i][S];
	if(i === endSize - 1){
		for(i = 1; i < endSize; i++){
			endArr[endArr.length] = matrix[endSize-1][i];
		}
		for(i = (endSize-2) ; i >= 0; i--){
			endArr[endArr.length] = matrix[i][endSize-1];
		}
		for(i = (endSize-2); i > 0; i-- ){
			endArr[endArr.length] = matrix[S][i];
		}
		break;
	}
}
var count = -1;
console.log('Против часовой стрелки: ' + endArr);
for(i = 0; i < endSize; i++){
	endArr[endArr.length] = matrix[i][S];

}



//Обходим двумерный массив по диагонали по часовой стрелки с левого 
//верхнего угла.
for(i = 0; i < endSize; i++){
	endArr2[endArr2.length] = matrix[S][i];
	if(i == endSize - 1){
		for(i = 1 ; i < endSize; i++){
			endArr2[endArr2.length] = matrix[i][endSize - 1];
		}
		for(i-=2; i > 0; i--){
			endArr2[endArr2.length] = matrix[i][i];
		}
		break;
	}
}
console.log('Диагональ по часовой: ' + endArr2);


//Последнее задание
for(i = 0; i < endSize; i++){
	endArr3[endArr3.length] = matrix[i][endSize-1];
}
for(i = endSize - 2; i >= 0; i--){
	endArr3[endArr3.length] = matrix[endSize-1][i];
}
var q = 0;
for(i = endSize - 1; i > 0; i--){
	endArr3[endArr3.length] = matrix[q][i];
	q++;
}
console.log('Последнее: ' + endArr3);


//Второй вариант
//Вот, то что я хотел!
var testArr = [],
	testArr2 = [],
	testArr3 = [],
	testArr4 = [];

var a = 0, c = endSize-1;

for(var i = 0; i < endSize; i++){
	testArr[testArr.length] = matrix[i][a];
	testArr2[testArr2.length] = matrix[endSize-1][i];
	testArr3[testArr3.length] = matrix[c][endSize-1];
	testArr4[testArr4.length] = matrix[a][c];

	c--;

	if(i == endSize-1){
		testArr.pop();
		testArr2.pop();
		testArr3.pop();
		testArr4.pop();
	}
}
console.log(testArr.concat(testArr2,testArr3,testArr4));