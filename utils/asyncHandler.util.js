const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(
            "error through ASYN-HANDLER" , err))
    }
}


export { asyncHandler }

 