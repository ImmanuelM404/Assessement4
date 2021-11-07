// FORTUNE Cookie
const getSubmit = document.getElementById('getSubmit')
const getInspire = document.getElementById('getInspire')
const getHelp = document.getElementById('getHelp')
const getParamSubmit = document.getElementById('getParamSubmit')
const getQuerySubmit = document.getElementById('getQuerySubmit')


//const form = document.querySelector('form')

// const baseURL = `http://localhost:4000/api/compliment/`

const paramInput = document.getElementById('param-input')
//const queryInput = document.getElementById('query-input')

const responseArea = document.getElementsByClassName('response-area')[0];

getSubmit.addEventListener('click', () => {
    let encourage = {
        message: `The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.`,
        meaning: 'Nothing worthy of obtaining comes easy'
       }
    axios
        .post("http://localhost:4000/api/encourage", encourage)
        .then(res => displayRes([res.data]))
});

getInspire.addEventListener('click', () => {
    let inspire = {
        message: `The highest human act is to inspire.`,
        meaning: 'Your life was meant to inspire someone else to fulfill their potential'
       }
    axios
        .post("http://localhost:4000/api/inspire", inspire)
        .then(res => displayRes([res.data]))
});

getHelp.addEventListener('click', () => {
    let help = {
        message: `Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.`,
        meaning: 'Most dreams are killed from the comfort of our bed. Act Now'
       }
    axios
        .post("http://localhost:4000/api/help", help)
        .then(res => displayRes([res.data]))
});

getQuerySubmit.addEventListener('click', () => {
     axios
    .delete(`http://localhost:4000/api/help/:message`)
    .then(res => displayRes([res.data]))
    //console.log('Hello')
});

getParamSubmit.addEventListener('click', () => {
    // let paramInput = document.getElementById('newInput').value
    // paramInput = ''
    //console.log(paramInput)
    let paramInput2 = window.prompt('Write your own affirmation')
    console.log(paramInput2)
    axios
    .get(`http://localhost:4000/api/helpInput/`)
    .then(res => displayRes([res.data]))
});





function displayRes(data){
    responseArea.innerHTML = null;
        data.forEach(item => {
            const p = document.createElement('p')
            const t = document.createTextNode(item)
            p.appendChild(t);
    
             responseArea.appendChild(p)
     })
 }
   
  