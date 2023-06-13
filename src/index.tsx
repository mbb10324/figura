import FiguraSubmitBtn from "./lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraCheckBox from "./lib/FiguraInputComponents/FiguraCheckBox"
import FiguraPassword from "./lib/FiguraInputComponents/FiguraPassword";
import FiguraLabel from "./lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./lib/FiguraSupportingComponents/FiguraTitle";
import FiguraTextArea from "./lib/FiguraInputComponents/FiguraTextArea";
import FiguraPhone from "./lib/FiguraInputComponents/FiguraPhone";
import FiguraEmail from "./lib/FiguraInputComponents/FiguraEmail";
import FiguraSelect from "./lib/FiguraInputComponents/FiguraSelect";
import FiguraText from "./lib/FiguraInputComponents/FiguraText";
import ReactDOM from "react-dom/client";
import Figura from "./lib/Figura";
import React from "react";
import "./index.css";

export default function App() {

    // function customValidateName(value: any) {
    //     if (value.trim() === "") {
    //         return { hasError: true, error: "Custom Name validation" };
    //     }
    //     return { hasError: false, error: "" };
    // }

    // function customValidateEmail(value: any) {
    //     if (value.trim() === "") {
    //         return { hasError: true, error: "Custom Email validation" };
    //     }
    //     return { hasError: false, error: "" };
    // }

    function someApiCall() {
        console.log("this worked")
    }

    return (
        <div className="w-full h-full flex justify-center">

            <Figura figuraID={"signup"} onSubmit={someApiCall}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraText>
                    <FiguraLabel>First Name:</FiguraLabel>
                </FiguraText>

                <FiguraText>
                    <FiguraLabel>Last Name:</FiguraLabel>
                </FiguraText>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

            </Figura>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <App />
);