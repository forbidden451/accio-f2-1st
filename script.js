const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
let db = data;
function printDeveloper() {
  for(var i=0;i<db.length;i++){
    if(db[i].profession=='developer')
      console.log(db[i]);
  }
}

// 2. Add Data
function addData() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let profession = prompt("Enter your profession:");

  const info = {
    name : name,
    age : parseInt(age),
    profession : profession,
  };

  db.push(info);

}

// 3. Remove Admins
function removeAdmin() {
  const updated = [];
  for(var i=0;i<db.length;i++) {
    if(db[i].profession == 'admin'){
      console.log("Done");
    }
    else{
      updated.push(db[i]);
    }
  }
  db = updated;
}

// 4. Concatenate Array
function concatenateArray() {
  let dummyArray = [{name:"temp",age:12},{name:"rabbit",age:5}];
  let concatenateArray = data.concat(dummyArray);
  console.log(concatenateArray);
}

// 5. Average Age
function averageAge() {
  let total=0;
  for(var i=0;i<db.length;i++){
    total += db[i].age;
  }
  console.log("Average age:"+total/i);
}

// 6. Age Check
function checkAgeAbove25() {
  for(var i=0;i<db.length;i++){
    if(db[i].age>25){
      console.log(db[i]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let unique=[];
  for(var i=0;i<db.length;i++){
    if(unique.indexOf(db[i].profession) === -1)
      unique.push(db[i].profession);
  }
  console.log(unique);
}

// 8. Sort by Age
function sortByAge() {
  for(var i=0;i<db.length;i++){
    for(var j=i;j<db.length;j++){
      if(db[j].age<db[i].age){
        let temp = db[j];
        db[j] = db[i];
        db[i] = temp; 
      }
    }
  }
}

// 9. Update Profession
function updateJohnsProfession() {
  for(var i=0;i<db.length;i++){
    if(db[i].name=='john'){
      db[i].profession='manager';
    }
  }
  console.log('Done');
}

// 10. Profession Count
function getTotalProfessions() {
  let developer=0;
  let admin = 0;
  for(var i=0;i<db.length;i++){
    if(db[i].profession=='developer')
      developer++;
    if(db[i].profession=='admin')
      admin++;
  }
  console.log('Admins: '+admin+' Developers: '+developer);
}
