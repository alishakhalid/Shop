import { mount } from "@cypress/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AddProduct from "../Content/AddProduct";

//website bereit stellen um es testen zu können
beforeEach(() => {
  mount(
    <BrowserRouter>
      <AddProduct />
    </BrowserRouter>
  );
});

describe("testing axios GET method of file Product Service", () => {
  it("displays entered name", () => {
    // Type name
    cy.get("[data-cy=id]").type("23");
    cy.get("[data-cy=img]").type(
      "https://media1.popsugar-assets.com/files/thumbor/sbk9dwqGU2lwmF1_cr7FdLGIfrw/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/15/725/n/1922153/86e833625d558764cbd381.64373610_/i/Kylie-Cosmetics-Lip-Kit-Sale-2019.jpg"
    );
    cy.get("[data-cy=product_name]").type("ROSE GOLD");
    cy.get("[data-cy=description]").type("This is nuweda");
    cy.get("[data-cy=price]").type("35.60");
    cy.get("[data-cy=submitButton]").click();
  });
});
