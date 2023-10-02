sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function(MessageToast, MessageBox) {
    'use strict';

    return {
        addQuestions: function(oEvent) {
            if (!this.oDialog) {
				this.oDialog = this.loadFragment({
					name: "fullstackdevchallenge.ext.addQuestions.AddQuestions"
				});
			} 
			this.oDialog.then(function(oDialog) {
				oDialog.open();
			});
        },

        onClose: function() {
            sap.ui.getCore().byId("dialogAddQuestion").close();
        },

        onSubmit: function() {
            var oBinding = sap.ui.getCore().byId("idSimpleForm").getObjectBinding();

            oBinding.execute().then(
                function() {
                    MessageBox.information(
                        oBinding.getBoundContext().getObject().value
                        )
                    sap.ui.getCore().byId("dialogAddQuestion").close();
                    this.getBindingContext().refresh();
                }.bind(this),
                function(oError) {
                    new MessageBox.error(oError.message)
                }
            )
        }
    };
});
