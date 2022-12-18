import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";



describe("Testing the custom button cumponent", ()=>{
    it("should change the sum button is clicked", ()=>{
        render(<App/>);
        //  screen.debug();
        let button = screen.getByTestId("addButton");
        let h3Tag = screen.getByText("0");
        expect(h3Tag).toHaveTextContent("0");
        userEvent.click(button);
        expect(h3Tag).toHaveTextContent("5")
    });

    it("should change the sum button is clicked", ()=>{
        render(<App/>);
        //  screen.debug();
        let button = screen.getByTestId("reduceButton");
        let h3Tag = screen.getByText("0");
        expect(h3Tag).toHaveTextContent("0");
        userEvent.click(button);
        expect(h3Tag).toHaveTextContent("-5")
    });

    

});