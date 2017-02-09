/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */
function ButtonView(data) {



    function changecolor(event) {
        var target = event.target,
            divchangecolor = document.getElementById('colorarea');

        if (target.innerHTML == 'blue') {
            divchangecolor.style.backgroundColor = 'blue'
        } else {
            target.innerHTML == 'red' ? divchangecolor.style.backgroundColor = 'red' : divchangecolor.style.backgroundColor = 'green';
        }
    }

    function makeCounter() {
        var currentCount = 0;

        return function() { // (**)
            return currentCount+=1;
        };
    }



    function changeclick() {

        var counter = makeCounter();
        var target = event.target,
            increaseCollection = document.querySelectorAll('h3');

        for (var i = 0; i < increaseCollection.length; i++) {
            if (increaseCollection[i].firstChild.textContent == target.innerText) {
                increaseCollection[i].lastChild.innerHTML = counter()+Number(increaseCollection[i].lastChild.innerHTML);
            }
        }
    }

    function addButtonListeners() {
        var buttons = document.body.querySelectorAll('button');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', changecolor, false)
            buttons[i].addEventListener('click', changeclick, false)
        }
    }

    this.createPanel = function(data) {
        var contentElement = document.getElementById('buttons'),
            title = data.title,
            buttonnames = data.buttonvalue,
            html;

        html = '<table><thead><tr>';
        html += '<th>' + '<h1>' + title + '</h1>' + '</th>';
        html += '</tr></thead><tbody>';
        buttonnames.forEach(function(item, i) {
            html += '<tr><td>' + '<button>' + item + '</button>' + '</td></tr>';
        });
        html += '</tbody></table>';
        contentElement.innerHTML = html;
        addButtonListeners();
    };
}