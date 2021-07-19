`use scrict`

const NAME = document.querySelector("#name");
const BIRTHPLACE = document.querySelector("#birthPlace");
const NOOFAWARDS = document.querySelector("#noOfAwards");
const YEAROFBIRTH = document.querySelector("#yearOfBirth");
const DIV = document.querySelector("#heloofromdb")

let submitButton = document.querySelector("#btn");

const DELETEID = document.querySelector("#deleteID");
let delBTN= document.querySelector("#delBtn")

const READVALUE = document.querySelector("#readID");
let readBtn= document.querySelector("#readBtn")

const UPDATEID = document.querySelector("#updateID");
let updateBTN= document.querySelector("#updateBtn")

const UPDNAME = document.querySelector("#updateName");
const UPDBIRTHPLACE = document.querySelector("#updateBirthPlace");
const UPDNOOFAWARDS = document.querySelector("#updateNoOfAwards");
const UPDYEAROFBIRTH = document.querySelector("#updateYearOfBirth");

const printToScreen = (msg) => {
    const p = document.createElement("p");
    const TEXT = document.createTextNode(msg);
p.appendChild(TEXT);
DIV.appendChild(P);

}
const createMusician = (e) => {
    e.preventDefault();

const NAME_VALUE = NAME.value;
const PLACE_VALUE = BIRTHPLACE.value;
const AWARDS_VALUE = NOOFAWARDS.value;
const BIRTH_VALUE = YEAROFBIRTH.value;

console.log(NAME_VALUE,PLACE_VALUE,AWARDS_VALUE,BIRTH_VALUE);



let data = {
    name: NAME_VALUE,
    birthPlace: PLACE_VALUE,
    noOfAwards : AWARDS_VALUE,
    yearOfBirth: BIRTH_VALUE
};

axios.post(`http://localhost:1703/musician/create`, data,{
    Headers:{
        'Access-Control-Allow-origin':'*' ,
    }}) 
.then( (response) => printToScreen("Done"))
.catch( (error) => console.error("Oops"));
}
const deleteMusician = () => {

    const DELID = Number(DELETEID.value);

    axios.delete(`http://localhost:1703/musician/delete/${DELID}`, {
        headers:{
            'Access-Control-Allow-Origin': '*'
        }})
        .then((response) => printToScreen("SUCCES"))
        .catch((error) => printToScreen("ERROR"));
}

const readMusician = (e) => {
    e.preventDefault();

    // if (readMusicianIdField.value = ``){
        axios.get(`http://localhost:1703/musician/read/`,{//${NAME_VALUE,PLACE_VALUE,AWARDS_VALUE,BIRTH_VALUE}`,{
    Headers:{
        'Access-Control-Allow-origin':'*' ,
    }})
.then(response =>  {return response;})
.then(data => {
    console.log(data.data);
    const html = data.data
        .map(response => {
        return '<p>name: ${response.name, response.birthplace, response.noOfAwards, response.yearOfBirth}</p>';
    }).join("");
    console.log(html)
document.querySelector('#responsefromdb').insertAdjacentHTML("afterbegin", html);
})
}

const updateMusician = (e) => {
    e.preventDefault();
    const UPDID = Number(UPDATEID.value);

    const NAME_VALUE = UPDNAME.value;
    const PLACE_VALUE = UPDBIRTHPLACE.value;
    const AWARDS_VALUE = UPDNOOFAWARDS.value;
    const BIRTH_VALUE = UPDYEAROFBIRTH.value;

    let updatedata = {
        name: NAME_VALUE,
        birthPlace: PLACE_VALUE,
        noOfAwards : AWARDS_VALUE,
        yearOfBirth: BIRTH_VALUE
    };

axios.put(`http://localhost:1703/musician/replace/${UPDID}`, updatedata,{
    Headers:{
        'Access-Control-Allow-origin':'*' ,
    }}) 
.then( (response) => 
console.log(response.data)) }

submitButton.addEventListener('click',createMusician);
delBTN.addEventListener('click',deleteMusician);
readBtn.addEventListener('click',readMusician);
updateBTN.addEventListener('click',updateMusician);
