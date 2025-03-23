const ingressosModel = require("../models/ingressosModel");

const getAllIngressos = async (req, res) => {
    try {
        const ingressos = await ingressosModel.getAllIngressos();
        res.json(ingressos);
    } catch (error) {
        res.status(404).json({ message: "Não é possível ver os ingressos!"})
    }
};

const getIngressoById = async (req, res) => {
    try {
        const ingressos = await ingressosModel.getIngressoById(req.params.id);
        if (!ingressos) {
            return res.status(404).json({ message: "Ingresso não encontrado!"});
        }
        res.json(ingresso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar ingresso!"})
    }
};

const createIngresso = async (req, res) => {
    try {
        const { evento, local, data_evento, categoria, preco, quantidade_disponível } = req.body;
        const newIngresso = await ingressosModel.createIngresso(evento, local, data_evento, categoria, preco, quantidade_disponível);
        res.status(201).json(newIngresso);
    } catch (error) {
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Ingresso já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar ingresso." });
    }
};

const updateIngresso = async (req, res) => {
    try {
        const { evento, local, data_evento, categoria, preco, quantidade_disponível } = req.body;
        const updatedIngresso = await ingressosModel.updateIngresso(evento, local, data_evento, categoria, preco, quantidade_disponível);
        if (!updatedIngresso) {
            return res.status(404).json({ message: "Ingresso não encontrado." });
        }
        res.json(updatedIngresso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar ingresso." });
    }
};

const deleteIngresso = async (req, res) => {
    try {
        const message = await ingressosModel.deleteIngresso(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(403).json({ message: "Erro ao deletar ingresso." });
    }
};

const vendaIngresso = async (req, res) => {
    try {
        const { quantidade_disponivel } = req.body;
        if (!quantidade_disponivel) {
            return res.status(404).json({ error: "Não foi possível comprar ingresso!" });
        }
        const venda = await ingressosModel.vendaIngresso(quantidade_disponivel);
        return res.status(200).json({ message: "Ingresso vendido com sucesso", venda });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao vender ingresso" });
    }
}

module.exports = { getAllIngressos, getIngressoById, createIngresso, updateIngresso, deleteIngresso, vendaIngresso };