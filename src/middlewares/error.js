const error = (req, res, next) => {
    return res.status(404).json({
        status: 404,
        error: 'Page Not Found',
        message: 'Pagina inexistente'
    })
};
module.exports = error;
