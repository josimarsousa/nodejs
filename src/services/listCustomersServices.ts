import prismaClient from "../prisma";

class listCustomersServices{
    async execute(){

        const customers = await prismaClient.customer.findMany()
        
        return customers
    }
}

export { listCustomersServices }