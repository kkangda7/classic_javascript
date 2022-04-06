// join : 배열에 있는 모든 값을 더하여 스트링으로 리턴

const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join();
console.log(result);
const result1 = fruits.join('and');
console.log(result1);
const result2 = fruits.join(', and');
console.log(result2);

// split : 스트링을 어레이로 변경(구분자를 전달하는것이 중요)

const 과일 = 'apple,banana,orange';
const result3 = 과일.split();
console.log(result3);
const result4 = 과일.split(',');
console.log(result4);
const result5 = 과일.split(',',2);
console.log(result5);

// reverse : 어레이의 순서를 거꾸로

const 동물 = ['곰', '돼지', '개'];
const result6 = 동물.reverse();
console.log(result6);
console.log(동물);

// splice : 어레이안에 있는것을 자유롭게 삭제 추가 첫번째 스타트 두번째 삭제갯수  세번째 추가될내용

const array = [1, 2, 3, 4, 5];
const result7 = array.splice(0, 2);
console.log(array);
console.log(result7);

// slice : 어레이안에 있는 내용을 지정하여 내보냄 첫번째 스타트 두번째 앤드(마지막값은 배제됨) 순서변경

const array1 = [1, 2, 3, 4, 5];
const result8 = array1.splice(2, 5);
console.log(result8);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const student = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
]

// find 함수: element 콜백함수에서 처리할 현재요소 index 콜백함수에서 퍼리할 현재요소의 인덱스, 반드시 콜백함수 리턴값

const result9 = student.find((element) => {
  return element.score === 90;
});
console.log(result9);

const result10 = student.find((element) => {
  return element.name === 'E';
})
console.log(result10);

//filter함수 find함수와 비슷하나 여러개의 값을 거른다.

const result11 = student.filter((element) => {
  return element.age >=30
});
console.log(result11);

//map함수 배열안의 값을 함수를 거쳐서 새로운 값으로 불러냄

const result12 = student.map((element) => {
  return element.score *2
});

//some함수 배열의 값안에 무언가 있는가를 확인하고 하나라도 있으면 확인값을 true,false로 배출
//every함수 배열의 값안에 무언가 있는가를 확인하고 모든값이 충족되면 true 하나라도 충족되지 않으면 false 배출

const result13 = student.some((element) => {
  return element.score < 50;
});
console.log(result13);

const result14 = student.every((element) => {
  return element.score < 50;
});
console.log(result14);

// reduce함수 prev 리턴된 값 curr 현재값 배열 값을 누적할때 사용
// reduceRight reduce와 같으나 뒤에서 부터

const result15 = student.reduce((prev, curr) => {
  return prev + curr.score;
}, 0)
console.log(result15 / student.length);


// '44,80,90,66,88'score에 숫자를 스트링으로 변환 >> 우선 map으로 score를 거른뒤 join을 사용해 스트링으로 변환

const result16 = student.map((element) => {
  return element.score
}).join()
console.log(result16);

// '45,66,80,88,90 sort함수 정렬 순서를 정의하는 함수

const result17 = student.map((element) => {
  return element.score;
}).sort((a, b) => a-b).join();
console.log(result17);

