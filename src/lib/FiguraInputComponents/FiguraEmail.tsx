import { FiguraContext, LabelContext } from "../FiguraUtils/FiguraContext";
import FiguraError from "../FiguraSupportingComponents/FiguraError";
import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { InputProps } from "../FiguraUtils/FiguraTypes";
import React from "react";

export default function FiguraEmail(props: InputProps) {
    const { children, wrapper, inputStyle, errorStyle, name, placeholder } = props;

    return (
        <LabelContext.Provider value={name}>
            <FiguraContext.Consumer>
                {(context) => {
                    if (!context) return null;
                    return (
                        <div className={`${wrapper ? wrapper : "input-container"}`}>
                            {children}
                            <input
                                name={name}
                                id={name}
                                type="email"
                                placeholder={`${placeholder ? placeholder : ""}`}
                                className={`${inputStyle ? inputStyle : "input-style"}`}
                                onChange={e => {
                                    context.dispatch({
                                        type: "INPUT_UPDATE",
                                        data: { name: name, value: e.target.value, type: "email", touched: true, formID: context.formID }
                                    })
                                }}
                                onBlur={e => {
                                    context.dispatch({
                                        type: "INPUT_UPDATE",
                                        data: { name: name, value: e.target.value, type: "email", touched: true, formID: context.formID }
                                    })
                                }}
                            />
                            {/* <FiguraError formField={context.formState[name]} errorStyle={errorStyle} /> */}
                        </div>
                    );
                }}
            </FiguraContext.Consumer>
        </LabelContext.Provider>
    );
};

FiguraEmail.displayName = "FiguraEmail"; //we do this because children.name is unstable. Therefore we explicitly define a displayName
