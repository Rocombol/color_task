'use strict'
document.addEventListener('DOMContentLoaded', ready, false);
/**
 *  ready function is  manage our files;
 */
function ready() {
    var instButtonPanel = new ButtonPanel('ColorManager', ['blue', 'red', 'green']),
        instButtonView = new ButtonView(),
		instCountPanel,
		instButtonCounerView;

    instButtonView.createPanel(instButtonPanel);

    instCountPanel = new CountPanel('CountPanel', 'blue', 'red', 'green');

    instButtonCounerView = new ButtonCounerView();

    instButtonCounerView.createCauntingPanel(instCountPanel);




}
