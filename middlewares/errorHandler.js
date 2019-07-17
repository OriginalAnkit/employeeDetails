function errorHandler(err, req, res, next) {
    console.log("dslkfjsdlf")
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', {
        error: err
    })
}

module.exports = {
    errorHandler
}