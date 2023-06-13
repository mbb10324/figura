import FiguraConfirmPassword from "./lib/FiguraInputComponents/FiguraConfirmPassword";
import FiguraSubmitBtn from "./lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraCheckBox from "./lib/FiguraInputComponents/FiguraCheckBox"
import FiguraPassword from "./lib/FiguraInputComponents/FiguraPassword";
import FiguraLabel from "./lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./lib/FiguraSupportingComponents/FiguraTitle";
import FiguraUrl from "./lib/FiguraInputComponents/FiguraUrl";
import FiguraPhone from "./lib/FiguraInputComponents/FiguraPhone";
import FiguraEmail from "./lib/FiguraInputComponents/FiguraEmail";
import FiguraFile from "./lib/FiguraInputComponents/FiguraFile";
import FiguraHidden from "./lib/FiguraInputComponents/FiguraHidden";
import FiguraText from "./lib/FiguraInputComponents/FiguraText";
import ReactDOM from "react-dom/client";
import Figura from "./lib/Figura";
import React from "react";
import "./index.css";

export default function App() {

    function customValidateName(value: any) {
        if (value.trim() === "") {
            return { hasError: true, error: "Custom Name validation" };
        }
        return { hasError: false, error: "" };
    }

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

                <FiguraText validator={customValidateName}>
                    <FiguraLabel>First Name:</FiguraLabel>
                </FiguraText>

                <FiguraText>
                    <FiguraLabel>Last Name:</FiguraLabel>
                </FiguraText>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraConfirmPassword>
                    <FiguraLabel>Confirm:</FiguraLabel>
                </FiguraConfirmPassword>

                <FiguraFile>
                    <FiguraLabel>File:</FiguraLabel>
                </FiguraFile>

                <FiguraUrl>
                    <FiguraLabel>Url:</FiguraLabel>
                </FiguraUrl>

                <FiguraHidden />

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>

            </Figura>

            {/* <Outer>
                <Inner name="email thing" />
                <Inner name="password thing" />
            </Outer> */}
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <App />
);

// function Outer(props: PropsWithChildren) {
//     let children = props.children;
//     if (!Array.isArray(props.children)) {
//         children = [props.children]
//     }

//     children.forEach((child) => {
//         console.log(child.props.name);
//     })

//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

// function Inner(props: { name: string }) {
//     return (<h1>Foo</h1>)
// }
