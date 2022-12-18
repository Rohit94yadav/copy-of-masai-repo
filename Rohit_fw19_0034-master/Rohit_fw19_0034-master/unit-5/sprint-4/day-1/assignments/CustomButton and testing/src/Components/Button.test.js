import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App";
import Button from "./Button"
import renderer from "react-test-renderer";


describe("Testing the custom button cumponent", ()=>{
    it("should be in the DOM tree", ()=>{
        render(<Button>Testing Button</Button>);
       let button = screen.getByText("Testing Button");

       expect(button).toBeInTheDocument();
    });

    it("should have a button with test Click Me in app.js", ()=>{
        render(<App/>);
        // screen.debug();
        let button = screen.getByTestId("customButton");
        expect(button).toHaveTextContent("Click Me");
    });

    it("should check if the label is present as passed through the props", ()=>{
        render(<Button>Testing</Button>);
        // screen.debug();
        let button = screen.getByTestId("customButton");
        expect(button).toHaveTextContent("Testing");
    });

    it("should be empty DOM if children props is not passed", ()=>{
        render(<Button></Button>);
        // screen.debug();
        let button = screen.getByTestId("customButton");
        expect(button).toBeEmptyDOMElement();
    });

    it("should toggle the theme when the button is clicked", ()=>{
        render(<App/>);
        // screen.debug();
        let button = screen.getByTestId("customButton");
        let h3Tag = screen.getByText("Current theme is light");
        expect(h3Tag).toHaveTextContent("light");
        userEvent.click(button);
        expect(h3Tag).toHaveTextContent("dark")
    });

    it("should invoke the onClick function", ()=>{
        const mockFun = jest.fn();

        render(<Button onClick={mockFun} >Checking onClick</Button>);
        // screen.debug();
        let button = screen.getByTestId("customButton");
        userEvent.click(button);
        userEvent.click(button);
        // expect(mockFun).toBeCalled();
        expect(mockFun).toBeCalledTimes(2)
    });

    it("should match the snapshot", ()=>{

        const tree = renderer.create(<Button colorScheme={"green"} 
        variant={"ghost"}>Custom Button</Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


});