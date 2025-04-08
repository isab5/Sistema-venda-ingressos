const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const ingressosModel = require("../models/ingressosModel");

const exportIngressosCSV = async (req, res) => {
    try {
        const ingressos =  await ingressosModel.getAllIngressos();

        res.setHeader("Content-Disposition", "attachment; filename=ingressos.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true});
        csvStream.pipe(res);

        ingressos.forEach((ingresso) => {
            csvStream.write({
                Id: ingresso.id,
                Evento: ingresso.evento,
                Local: ingresso.local,
                Data: ingresso.data_evento,
                Categoria: ingresso.categoria,
                Preço: ingresso.preco,
                Quantidade: ingresso.quantidade_disponivel,
            });
        });
        
        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV"});
    }
};

const exportIngressosPDF = async (req, res) => {
    try {
        const ingressos = await ingressosModel.getAllIngressos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=ingressos.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Ingressos", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Evento | Local | Data |Categoria | Preço | Quantidade", {align: "center"});
        doc.moveDown(0.5);

        //Add dados dos Ingressos
        ingressos.forEach((ingresso) => {
            doc.fontSize(11).text(
                `${ingresso.id} | ${ingresso.evento} | ${ingresso.local} | ${ingresso.data_evento} | ${ingresso.categoria} | ${ingresso.preco} | ${ingresso.quantidade_disponivel}`
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF", error}); 
    }
};

module.exports = { exportIngressosCSV, exportIngressosPDF };