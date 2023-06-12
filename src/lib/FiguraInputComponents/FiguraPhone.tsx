import { checkForErrors } from "../FiguraUtils/ValidationUtils";
import { FiguraContext, ParentContext } from "../FiguraContext";
import { PropsWithChildren } from "react";
import React from "react";

interface Props extends PropsWithChildren {
    wrapper?: any;
    inputStyle?: any;
    errorStyle?: any;
};

export default function FiguraPhone(props: Props) {
    const { wrapper, inputStyle, errorStyle } = props;

    return (
        <ParentContext.Provider value={"mobile"}>
            <FiguraContext.Consumer>
                {(context) => (
                    <div className={`${wrapper ? wrapper : "flex flex-col mb-1"}`}>
                        {props.children}
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            className={`${inputStyle ? inputStyle : "border-2 border-sky-600 focus:border-2 focus:border-sky-400 outline-none rounded-md p-2 transition-all duration-300 ease-in-out"}`}
                            value={context.form.formState.mobile.value}
                            onChange={e => { checkForErrors(false, "mobile", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                            onBlur={e => { checkForErrors(true, "mobile", e.target.value, context.form.dispatch, context.form.formState, context.formID) }}
                        />
                        {context.form.formState.mobile.touched && context.form.formState.mobile.hasError && (
                            <div className={`${errorStyle ? errorStyle : "mt-1 text-[#F65157] animate-fade"}`}>{context.form.formState.mobile.error}</div>
                        )}
                    </div>
                )}
            </FiguraContext.Consumer>
        </ParentContext.Provider>
    );
};