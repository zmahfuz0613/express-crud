const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})

const products =
[
    {
      id: "95b5886c-9381-4ed7-b78e-0c908cf4a57d",
      name: "Product 001",
      imgURL: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130"
    },
    {
      id: "8f114057-61ad-463b-84c4-4627ee836332",
      name: "Product 002",
      imgURL: "https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "100"
    },
    {
      id: "2e1d97f6-1952-41b3-9959-65bba3c7e248",
      name: "Product 003",
      imgURL: "https://i.ibb.co/XkKm1pM/assorted-color-paint-brush-stroke-1672850.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "140"
    },
    {
      id: "e1375c45-d4f3-42f7-8733-0379b0caf7d1",
      name: "Product 004",
      imgURL: "https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "168"
    },
    {
      id: "2fd86219-940b-4dd1-be56-7ee63e357b34",
      name: "Product 005",
      imgURL: "https://images.unsplash.com/photo-1531826338556-162edb086560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110"
    },
    {
      id: "3b2e7f33-9d23-44f1-b15f-eb4015904164",
      name: "Product 006",
      imgURL: "https://i.ibb.co/bJrPBSQ/steve-johnson-n-WYz-Sj-Ac0e-E-unsplash-Cropped.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130"
    },
    {
      id: "467ec35e-f637-4e2d-9d10-c806b731c092",
      name: "Product 007",
      imgURL: "https://i.ibb.co/QnZWFXJ/blue-green-and-brown-abstract-painting-3582425.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130"
    },
    {
      id: "8ec30135-0103-4129-8973-0b245974c1ab",
      name: "Product 008",
      imgURL: "https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "128"
    },
    {
      id: "bfac0b0a-f4a2-4211-a7bd-7930a1dfa319",
      name: "Product 009",
      imgURL: "https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110"
    },
    {
      id: "c94d5c04-eebf-4969-9179-62d83aa5d024",
      name: "Product 010",
      imgURL: "https://i.ibb.co/jJntzzb/painting-wallpaper-1070527.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "140"
    },
    {
      id: "22f75a1e-7e0c-42d5-82b4-178ea5ecdbc9",
      name: "Product 011",
      imgURL: "https://i.ibb.co/qy7f9cb/orange-and-multicolored-abstract-painting-2784948.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "128"
    },
    {
      id: "b2c5ee5c-82dc-34a6-b284-0da231e3abb5",
      name: "Product 012",
      imgURL: "https://i.ibb.co/kh7C2M5/steve-johnson-RLy-Ez-Lmh-R98-unsplash-1-Cropped.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110"
    },
    {
      id: "a8c5ee5c-98dc-44a6-b284-0da231e3abb6",
      name: "Product 013",
      imgURL: "https://i.ibb.co/NtkxmdN/blue-white-red-and-yellow-abstract-painting-1143758.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110"
    },
    {
      id: "s7c5ee5c-98dc-92a6-b284-0da231e3abb6",
      name: "Product 014",
      imgURL: "https://i.ibb.co/zF1Y6LV/abstract-painting-1293125.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110"
    },
    {
      id: "n54c5ee5c-98dc-24a6-b284-0da231e3abb6",
      name: "Product 015",
      imgURL: "https://i.ibb.co/TwkVCj5/steve-johnson-Ann-Q-TOu-Bxc-unsplash-Cropped.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "90"
    },
    {
      id: "0sc5ee5c-98dc-62a6-b284-0da231e3abb6",
      name: "Product 016",
      imgURL: "https://i.ibb.co/FWRsGJy/photo-of-abstract-painting-1451567.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "140"
    },
    {
      id: "k8c5ee5c-98dc-62a6-b284-0da231e3abb6",
      name: "Product 017",
      imgURL: "https://i.ibb.co/tbDwCmL/red-yellow-and-blue-abstract-painting-1286632.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "170"
    },
    {
      id: "n8c5ee5c-98dc-62a6-b284-0da231e3abb6",
      name: "Product 018",
      imgURL: "https://i.ibb.co/kmV31B1/yellow-and-red-abstract-painting-1789968.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110"
    },
    {
      id: "s8c5ee5c-98dc-62a6-b284-0da231e3abb6",
      name: "Product 019",
      imgURL: "https://i.ibb.co/bvJpK6d/photo-of-abstract-painting-on-canvas-1812960.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "80"
    },
    {
      id: "j8c5ee5c-98dc-62a6-b284-0da231e3abb6",
      name: "Product 020",
      imgURL: "https://i.ibb.co/jf7fJkj/multicolored-abstract-painting-1570779.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "180"
    },
    {
      id: "e5c5ee5c-98dc-62a6-b284-0da231e3abb6",
      name: "Product 021",
      imgURL: "https://i.ibb.co/30GbHgf/blue-orange-and-white-abstract-painting-1183992.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "70"
    }
  ]

app.get('/', (req, res) => {
    res.send("This is root!");
});

app.get('/products', async (req, res) => {
    res.json(products)
})

app.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const product = products.filter(product => product.id === id)[0]
    res.json(product)
})

app.post('/products', (req, res) => {
    const product = req.body
    products.push(product)
    res.json(products)
})

app.put('/products/:id', async (req, res) => {
    const id = req.params.id
    const productIndex = products.findIndex(product => product.id === id)
    const product = { ...products[productIndex], ...req.body }
    products.splice(productIndex, 1, product)
    res.json(product)
})

app.delete('/products/:id', async (req, res) => {
    const id = req.params.id
    const productIndex = products.findIndex(product => product.id === id)
    products.splice(productIndex, 1)
    res.json(products)
})