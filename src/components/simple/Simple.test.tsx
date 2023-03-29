import { render, screen } from "@testing-library/react";
import Simple from "./Simple";

describe("Simple component", () => {

    const texts = [
        "fvdgfdg",
        "fds t34 ufhsdjf hdskjf dsf ds",
        "vfd gfhsd gfdkjskfj vncxv cxv xcv cx",
    ];

    texts.forEach((text) => {
        test(`Contains value: ${text}`, () => {
            render(<Simple text={text} />);
    
            const simpleText = screen.getByText(new RegExp(text));
            expect(simpleText).toBeInTheDocument();
        });
    });

    // test("Contains some value", () => {
    //     const text = "fdsgkhsdfjk sdf sdf sd";
    //     render(<Simple text={text} />);

    //     const simpleText = screen.getByText(new RegExp(text));
    //     expect(simpleText).toBeInTheDocument();
    // });
    test("Not contains some value", () => {
        render(<Simple />);

        const simpleText = screen.queryByText(/fdsfsdfsd/i);
        expect(simpleText).not.toBeInTheDocument();
    });

});

export {};
