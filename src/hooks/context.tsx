/**
 * @file 上下文相关hook
 */

interface CurrentUser {
    username: string;
}

export const useCurrentUser = (): CurrentUser => {
    return {
        username: 'username',
    };
};
