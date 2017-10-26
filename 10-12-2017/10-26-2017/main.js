console.log("hello");

// arrays
let bucket_list = ["apple", "banana", "peach", "orange"];
console.log(bucket_list);
console.log("There are "+bucket_list.length + "elements in this array");
console.log("The third element is "+bucket_list[3]);

// for loop
for(let i = 0; i <bucket_list.length; i++){
console.log(bucket_list[i])};

// new array
let movie_list = ["HBO network", "Arrow", "MYPHL"];
let block_list = ["Arrow", "MYPHL", "That 70's Show"];

// nested loop
for(let i =0; i< movie_list.length; i++){
  for(let j =0; j <block_list.length; j++){
  if(movie_list[i]==block_list[j]){
  console.log(movie_list[i]);
  }
  }
}

// Iterators
let balance = 1000;
let years = 0; //counter
while(balance <1000000){
  balance += balance * 0.03;
  years+=1;
}
console.log(years);

// Iteratros
movie_list.forEach(movie => console.log( "-" + movie));
let new_list = movie_list.filter(movvie => movie.slice(0,1) == "1");
new_list.forEach(movie => console.log( "-" + movie));
