import cors from "cors";
import express, { Application, Request, Response } from "express";
import { nanoid } from "nanoid";
const app: Application = express();
const port = 4000;
app.use(cors());
app.use(express.json());
let categories = [
    "All Dishes",
    "Main Dishes",
    "Salads",
    "Appetizers",
    "Pizzas",
    "Lunch favorites",
    "Fish & Sea foods",
    "Brunch",
    "Side dish ",
    "Desserts",
    "Beverages",
];
let foods = [
    {
        id: nanoid(),
        name: "Food1",
        price: 12345,
        ingredients: "ingredients1"
    },
    {
        id: nanoid(),
        name: "Food2",
        price: 54321,
        ingredients: "ingredients2"
    },
]
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});
app.post("/create-food", (req: Request, res: Response) => {
    if (req.body === undefined) {
        res.status(400).send("Error")
    } else {
        const { name } = req.body;
        const { price } = req.body;
        const { ingredients } = req.body;
        foods.push(name, price, ingredients);
    }
});
app.get("/categories", (req: Request, res: Response) => {
    res.send(categories)
});
app.get("/foods", (req: Request, res: Response) => {
    res.send(foods)
});
app.post("/categories", (req: Request, res: Response) => {
    const { name } = req.body;
    categories.push(name);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.get('/tasks', (req: Request, res: Response) => {
//     res.send(tasks)
// })
// app.post('/tasks', (req: Request, res: Response) => {
//     const id = nanoid()
//     const { name } = req.body;
//     const { mode } = req.body;
//     tasks.unshift({ id, name, mode });
//     res.status(201).send({ id });
// })
// app.delete('/tasks/:id', (req: Request, res: Response) => {
//     const id = req.params.id
//     const newTasks = tasks.filter((task) => task.id !== id)
//     tasks = newTasks;
//     res.send(tasks)
// })
// app.put('/tasks/:id', (req: Request, res: Response) => {
//     const id = req.params.id
//     const { name } = req.body;
//     const index = tasks.findIndex(task => task.id === id);
//     tasks[index].name = name;
//     res.send(tasks)
// })
// app.put('/toggle/tasks/:id', (req: Request, res: Response) => {
//     const id = req.params.id
//     const { mode } = req.body
//     const index = tasks.findIndex(task => task.id === id);
//     tasks[index].mode = mode;
//     res.send(tasks)
// })