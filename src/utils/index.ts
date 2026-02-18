import dayjs from 'dayjs';

export const formatDate = (date: any): string => dayjs(date).format('YYYY-MM-DD');

export const formatDateTime = (date: any): string => dayjs(date).format('YYYY-MM-DD HH:mm:ss');

export const sleep = (second: number): Promise<void> => {
    return new Promise((resolve: any) => {
        setTimeout(
            resolve,
            second * 1000
        );
    });
};
