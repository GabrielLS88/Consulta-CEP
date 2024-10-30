$(document).ready(function() {
    $('#consultarCep').on('click', function() {
        const cep = $('#cepInput').val().replace(/\D/g, '');
        if (cep.length === 8) {
            $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/`,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    if (!data.erro) {
                        $('#resultadoCep').html(`
                                <div id='divLinhasResultados'><p><strong><h1 id='tituloDivResultado'>Endereço</h1></strong> ${data.logradouro}</p><div>
                                <div id='divLinhasResultados'><p><strong><h1 id='tituloDivResultado'>Bairro</h1></strong> ${data.bairro}</p><div>
                                <div id='divLinhasResultados'><p><strong><h1 id='tituloDivResultado'>Cidade</h1></strong> ${data.localidade}</p><div>
                                <div id='divLinhasResultados'><p><strong><h1 id='tituloDivResultado'>Estado</h1></strong> ${data.uf}</p><div>
                        `).show();
                    } else {
                        $('#resultadoCep').html(`<p>CEP <strong>${cep}</strong> não encontrado.</p>`).show();
                    }
                },
                error: function() {
                    $('#resultadoCep').html('<p>Erro na consulta. Tente novamente.</p>').show();
                }
            });
        } else {
            alert('Digite um CEP válido.');
        }
    });
});
