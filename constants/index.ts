export const headerLinks = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "Create Events",
        route: "/events/create",
    },
    {
        label: "My Profile",
        route: "/profile",
    }
]

export const eventDefaultValue = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startdate: new Date(),
    endtdate: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}