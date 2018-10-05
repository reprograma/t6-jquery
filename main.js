function getUniqueRandomIndexesIn2DArray(table, num, indexes) {
    indexes = indexes ? indexes : [];
    for (var i = indexes.length; i < MINES; i++) {
        var random_row = Math.floor(Math.random() * HEIGHT);
        var random_cell = Math.floor(Math.random() * WIDTH);
        for (var j = 0; j < indexes.length; j++) {
            if (indexes[j][0] === random_row &&
                indexes[j][1] === random_cell) {
                return arguments.callee(table, num, indexes);
            }
        } 
        indexes.push([random_row, random_cell]);
    }
    return indexes
}

MINES = 40;
HEIGHT = 20;
WIDTH = 15;

var field_matrix = []
var field = $("#field table");
for (var i = 0; i < HEIGHT; i++) {
    var row_vector = [];
    var row = $("<tr>");
    for (var j = 0; j < WIDTH; j++) {
        var mine = $("<td>");
        row.append(mine);
        row_vector.push(mine)
    }
    field.append(row);
    field_matrix.push(row_vector);
}

var mine_indexes = getUniqueRandomIndexesIn2DArray(field_matrix, MINES);
$.each(mine_indexes, function(index, coordinates) {
    console.log($(field_matrix[coordinates[0]][coordinates[1]]).addClass("mine"));
})

