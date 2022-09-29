export const sendNotFound = (res, id, status = 404) => {
    res.status(status).json({
        status: 'error',
        code: status,
        message: `Note with id=${id} not found!`,
    });
};
