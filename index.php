<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta CEP</title>
    <link rel="stylesheet" href="./style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <nav id="naveBar">
        <div id="espacoLogo">
            <h1>Consulta CEP</h1>
        </div>
        <div id="espacoMenu">
            <a href="#">Menu</a>
            <a href="./about.php">Sobre</a>
        </div>
    </nav>
    <header>
        <h1>Seja bem vido ao consulta CEP</h1>
        <p>Caso queira informarções de ruas e baixos basta digitar seu cep logo abaixo e clickar em consultar</p>
    </header>
    <main>
        <section id="cep-section">
            <input type="text" id="cep-input" placeholder="Digite seu CEP" required>
            <button id="consultar-cep">Consultar</button>
            <div id="resultado-cep"></div>
        </section>
    </main>
    <script src="./script.js"></script>
</body>
</html>
