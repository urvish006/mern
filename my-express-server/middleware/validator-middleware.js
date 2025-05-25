const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            errors: error.errors.map(err => ({
                path: err.path,
                message: err.message
             
            })),
        });   
        next(error);
    }
};

export default validate;