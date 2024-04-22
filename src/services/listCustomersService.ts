import { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma";
import { createCustomerService } from "./createCustormerServices";

class listCustomersService{
async execute(){
   const customers = await prismaClient.customer.findMany()

   return customers
}
    

}

export { listCustomersService }