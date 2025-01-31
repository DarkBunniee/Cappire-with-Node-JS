// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("appview.controller.View1", {
//         onInit() {
//         }
//     });

// });


// sap.ui.define(['sap/m/MessageToast','sap/ui/core/mvc/Controller'],
// 	function(MessageToast, Controller) {
// 	"use strict";

// 	var PageController = Controller.extend("sap.m.sample.Button.Page", {

// 		onPress: function (evt) {
//             MessageToast.show("Data has been successfully updated!!");
// 			// MessageToast.show(evt.getSource().getId() + "Data has been successfully updated!!");
           
// 		}
// 	});

// 	return PageController;

// });


sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("appview.controller.View1", {

        onPress: function (evt) {
            // MessageToast.show("Data has been successfully updated!!");
			// MessageToast.show(evt.getSource().getId() + "Data has been successfully updated!!");
            MessageBox.success("Data has been successfully updated!!");
		},

		onBack: function (evt) {
            // MessageToast.show("Data has been successfully updated!!");
			// MessageToast.show(evt.getSource().getId() + "Data has been successfully updated!!");
            MessageBox.information("Do you want to quiet?");
		}
		
	});
});
