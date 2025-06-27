import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { CommentPage } from "../../../pages/CommentPage";
import { HomePage } from "../../../pages/HomePage";

export enum AppRoutes {
    MAIN = 'main',
    COMMENT = 'comment',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COMMENT]: '/comment',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />,
    },
    [AppRoutes.COMMENT]: {
        path: RoutePath.comment,
        element: <CommentPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};