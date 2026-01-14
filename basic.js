const ParaBtn = document.querySelector('#addParagraphBtn');
const ParaContainer = document.querySelector('#ParaContain');
const NumberBTN = document.querySelector('#NumberBTN');
const NUMDisplay = document.querySelector('#NUMDisplay');
let NumArr = [Math.random(1,4), Math.random(1,4), Math.random(1,4), Math.random(1,4), Math.random(1,4)];
ParaBtn.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a new paragraph added to the container. Paragraph number ' + (i+1);
    ParaContainer.appendChild(newPara);
    ParaArr.push(newPara);
    }
    console.log('10 paragraphs added to the container.');
});
NumberBTN.addEventListener('click', () => {
    NUMDisplay.textContent = 'Random Number:' + (NumArr[0] + NumArr[1] + NumArr[2] + NumArr[3] + NumArr[4]).toFixed(4);
    console.log('Random numbers summed and displayed.');
});