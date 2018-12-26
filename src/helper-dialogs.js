
HelperDialog = (function () {

    function ConfirmaExclusao(mensagem, url) {

        BootstrapDialog.confirm(mensagem, function (result) {
            if (result) {
                window.location.href = url;
            }
        });
    }

    return {
        ConfirmaExclusao: ConfirmaExclusao
    }

})();

