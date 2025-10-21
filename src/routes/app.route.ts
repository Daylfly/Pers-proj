export const APP_ROUTES = {
    root: (path: string = "") => path,
    home: () => APP_ROUTES.root('/'),
    about: () => APP_ROUTES.root("/about"),
    foods: () => APP_ROUTES.root("/foods"),
    cart: () => APP_ROUTES.root('/cart'),
    sell: () => APP_ROUTES.root('/sell'),
    profile: () => APP_ROUTES.root('/profile'),
    posts:{
        index:() => APP_ROUTES.root('/posts'),
        show: (id: string) => APP_ROUTES.root('/posts/' + id),
    },


};