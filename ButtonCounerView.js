/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */
function ButtonCounerView(data) {
    this.colorCountNames = function(data) {
        var arraynededkeys = [];
        for (var key in data) {
            arraynededkeys.push(data[key]);
        }
        return arraynededkeys;
    }

    this.createCauntingPanel = function(data) {
        var contentElement = document.getElementById('countarea'),
            countpanelArray = this.colorCountNames(data),
            colorArray = countpanelArray.slice(1),
            html;
        
		html='<h1>'+countpanelArray[0]+'</h1>';
        
		colorArray.forEach(function(item, i) {
            html +='<h3>'+item+'<span>0</span>'+'</h3>';
        }); 

        contentElement.innerHTML = html;

    };
}