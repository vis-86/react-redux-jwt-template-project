import logger from "redux-logger";

export function getErrorMessage(error) {
    let msg;
    if ("string" === typeof error || error instanceof String) {
        msg = error
    } else {
        msg = error && error.message ? error.message : "Упс! Возникли проблемы. Попробуйте позже."
    }
    return msg;
}