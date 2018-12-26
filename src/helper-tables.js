HelperTable = (function () {


    /**
     * Remove as linhas selecionadas
     * @param {any} idTable      
     */
    function deleteRow(idTable) {
        $("#" + idTable + " tbody").find('input[type=checkbox]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    }

    /**
     *
     * @param {any} idTable
     */
    function getSelectedRows(idTable) {

        let selecionados = $("#" + idTable + ' tbody') // select table body and
            .find('tr') // select all rows that has
            .has('input[type=checkbox]:checked');

        return selecionados;
    }

    /**
     * 
     * @param {any} idTable
     * @param {any} rowHtml
     */
    function insertRow(idTable, rowHtml) {
        $("#" + idTable + " tbody").append(rowHtml);
    }

    /**
     * Returno uma lista de chave valor pensar????
     * @param {any} idTable
     */
    function getAllRows(idTable) {

    }

    function deleteAllRows(idTable) {
        $("#" + idTable + "  tbody").find('input[type=checkbox]').each(function () {
            $(this).parents("tr").remove();
        });
    }


    return {

        deleteRow: deleteRow,
        getSelectedRows: getSelectedRows,
        insertRow: insertRow,
        getAllRows: getAllRows,
        deleteAllRows: deleteAllRows
    }

})();
