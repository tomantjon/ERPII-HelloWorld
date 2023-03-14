sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend(
      "helloworld.hogent.com.helloworld.controller.App",
      {
        onInit: function () {},
        handleMessageToastPress: function (oEvent) {
          var msg =
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.";
          MessageToast.show(msg);
        },
      }
    );
  }
);
