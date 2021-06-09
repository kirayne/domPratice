function brotha(){
const paragraph = document.createElement('p');
const container = document.querySelector('#container');
paragraph.classList.add('brotha');
paragraph.setAttribute('id', 'rooH');
paragraph.textContent = 'im red';
paragraph.style.color= 'red';


const aga3 = document.createElement('h3');
aga3.setAttribute('id', 'rooG');
aga3.classList.add('brotha');
aga3.textContent = "im blue";
aga3.style.color = 'blue';
aga3.appendChild(paragraph);
container.appendChild(aga3);

const divi = document.createElement('div');
divi.classList.add('brotha');
divi.style.borderColor = 'black';
divi.setAttribute('id', 'divid');
divi.style.backgroundColor= 'pink';


const aga1 = document.createElement ('h1');
aga1.textContent = 'im in a div';
divi.appendChild(aga1);

const paragraaph =  document.createElement ('p');
paragraaph.textContent = ' me too';
divi.appendChild(paragraaph);

container.appendChild(divi);

const btn = document.querySelector('#testingjs');
const btnn = document.querySelector('#official');
btn.onclick = () => alert('i was talking about raelock');

btnn.addEventListener('click', () => 
{
    alert("in other words: brotha(aka raelock) is the cutest");
});
btn.addEventListener('click', function (e) {
    console.log(e);
  });
  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  const buttonns = document.querySelectorAll('#container2 > button');
  buttonns.forEach((buttonns) => {


    buttonns.addEventListener('click', () => {
      alert(buttonns.id);
    });
  });

}



 