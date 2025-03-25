const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res)=>{
    const pedido = await prisma.pedido.create({
        data: req.body
    });
    res.status(201).json(pedido).end();
}

const read = async (req,res)=>{
    const pedidos = await prisma.pedido.findMany();
    res.json(pedidos);
}

const update = async (req, res)=>{
    const pedido = await prisma.pedido.update({
        data: req.body,
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(202).json(pedido).end();
}

const remove = async (req, res)=>{
    const pedido = await prisma.pedido.delete({
        where:{
            id: Number(req.params.id)
        }
    });
    res.status(204).json(pedido).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}