import { FastifyRequest, FastifyReply } from "fastify";
import { listCustomersService } from "../services/listCustomersService";

class listCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listcustomerService = new listCustomersService()

        const customers = await listcustomerService.execute()

        reply.send(customers)

    }
}

export { listCustomersController }