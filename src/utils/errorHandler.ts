export class AppError extends Error{
    constructor(statusCode: number, message: string,){
        super(message);
        this.name = 'AppError';
    }
}

export function handleError(error:any){
    if(error instanceof AppError){
        console.error(`[Error ${error.message}]`);
        return;
    }
    else if(error instanceof Error){
        error.message='An unexpected error occurred'
        console.log(error.message);
    }
}