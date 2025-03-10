import { ZodError } from 'zod';

export type ActionState = {
    status?: 'SUCCESS' | 'ERROR';
    message: string;
    fieldError: Record<string, string[] | undefined>;
    payload?: FormData;
    timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
    message: '',
    fieldError: {},
    timestamp: Date.now()
};

export const fromErrorToActionState = (
    error: unknown,
    formData: FormData
): ActionState => {
    if (error instanceof ZodError) {
        return {
            status: 'ERROR',
            message: '',
            payload: formData,
            fieldError: error.flatten().fieldErrors,
            timestamp: Date.now()
        };
    }

    if (error instanceof Error) {
        return {
            status: 'ERROR',
            message: error.message,
            payload: formData,
            fieldError: {},
            timestamp: Date.now()
        };
    }

    return {
        status: 'ERROR',
        message: 'An unknown error occurred',
        payload: formData,
        fieldError: {},
        timestamp: Date.now()
    };
};

export const toActionState = (
    status: ActionState['status'],
    message: string
): ActionState => ({
    status,
    message,
    fieldError: {},
    timestamp: Date.now()
});
