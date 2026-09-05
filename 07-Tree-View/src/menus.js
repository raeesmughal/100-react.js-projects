export const treeData = [
  {
    id: 0,
    label: "Home",
    to: "/"
  },
  {
    id: 1,
    label: "About Us",
    to: "/about",
    children: [
      {
        id: 2,
        label: "Our Team",
        to: "/about/team",
        children: [
          {
            id: 3,
            label: "Leadership",
            to: "/about/team/leadership"
          },
          {
            id: 4,
            label: "Engineering",
            to: "/about/team/engineering",
            children: [
              {
                id: 5,
                label: "Frontend",
                to: "/about/team/engineering/frontend"
              },
              {
                id: 6,
                label: "Backend",
                to: "/about/team/engineering/backend"
              }
            ]
          }
        ]
      },
      {
        id: 7,
        label: "Careers",
        to: "/about/careers"
      }
    ]
  },
  {
    id: 8,
    label: "Services",
    to: "/services",
    children: [
      {
        id: 9,
        label: "Web Development",
        to: "/services/web-development",
        children: [
          {
            id: 10,
            label: "React Apps",
            to: "/services/web-development/react"
          },
          {
            id: 11,
            label: "Vue Apps",
            to: "/services/web-development/vue"
          }
        ]
      },
      {
        id: 12,
        label: "UI/UX Design",
        to: "/services/design"
      },
      {
        id: 13,
        label: "Cloud Solutions",
        to: "/services/cloud"
      }
    ]
  },
  {
    id: 14,
    label: "Register",
    to: "/register",
    children: [
      {
        id: 15,
        label: "Login",
        to: "/register/login"
      },
      {
        id: 16,
        label: "Signup",
        to: "/register/signup",
        children: [
          {
            id: 17,
            label: "Personal Account",
            to: "/register/signup/personal"
          },
          {
            id: 18,
            label: "Business Account",
            to: "/register/signup/business"
          }
        ]
      },
      {
        id: 19,
        label: "Guest Access",
        to: "/register/guest"
      }
    ]
  },
  {
    id: 20,
    label: "Contact",
    to: "/contact",
    children: [
      {
        id: 21,
        label: "Support",
        to: "/contact/support"
      },
      {
        id: 22,
        label: "Sales",
        to: "/contact/sales"
      },
      {
        id: 23,
        label: "Office Locations",
        to: "/contact/locations",
        children: [
          {
            id: 24,
            label: "North America",
            to: "/contact/locations/na"
          },
          {
            id: 25,
            label: "Europe",
            to: "/contact/locations/eu"
          }
        ]
      }
    ]
  }
];