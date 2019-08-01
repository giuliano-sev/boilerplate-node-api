import {Response} from 'express';

export default {
    internal: (res: Response, error_message = 'Internal Error Occurred'): Response => 
        res.status(500).json({
            error_code: 500,
            error_message,
        }),
}