const rock = document.querySelector("#rock");

const scrissors = document.querySelector("#scrissors");

const paper = document.querySelector("#paper");



rock.addEventListener("click", function(){
const randomMove = createRandomMove();
displayMoves(this.id, randomMove);
displayResult(this.id, randomMove);
})

scrissors.addEventListener("click", function(){
const randomMove = createRandomMove();
displayMoves(this.id, randomMove);
displayResult(this.id, randomMove);
})

paper.addEventListener("click", function(){
const randomMove = createRandomMove();
displayMoves(this.id, randomMove);
displayResult(this.id, randomMove);

})

