CREATE DATABASE venda_ingressos;

\c venda_ingressos

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade_disponivel INTEGER NOT NULL
);

INSERT INTO ingressos (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES 
    ('Show da Lana Del Rey', 'Allianz Parque', '2025-05-02', 'Pista', 180.00, 90),
    ('Show da Lana Del Rey', 'Allianz Parque', '2025-05-02', 'Pista VIP', 240.00, 50),
    ('Show da Lana Del Rey', 'Allianz Parque', '2025-05-02', 'Camarote', 400.00, 10),
    ('Show da Lana Del Rey', 'Allianz Parque', '2025-05-02', 'Arquibancada', 100.00, 500),
    ('Show da ANAVITORIA ', 'Arena Opus', '2025-09-27', 'Pista', 140.00, 60),
    ('Show da ANAVITORIA ', 'Arena Opus', '2025-09-27', 'Pista VIP', 260.00, 40),
    ('Show da ANAVITORIA ', 'Arena Opus', '2025-09-27', 'Camarote', 340.00, 20),
    ('Show da ANAVITORIA ', 'Arena Opus', '2025-09-27', 'Arquibancada', 90.00, 700),
    ('Show do Bruno Mars', 'MorumBis', '2026-01-15', 'Pista', 210.00, 60),
    ('Show do Bruno Mars', 'MorumBis', '2026-01-15', 'Pista VIP', 310.00, 30),
    ('Show do Bruno Mars', 'MorumBis', '2026-01-15', 'Camarote', 410.00, 15),
    ('Show do Bruno Mars', 'MorumBis', '2026-01-15', 'Arquibancada', 190.00, 800);


