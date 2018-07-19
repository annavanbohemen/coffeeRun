(function (window) {
    'use strict'

    var FORM_SELECTOR = '[data-coffee-order="form"]'
    var App = window.App;
    var Truck = App.Truck;
    var FormHandler = App.FormHandler
    var DataStore = App.DataStore;

    var idTruck = '001-Truck'  //add IDTruck 

    var myTruck = new Truck(idTruck, new DataStore());

    window.myTruck = myTruck

    var  formHandler  =  new  FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
})(window);

