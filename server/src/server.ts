import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

//pode ser adicionado um segundo parâmetro que é um objeto, onde pode ser adicionado as origens que seriam permitidas a acesssarem essa API
app.register(cors)
app.register(appRoutes)

//Faz com que a aplicação ouça a porta 3333
app.listen({
    port:3333,
    host: "0.0.0.0"
}).then(() => {
    console.log("HTPP Server running")
})